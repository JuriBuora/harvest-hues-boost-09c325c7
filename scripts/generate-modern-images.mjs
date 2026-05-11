import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve(process.cwd(), "src/assets");
const outputDir = path.join(sourceDir, "generated");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxWidth = 1600;
const responsiveWidths = [480, 800, 1200, 1600];
const webpQuality = 74;
const avifQuality = 44;
const forceRegeneration = process.env.FORCE_IMAGE_SYNC === "1";
const requiredImagesWhenCacheExists = new Set([
  "hero-azienda-aerea.jpg",
  "logo-farina.png",
]);

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

function getOutputPaths(filePath, imageWidth) {
  const relativePath = path.relative(sourceDir, filePath);
  const parsedPath = path.parse(relativePath);
  const outputBasePath = path.join(outputDir, parsedPath.dir, parsedPath.name);

  return {
    webp: `${outputBasePath}.webp`,
    avif: `${outputBasePath}.avif`,
    variants: responsiveWidths
      .filter((width) => !imageWidth || imageWidth >= width)
      .map((width) => ({
        width,
        webp: `${outputBasePath}-${width}.webp`,
        avif: `${outputBasePath}-${width}.avif`,
      })),
  };
}

async function ensureOutputDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function hasGeneratedAssets() {
  try {
    const entries = await fs.readdir(outputDir);
    return entries.some((entry) => entry.endsWith(".webp") || entry.endsWith(".avif"));
  } catch {
    return false;
  }
}

async function transformImage(filePath) {
  const baseImage = sharp(filePath).rotate();
  const metadata = await baseImage.metadata();
  const { webp, avif, variants } = getOutputPaths(filePath, metadata.width);
  const expectedOutputs = [
    webp,
    avif,
    ...variants.flatMap(({ webp: variantWebp, avif: variantAvif }) => [variantWebp, variantAvif]),
  ];

  const missingOutputChecks = await Promise.all(expectedOutputs.map((outputPath) => fileExists(outputPath)));
  if (!forceRegeneration && missingOutputChecks.every(Boolean)) {
    return false;
  }

  await ensureOutputDirectory(webp);

  const pipeline = metadata.width && metadata.width > maxWidth
    ? baseImage.resize({ width: maxWidth, withoutEnlargement: true })
    : baseImage;

  await pipeline.clone().webp({ quality: webpQuality, effort: 4, alphaQuality: 100 }).toFile(webp);
  await pipeline.clone().avif({ quality: avifQuality, effort: 3 }).toFile(avif);

  for (const { width, webp: variantWebp, avif: variantAvif } of variants) {
    const resized = sharp(filePath).rotate().resize({ width, withoutEnlargement: true });

    await ensureOutputDirectory(variantWebp);
    await resized.clone().webp({ quality: webpQuality, effort: 4, alphaQuality: 100 }).toFile(variantWebp);
    await resized.clone().avif({ quality: avifQuality, effort: 3 }).toFile(variantAvif);
  }

  return true;
}

async function main() {
  const sourceImages = await collectSourceImages(sourceDir);

  const shouldUseExistingCache = !forceRegeneration && await hasGeneratedAssets();

  if (forceRegeneration) {
    await fs.rm(outputDir, { recursive: true, force: true });
  }

  await fs.mkdir(outputDir, { recursive: true });

  const imagesToProcess = shouldUseExistingCache
    ? sourceImages.filter((filePath) => requiredImagesWhenCacheExists.has(path.basename(filePath)))
    : sourceImages;

  let generatedCount = 0;
  for (const filePath of imagesToProcess) {
    const didGenerate = await transformImage(filePath);
    if (didGenerate) {
      generatedCount += 1;
    }
  }

  if (shouldUseExistingCache && generatedCount === 0) {
    console.log("Modern image variants already exist. Set FORCE_IMAGE_SYNC=1 to regenerate all of them.");
    return;
  }

  console.log(`Generated modern image variants for ${generatedCount} of ${imagesToProcess.length} source files.`);
}

await main();
