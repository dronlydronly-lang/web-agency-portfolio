export const AGENCY_NAME = "WebUsta";
export const WHATSAPP_NUMBER = "994776253336";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl(
  "Salam, sayt hazirlanmasi haqqinda melumat almaq isteyirem."
);
