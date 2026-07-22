#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const docsDir = path.join(root, "docs");
const generatedWarning =
  "Contenido administrado automáticamente. No editar dentro de los marcadores.";

const ignoredSegments = new Set([
  ".git",
  ".obsidian",
  "node_modules",
  ".next",
  "out",
  "dist",
  "build",
  "target",
  "coverage",
  ".venv",
]);

const reviewPatterns = [/REVIEW_REQUIRED/i, /REVISI[ÓO]N_REQUERIDA/i];

const managedSections = [
  {
    file: "docs/00_PROJECT_INDEX.md",
    name: "documentos",
    render: renderDocsList,
  },
  {
    file: "docs/00_PROJECT_INDEX.md",
    name: "estructura-detectada",
    render: renderDetectedStructure,
  },
  {
    file: "docs/04_MODULE_MAP.md",
    name: "rutas-alto-nivel",
    render: renderTopLevelRoutes,
  },
  {
    file: "docs/05_COMMANDS.md",
    name: "scripts-package-json",
    render: renderPackageScripts,
  },
];

function markerStart(name) {
  return `<!-- AUTO-GENERATED:START ${name} -->`;
}

function markerEnd(name) {
  return `<!-- AUTO-GENERATED:END ${name} -->`;
}

function isIgnored(relativePath) {
  const normalized = relativePath.replaceAll("\\", "/");
  const parts = normalized.split("/");
  if (parts.some((part) => ignoredSegments.has(part))) return true;
  const base = parts.at(-1) ?? "";
  if (base === ".env" || base.startsWith(".env.")) return true;
  return false;
}

function readFile(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function writeFile(relativePath, content) {
  fs.mkdirSync(path.dirname(path.join(root, relativePath)), { recursive: true });
  fs.writeFileSync(path.join(root, relativePath), content, "utf8");
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function getPackageJson() {
  if (!fileExists("package.json")) return {};
  return JSON.parse(readFile("package.json"));
}

function listMarkdownDocs() {
  if (!fs.existsSync(docsDir)) return [];
  return fs
    .readdirSync(docsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => `docs/${entry.name}`)
    .sort((a, b) => a.localeCompare(b));
}

function listTopLevelEntries() {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => !isIgnored(entry.name))
    .map((entry) => ({
      name: entry.name,
      kind: entry.isDirectory() ? "directorio" : "archivo",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderDocsList() {
  const docs = listMarkdownDocs();
  if (docs.length === 0) return "- Pendiente: no hay documentos en `docs/`.";
  return docs.map((doc) => `- [${doc.replace("docs/", "")}](${doc.replace("docs/", "")})`).join("\n");
}

function renderDetectedStructure() {
  const entries = listTopLevelEntries();
  return entries.map((entry) => `- \`${entry.name}\` — ${entry.kind}`).join("\n");
}

function renderTopLevelRoutes() {
  const selected = listTopLevelEntries().filter((entry) =>
    ["app", "components", "data", "public", ".github", ".githooks", "scripts", "docs"].includes(
      entry.name,
    ),
  );
  return selected.map((entry) => `- \`${entry.name}/\` — ruta detectada`).join("\n");
}

function renderPackageScripts() {
  const pkg = getPackageJson();
  const scripts = pkg.scripts ?? {};
  const names = Object.keys(scripts).sort((a, b) => a.localeCompare(b));
  if (names.length === 0) return "- Pendiente: `package.json` no define scripts.";
  return names.map((name) => `- \`npm run ${name}\` → \`${scripts[name]}\``).join("\n");
}

function updateSection(content, name, generatedContent) {
  const start = markerStart(name);
  const end = markerEnd(name);
  const startIndex = content.indexOf(start);
  const endIndex = content.indexOf(end);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`No se encontraron marcadores válidos para la sección "${name}".`);
  }
  const before = content.slice(0, startIndex + start.length);
  const after = content.slice(endIndex);
  return `${before}\n${generatedWarning}\n\n${generatedContent.trim()}\n${after}`;
}

function buildSyncedContent(relativePath) {
  let content = readFile(relativePath);
  for (const section of managedSections.filter((section) => section.file === relativePath)) {
    content = updateSection(content, section.name, section.render());
  }
  return content;
}

function sync({ write }) {
  const changed = [];
  const files = [...new Set(managedSections.map((section) => section.file))];
  for (const file of files) {
    if (!fileExists(file)) {
      throw new Error(`No existe el archivo administrado: ${file}`);
    }
    const current = readFile(file);
    const next = buildSyncedContent(file);
    if (current !== next) {
      changed.push(file);
      if (write) writeFile(file, next);
    }
  }
  return changed;
}

function checkReviewMarkers() {
  const candidates = ["README.md", "AGENTS.md", ...listMarkdownDocs()].filter(fileExists);
  const findings = [];
  for (const file of candidates) {
    if (isIgnored(file)) continue;
    const lines = readFile(file).split(/\r?\n/);
    lines.forEach((line, index) => {
      if (reviewPatterns.some((pattern) => pattern.test(line))) {
        findings.push(`${file}:${index + 1}: ${line.trim()}`);
      }
    });
  }
  return findings;
}

function gitFiles(args) {
  try {
    const output = execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((file) => !isIgnored(file));
  } catch {
    return [];
  }
}

function changedFiles({ stagedOnly = false } = {}) {
  const files = new Set();
  const staged = gitFiles(["diff", "--cached", "--name-only"]);
  staged.forEach((file) => files.add(file));
  if (!stagedOnly) {
    const unstaged = gitFiles(["diff", "--name-only"]);
    const untracked = gitFiles(["ls-files", "--others", "--exclude-standard"]);
    unstaged.forEach((file) => files.add(file));
    untracked.forEach((file) => files.add(file));
  }
  return [...files].sort((a, b) => a.localeCompare(b));
}

function docsForFile(file) {
  const docs = new Set();
  if (file.startsWith("docs/") || file === "README.md") docs.add("docs/00_PROJECT_INDEX.md");
  if (file === "AGENTS.md" || file.startsWith(".githooks/")) docs.add("AGENTS.md");
  if (/^(package(-lock)?\.json|next\.config\.ts|tsconfig\.json|eslint\.config\.mjs|postcss\.config\.mjs)$/.test(file)) {
    docs.add("docs/05_COMMANDS.md");
    docs.add("docs/03_ARCHITECTURE.md");
  }
  if (file.startsWith(".github/workflows/")) {
    docs.add("docs/03_ARCHITECTURE.md");
    docs.add("docs/05_COMMANDS.md");
    docs.add("docs/06_DECISIONS.md");
  }
  if (file.startsWith("app/") || file.startsWith("components/") || file.startsWith("data/")) {
    docs.add("docs/01_CURRENT_STATUS.md");
    docs.add("docs/03_ARCHITECTURE.md");
    docs.add("docs/04_MODULE_MAP.md");
  }
  if (file.startsWith("public/")) {
    docs.add("docs/03_ARCHITECTURE.md");
    if (file.includes("robots") || file.includes("sitemap") || file.includes("og-")) {
      docs.add("docs/02_REQUIREMENTS.md");
    }
  }
  if (file.startsWith("scripts/")) {
    docs.add("docs/05_COMMANDS.md");
    docs.add("docs/06_DECISIONS.md");
  }
  return [...docs].sort((a, b) => a.localeCompare(b));
}

function runStatus() {
  const files = changedFiles();
  if (files.length === 0) {
    console.log("No hay cambios detectados en Git para evaluar documentación.");
    return;
  }
  console.log("Cambios detectados:");
  files.forEach((file) => console.log(`- ${file}`));
  console.log("\nDocumentación posiblemente afectada:");
  const mapping = new Map();
  for (const file of files) {
    const docs = docsForFile(file);
    if (docs.length === 0) continue;
    mapping.set(file, docs);
  }
  if (mapping.size === 0) {
    console.log("- Sin documentos específicos detectados por el mapeo actual.");
    return;
  }
  for (const [file, docs] of mapping) {
    console.log(`- ${file} → ${docs.join(", ")}`);
  }
}

function runCheck() {
  const changed = sync({ write: false });
  const reviewMarkers = checkReviewMarkers();
  if (changed.length > 0) {
    console.error("La documentación determinista está desactualizada:");
    changed.forEach((file) => console.error(`- ${file}`));
    console.error("\nEjecuta: npm run docs:sync");
  }
  if (reviewMarkers.length > 0) {
    console.error("\nHay revisiones obligatorias pendientes:");
    reviewMarkers.forEach((finding) => console.error(`- ${finding}`));
  }
  if (changed.length > 0 || reviewMarkers.length > 0) {
    process.exitCode = 1;
    return;
  }
  console.log("Documentación determinista actualizada y sin revisiones obligatorias pendientes.");
}

function runSync() {
  const changed = sync({ write: true });
  if (changed.length === 0) {
    console.log("docs:sync no cambió archivos; la documentación determinista ya estaba actualizada.");
    return;
  }
  console.log("docs:sync actualizó:");
  changed.forEach((file) => console.log(`- ${file}`));
  const affected = new Set();
  changedFiles().forEach((file) => docsForFile(file).forEach((doc) => affected.add(doc)));
  if (affected.size > 0) {
    console.log("\nDocumentación manual a revisar según cambios actuales:");
    [...affected].sort((a, b) => a.localeCompare(b)).forEach((doc) => console.log(`- ${doc}`));
  }
}

function runHook() {
  const staged = changedFiles({ stagedOnly: true });
  if (staged.length === 0) {
    console.log("pre-commit docs: sin archivos staged.");
    return;
  }
  console.log("pre-commit docs: validando documentación...");
  const changed = sync({ write: true });
  if (changed.length > 0) {
    console.error("docs:sync modificó documentación. Revisa y agrega estos archivos al commit:");
    changed.forEach((file) => console.error(`- ${file}`));
    console.error("Luego repite el commit.");
    process.exit(1);
  }
  runCheck();
  if (process.exitCode) process.exit(process.exitCode);
}

function runWatch() {
  const watchRoots = ["package.json", "README.md", "AGENTS.md", "docs", "app", "components", "data", "scripts", ".github"];
  let timer;
  const run = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("\nCambio detectado. Ejecutando docs:sync y docs:check...");
      try {
        runSync();
        runCheck();
      } catch (error) {
        console.error(error.message);
      }
    }, 500);
  };
  for (const entry of watchRoots) {
    const fullPath = path.join(root, entry);
    if (!fs.existsSync(fullPath)) continue;
    fs.watch(fullPath, { recursive: fs.statSync(fullPath).isDirectory() }, run);
  }
  console.log("docs:watch activo. Presiona Ctrl+C para detenerlo.");
}

const command = process.argv[2];

try {
  if (command === "sync") runSync();
  else if (command === "check") runCheck();
  else if (command === "status") runStatus();
  else if (command === "hook") runHook();
  else if (command === "watch") runWatch();
  else {
    console.error("Uso: node scripts/docs-tools.mjs <sync|check|status|hook|watch>");
    process.exit(1);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
