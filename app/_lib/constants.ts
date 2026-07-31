export const AGENCY_NAME = "WebmasterDeniz";
export const WHATSAPP_NUMBER = "994776253336";

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl(
  "Salam, sayt hazirlanmasi haqqinda melumat almaq isteyirem."
);

export const INSTAGRAM_URL = "https://instagram.com/webmaster.deniz";
