#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredHeaders = [
  "Strict-Transport-Security",
  "X-Content-Type-Options",
  "X-Frame-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "Cross-Origin-Opener-Policy",
  "Content-Security-Policy",
];

const ignoredDirs = new Set([
  ".git",
  ".next",
  ".obsidian",
  "node_modules",
  "out",
  "dist",
  "build",
  "coverage",
  ".venv",
]);

const sourceExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".css",
  ".json",
  ".yml",
  ".yaml",
  ".md",
  ".txt",
  ".xml",
  ".svg",
  ".htaccess",
]);

const allowedDangerousSnippets = [
  "dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}",
];

function relative(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, "/");
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function walk(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (sourceExtensions.has(path.extname(entry.name)) || entry.name === ".htaccess") {
      files.push(fullPath);
    }
  }
  return files;
}

function add(failures, condition, message) {
  if (!condition) failures.push(message);
}

function checkHeaders() {
  const failures = [];
  add(failures, exists("public/.htaccess"), "Falta public/.htaccess para headers en Hostinger/Apache.");
  if (!exists("public/.htaccess")) return failures;
  const htaccess = read("public/.htaccess");
  for (const header of requiredHeaders) {
    add(failures, htaccess.includes(header), `Falta header ${header} en public/.htaccess.`);
  }
  add(
    failures,
    htaccess.includes("max-age=31536000") && !htaccess.includes("includeSubDomains") && !htaccess.includes("preload"),
    "HSTS debe existir sin includeSubDomains/preload hasta verificar subdominios.",
  );
  add(failures, htaccess.includes("upgrade-insecure-requests"), "CSP debe incluir upgrade-insecure-requests.");
  add(failures, htaccess.includes("object-src 'none'"), "CSP debe bloquear object-src.");
  add(failures, htaccess.includes("frame-ancestors 'none'"), "CSP debe bloquear framing.");
  add(failures, htaccess.includes("Options -Indexes"), "Debe deshabilitarse listado de directorios.");
  return failures;
}

function checkEnvIgnore() {
  const failures = [];
  const gitignore = exists(".gitignore") ? read(".gitignore") : "";
  add(failures, /^\.env$/m.test(gitignore), ".gitignore debe ignorar .env.");
  add(failures, /^\.env\.\*$/m.test(gitignore), ".gitignore debe ignorar .env.*.");
  add(failures, /^!\.env\.example$/m.test(gitignore), ".gitignore debe permitir .env.example si algún día se necesita.");
  return failures;
}

function checkBlankTargets(files) {
  const failures = [];
  for (const file of files.filter((file) => [".tsx", ".jsx", ".html"].includes(path.extname(file)))) {
    const content = fs.readFileSync(file, "utf8");
    const targetMatches = content.match(/target=["']_blank["']/g) ?? [];
    if (targetMatches.length === 0) continue;
    const anchorBlocks = content.match(/<a[\s\S]*?>/g) ?? [];
    for (const anchor of anchorBlocks.filter((anchor) => /target=["']_blank["']/.test(anchor))) {
      if (!/rel=["'][^"']*\bnoopener\b[^"']*\bnoreferrer\b[^"']*["']/.test(anchor)) {
        failures.push(`${relative(file)} tiene target="_blank" sin rel="noopener noreferrer".`);
      }
    }
  }
  return failures;
}

function checkDangerousSinks(files) {
  const failures = [];
  const dangerousPatterns = [
    /\binnerHTML\b/,
    /\bouterHTML\b/,
    /document\.write\s*\(/,
    /\beval\s*\(/,
    /new Function\s*\(/,
    /javascript:/i,
  ];
  for (const file of files.filter((file) => [".ts", ".tsx", ".js", ".jsx", ".mjs"].includes(path.extname(file)))) {
    const rel = relative(file);
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of dangerousPatterns) {
      if (rel === "scripts/security-check.mjs" && pattern.toString().includes("javascript:")) {
        continue;
      }
      if (pattern.test(content)) {
        failures.push(`${rel} contiene sink riesgoso: ${pattern}.`);
      }
    }
    if (content.includes("dangerouslySetInnerHTML")) {
      const allowed = allowedDangerousSnippets.some((snippet) => content.includes(snippet));
      if (!allowed) failures.push(`${rel} usa dangerouslySetInnerHTML fuera de la allowlist.`);
    }
  }
  return failures;
}

function checkPlainHttp(files) {
  const failures = [];
  const allowed = [/http:\/\/localhost:3000/, /http:\/\/www\.sitemaps\.org/, /http:\/\/www\.w3\.org/];
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(/http:\/\/[^\s)"'<>]+/g) ?? [];
    for (const match of matches) {
      if (!allowed.some((pattern) => pattern.test(match))) {
        failures.push(`${relative(file)} contiene URL no HTTPS: ${match}`);
      }
    }
  }
  return failures;
}

function checkWorkflow() {
  const failures = [];
  const workflow = exists(".github/workflows/deploy-hostinger.yml")
    ? read(".github/workflows/deploy-hostinger.yml")
    : "";
  add(failures, workflow.includes("npm run docs:check"), "CI debe ejecutar npm run docs:check.");
  add(failures, workflow.includes("npm run security:check"), "CI debe ejecutar npm run security:check.");
  return failures;
}

function checkSecrets(files) {
  const failures = [];
  const patterns = [
    /-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/,
    /AKIA[0-9A-Z]{16}/,
    /ghp_[A-Za-z0-9_]{30,}/,
    /xox[baprs]-[A-Za-z0-9-]{10,}/,
  ];
  for (const file of files) {
    const rel = relative(file);
    if (rel.startsWith("public/images/")) continue;
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of patterns) {
      if (pattern.test(content)) {
        failures.push(`${rel} parece contener un secreto (${pattern}).`);
      }
    }
  }
  return failures;
}

function runCheck() {
  const files = walk(root);
  const failures = [
    ...checkHeaders(),
    ...checkEnvIgnore(),
    ...checkBlankTargets(files),
    ...checkDangerousSinks(files),
    ...checkPlainHttp(files),
    ...checkWorkflow(),
    ...checkSecrets(files),
  ];

  if (failures.length > 0) {
    console.error("security:check falló:");
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log("security:check pasó: controles estáticos esenciales verificados.");
}

function runHeaders() {
  const failures = checkHeaders();
  if (failures.length > 0) {
    console.error("security:headers falló:");
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }
  console.log("security:headers pasó: public/.htaccess contiene headers esperados.");
}

const command = process.argv[2] ?? "check";
if (command === "check") runCheck();
else if (command === "headers") runHeaders();
else {
  console.error("Uso: node scripts/security-check.mjs <check|headers>");
  process.exit(1);
}
