import type { ImgHTMLAttributes } from "react";
import { getSiteImage, type SiteImageSource } from "@/lib/siteImages";

type SiteImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt: string;
  image?: SiteImageSource;
  imageName?: string;
};

export default function SiteImage({ alt, image, imageName, fetchPriority, sizes = "100vw", ...imgProps }: SiteImageProps) {
  const resolvedImage = image ?? (imageName ? getSiteImage(imageName) : undefined);

  if (!resolvedImage) {
    throw new Error("SiteImage requires either image or imageName.");
  }

  return (
    <picture>
      {resolvedImage.avif ? (
        <source srcSet={resolvedImage.avifSrcSet ?? resolvedImage.avif} type="image/avif" sizes={sizes} />
      ) : null}
      {resolvedImage.webp ? (
        <source srcSet={resolvedImage.webpSrcSet ?? resolvedImage.webp} type="image/webp" sizes={sizes} />
      ) : null}
      <img
        src={resolvedImage.src}
        alt={alt}
        sizes={sizes}
        {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
        {...imgProps}
      />
    </picture>
  );
}
