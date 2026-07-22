import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");
const publicDir = path.join(root, "public");
const siteUrl = "https://concreboxpty.com";
const canonicalUrl = `${siteUrl}/`;

const state = {
  failures: [],
  warnings: [],
  notes: [],
};

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function note(message) {
  state.notes.push(message);
}

function warn(message) {
  state.warnings.push(message);
}

function fail(message) {
  state.failures.push(message);
}

function expect(condition, message) {
  if (!condition) fail(message);
}

function getIndexHtml() {
  const filePath = path.join(outDir, "index.html");
  expect(exists(filePath), "Falta out/index.html. Ejecuta `npm run build` antes de los checks SEO.");
  return exists(filePath) ? readText(filePath) : "";
}

function getAttribute(tag, attrName) {
  const match = tag.match(new RegExp(`${attrName}=["']([^"']+)["']`, "i"));
  return match?.[1] ?? "";
}

function getMetaContent(html, selector) {
  const [attr, value] = selector.split("=");
  const re = new RegExp(`<meta\\s+[^>]*${attr}=["']${value}["'][^>]*>`, "i");
  const tag = html.match(re)?.[0] ?? "";
  return getAttribute(tag, "content");
}

function collectSourceFiles(dir) {
  if (!exists(dir)) return [];
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!["node_modules", ".next", "out", ".git"].includes(entry.name)) {
        result.push(...collectSourceFiles(fullPath));
      }
    } else if (/\.(tsx|ts|jsx|js|md|css)$/i.test(entry.name)) {
      result.push(fullPath);
    }
  }
  return result;
}

function extractReferencedImages() {
  const refs = new Set();
  const sourceRoots = ["app", "components", "data"].map((dir) => path.join(root, dir));

  for (const sourceRoot of sourceRoots) {
    for (const filePath of collectSourceFiles(sourceRoot)) {
      const content = readText(filePath);
      for (const match of content.matchAll(/["'`](\/images\/[^"'`?#]+)["'`]/g)) {
        refs.add(match[1]);
      }
    }
  }

  const html = exists(path.join(outDir, "index.html")) ? getIndexHtml() : "";
  for (const match of html.matchAll(/(?:src|href)=["']([^"']*\/images\/[^"']+)["']/g)) {
    const url = match[1].replace(siteUrl, "").split("?")[0];
    refs.add(url);
  }

  return [...refs].sort();
}

function checkBuildOutput() {
  const required = ["index.html", "robots.txt", "sitemap.xml", ".htaccess"];
  for (const name of required) {
    expect(exists(path.join(outDir, name)), `Falta out/${name} en el export estático.`);
  }
  note("Build output SEO básico presente.");
}

function checkMetadata() {
  const html = getIndexHtml();
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1] ?? "";
  const description = getMetaContent(html, "name=description");
  const ogTitle = getMetaContent(html, "property=og:title");
  const ogDescription = getMetaContent(html, "property=og:description");
  const ogUrl = getMetaContent(html, "property=og:url");
  const ogImage = getMetaContent(html, "property=og:image");
  const ogType = getMetaContent(html, "property=og:type");
  const twitterCard = getMetaContent(html, "name=twitter:card");
  const canonicalTag = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i)?.[0] ?? "";
  const canonical = getAttribute(canonicalTag, "href");
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;

  expect(/<html[^>]+lang=["']es["']/i.test(html), "El documento debe declarar lang=\"es\".");
  expect(title.includes("CONCREBOX PTY"), "El title debe incluir CONCREBOX PTY.");
  expect(title.length >= 35 && title.length <= 70, `Title fuera del rango recomendado: ${title.length} caracteres.`);
  expect(description.length >= 120 && description.length <= 170, `Meta description fuera del rango recomendado: ${description.length} caracteres.`);
  expect(canonical === canonicalUrl, `Canonical incorrecto. Esperado ${canonicalUrl}, recibido ${canonical || "(vacío)"}.`);
  expect(!/<meta\s+[^>]*name=["']keywords["']/i.test(html), "No se debe usar meta keywords obsoleto.");
  expect(ogTitle && ogDescription && ogUrl && ogImage && ogType === "website", "Open Graph incompleto o incorrecto.");
  expect(ogUrl === canonicalUrl, "og:url debe apuntar a la URL canónica.");
  expect(ogImage.startsWith(siteUrl), "og:image debe ser absoluto.");
  expect(twitterCard === "summary_large_image", "Twitter Card debe ser summary_large_image.");
  expect(h1Count === 1, `Debe existir exactamente un H1. Encontrados: ${h1Count}.`);
  note("Metadata, canonical, social preview y H1 verificados.");
}

function checkStructuredData() {
  const html = getIndexHtml();
  const blocks = [...html.matchAll(/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  expect(blocks.length >= 1, "Falta JSON-LD application/ld+json.");

  for (const block of blocks) {
    try {
      const json = JSON.parse(block[1].trim());
      const graph = Array.isArray(json["@graph"]) ? json["@graph"] : [json];
      const types = graph.flatMap((node) => node["@type"] ?? []);
      expect(types.includes("WebSite"), "JSON-LD debe incluir WebSite.");
      expect(types.includes("HomeAndConstructionBusiness"), "JSON-LD debe incluir HomeAndConstructionBusiness.");
      expect(types.includes("FAQPage"), "JSON-LD debe incluir FAQPage con preguntas visibles.");
      note(`JSON-LD válido con tipos: ${types.join(", ")}.`);
    } catch (error) {
      fail(`JSON-LD inválido: ${error.message}`);
    }
  }
}

function checkSitemap() {
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  const outSitemapPath = path.join(outDir, "sitemap.xml");
  const sitemap = exists(outSitemapPath) ? readText(outSitemapPath) : readText(sitemapPath);
  expect(sitemap.includes(`<loc>${canonicalUrl}</loc>`), "sitemap.xml debe incluir la URL canónica de producción.");
  expect(!sitemap.includes("localhost"), "sitemap.xml no debe incluir localhost.");
  expect(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sitemap), "sitemap.xml debe incluir lastmod ISO.");
  note("Sitemap validado.");
}

function checkRobots() {
  const robotsPath = exists(path.join(outDir, "robots.txt"))
    ? path.join(outDir, "robots.txt")
    : path.join(publicDir, "robots.txt");
  const robots = readText(robotsPath);
  expect(robots.includes("User-agent: *"), "robots.txt debe declarar User-agent: *.");
  expect(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), "robots.txt debe apuntar al sitemap de producción.");
  expect(!robots.includes("Disallow: /"), "robots.txt no debe bloquear todo el sitio.");
  note("Robots.txt validado.");
}

function checkLinks() {
  const html = getIndexHtml();
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];

  for (const match of links) {
    const tag = match[0];
    const openingAttrs = match[1];
    const href = getAttribute(openingAttrs, "href");
    const innerHtml = match[2];
    const textless = !innerHtml.replace(/<[^>]+>/g, "").trim() && !/aria-label=/i.test(openingAttrs);

    if (!href) continue;

    if (textless) warn(`Enlace sin texto visible ni aria-label: ${href}`);

    if (href.startsWith("#")) {
      const id = href.slice(1);
      expect(ids.has(id), `El enlace interno ${href} no encuentra un id en la página.`);
    }

    if (/^https?:\/\//i.test(href) && !href.startsWith(siteUrl)) {
      expect(/target=["']_blank["']/i.test(tag), `Link externo sin target="_blank": ${href}`);
      expect(/rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/i.test(tag), `Link externo sin rel seguro: ${href}`);
    }
  }

  note(`${links.length} enlaces revisados.`);
}

function checkAssets() {
  const refs = extractReferencedImages();
  expect(refs.length > 0, "No se detectaron imágenes referenciadas para validar.");

  let referencedBytes = 0;
  for (const ref of refs) {
    const filePath = path.join(publicDir, ref.replace(/^\//, ""));
    expect(exists(filePath), `Imagen referenciada no existe: ${ref}`);
    if (!exists(filePath)) continue;

    const size = fs.statSync(filePath).size;
    referencedBytes += size;
    const kb = Math.round(size / 1024);
    const isPlan = /plano/i.test(ref);
    const isCriticalLandingPhoto = /^\/images\/(hero|system|compact|family|premium|investment|interior|installation)-optimized\.jpg$/.test(ref);

    if (isCriticalLandingPhoto) {
      expect(size <= 600 * 1024, `Imagen crítica demasiado pesada (${kb} KB): ${ref}`);
    } else if (isPlan) {
      expect(size <= 3200 * 1024, `Plano demasiado pesado (${kb} KB): ${ref}`);
    } else {
      expect(size <= 1200 * 1024, `Imagen referenciada demasiado pesada (${kb} KB): ${ref}`);
    }
  }

  const referencedSet = new Set(refs.map((ref) => path.normalize(ref.replace(/^\//, ""))));
  const publicImages = collectFiles(path.join(publicDir, "images"));
  const unusedHeavy = publicImages
    .filter((filePath) => !referencedSet.has(path.normalize(path.relative(publicDir, filePath))))
    .filter((filePath) => fs.statSync(filePath).size > 2 * 1024 * 1024)
    .map((filePath) => `${path.relative(publicDir, filePath)} (${Math.round(fs.statSync(filePath).size / 1024)} KB)`);

  if (unusedHeavy.length > 0) {
    warn(`Hay assets pesados no referenciados que aumentan el deploy si se sube todo public/: ${unusedHeavy.slice(0, 8).join(", ")}${unusedHeavy.length > 8 ? "..." : ""}`);
  }

  note(`${refs.length} imágenes referenciadas validadas. Peso referenciado aproximado: ${(referencedBytes / 1024 / 1024).toFixed(2)} MB.`);
}

function collectFiles(dir) {
  if (!exists(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function printResult(label) {
  for (const message of state.notes) console.log(`✓ ${message}`);
  for (const message of state.warnings) console.warn(`⚠ ${message}`);
  if (state.failures.length > 0) {
    for (const message of state.failures) console.error(`✕ ${message}`);
    console.error(`${label} falló con ${state.failures.length} error(es).`);
    process.exit(1);
  }
  console.log(`${label} OK.`);
}

const command = process.argv[2] ?? "check";

switch (command) {
  case "check":
    checkBuildOutput();
    checkMetadata();
    checkStructuredData();
    checkRobots();
    checkSitemap();
    checkLinks();
    checkAssets();
    printResult("SEO check");
    break;
  case "build":
    checkBuildOutput();
    checkMetadata();
    printResult("SEO build");
    break;
  case "links":
    checkLinks();
    printResult("SEO links");
    break;
  case "assets":
    checkAssets();
    printResult("SEO assets");
    break;
  case "sitemap":
    checkSitemap();
    checkRobots();
    printResult("SEO sitemap");
    break;
  default:
    console.error(`Comando SEO desconocido: ${command}`);
    console.error("Usa: check, build, links, assets o sitemap.");
    process.exit(1);
}
