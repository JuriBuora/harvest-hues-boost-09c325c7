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
}

function normalizeFileName(fileName: string) {
  return fileName.replace(/^\/+/, "").replace(/\\/g, "/");
}

function stripExtension(fileName: string) {
  return fileName.replace(/\.[^./]+$/, "");
}

export function getSiteImage(fileName: string): SiteImageSource {
  const normalizedFileName = normalizeFileName(fileName);
  const originalKey = `../assets/${normalizedFileName}`;
  const originalSrc = originalImages[originalKey];

  if (!originalSrc) {
    throw new Error(`Missing site image source: ${normalizedFileName}`);
  }

  const baseName = stripExtension(normalizedFileName);

  return {
    fileName: normalizedFileName,
    src: originalSrc,
    webp: generatedImages[`../assets/generated/${baseName}.webp`],
    avif: generatedImages[`../assets/generated/${baseName}.avif`],
  };
}
