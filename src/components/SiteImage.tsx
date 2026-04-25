import type { ImgHTMLAttributes } from "react";
import { getSiteImage, type SiteImageSource } from "@/lib/siteImages";

type SiteImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt: string;
  image?: SiteImageSource;
  imageName?: string;
};

export default function SiteImage({ alt, image, imageName, ...imgProps }: SiteImageProps) {
  const resolvedImage = image ?? (imageName ? getSiteImage(imageName) : undefined);

  if (!resolvedImage) {
    throw new Error("SiteImage requires either image or imageName.");
  }

  return (
    <picture>
      {resolvedImage.avif ? <source srcSet={resolvedImage.avif} type="image/avif" /> : null}
      {resolvedImage.webp ? <source srcSet={resolvedImage.webp} type="image/webp" /> : null}
      <img src={resolvedImage.src} alt={alt} {...imgProps} />
    </picture>
  );
}
