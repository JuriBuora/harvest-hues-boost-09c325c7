const originalImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const generatedImages = import.meta.glob("../assets/generated/**/*.{webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export interface SiteImageSource {
  fileName: string;
  src: string;
  webp?: string;
  avif?: string;
  webpSrcSet?: string;
  avifSrcSet?: string;
}

function normalizeFileName(fileName: string) {
  return fileName.replace(/^\/+/, "").replace(/\\/g, "/");
}

function stripExtension(fileName: string) {
  return fileName.replace(/\.[^./]+$/, "");
}

function createSourceSet(baseName: string, extension: "avif" | "webp") {
  const variants = [480, 800, 1200, 1600]
    .map((width) => {
      const src = generatedImages[`../assets/generated/${baseName}-${width}.${extension}`];
      return src ? `${src} ${width}w` : null;
    })
    .filter(Boolean);

  return variants.length > 0 ? variants.join(", ") : undefined;
}

export function getSiteImage(fileName: string): SiteImageSource {
  const normalizedFileName = normalizeFileName(fileName);
  const originalKey = `../assets/${normalizedFileName}`;
  const originalSrc = originalImages[originalKey];

  if (!originalSrc) {
    throw new Error(`Missing site image source: ${normalizedFileName}`);
  }

  const baseName = stripExtension(normalizedFileName);
  const webp = generatedImages[`../assets/generated/${baseName}.webp`];
  const avif = generatedImages[`../assets/generated/${baseName}.avif`];

  return {
    fileName: normalizedFileName,
    src: originalSrc,
    webp,
    avif,
    webpSrcSet: createSourceSet(baseName, "webp"),
    avifSrcSet: createSourceSet(baseName, "avif"),
  };
}
