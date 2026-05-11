import type { MouseEvent } from "react";

const WHATSAPP_PHONE = "393667701214";

export const whatsappFallbackUrl = `https://wa.me/${WHATSAPP_PHONE}`;
export const whatsappAppUrl = `whatsapp://send?phone=${WHATSAPP_PHONE}`;

export const openWhatsApp = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  window.location.href = whatsappAppUrl;

  window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      window.open(whatsappFallbackUrl, "_blank", "noopener,noreferrer");
    }
  }, 1200);
};
