import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve(process.cwd(), "src/assets");
const outputDir = path.join(sourceDir, "generated");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxWidth = 1600;
const webpQuality = 78;
const avifQuality = 55;

async function collectSourceImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "generated") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectSourceImages(fullPath));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (supportedExtensions.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getOutputPaths(filePath) {
  const relativePath = path.relative(sourceDir, filePath);
  const parsedPath = path.parse(relativePath);
  const outputBasePath = path.join(outputDir, parsedPath.dir, parsedPath.name);

  return {
    webp: `${outputBasePath}.webp`,
    avif: `${outputBasePath}.avif`,
  };
}

async function ensureOutputDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function transformImage(filePath) {
  const { webp, avif } = getOutputPaths(filePath);
  await ensureOutputDirectory(webp);

  const image = sharp(filePath).rotate();
  const metadata = await image.metadata();
  const pipeline = metadata.width && metadata.width > maxWidth
    ? image.resize({ width: maxWidth, withoutEnlargement: true })
    : image;

  await Promise.all([
    pipeline.clone().webp({ quality: webpQuality, effort: 6, alphaQuality: 100 }).toFile(webp),
    pipeline.clone().avif({ quality: avifQuality, effort: 5 }).toFile(avif),
  ]);
}

async function main() {
  const sourceImages = await collectSourceImages(sourceDir);

  await fs.rm(outputDir, { recursive: true, force: true });
  await fs.mkdir(outputDir, { recursive: true });

  for (const filePath of sourceImages) {
    await transformImage(filePath);
  }

  console.log(`Generated modern image variants for ${sourceImages.length} source files.`);
}

await main();
