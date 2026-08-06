import type { Metadata } from "next";
import { FotoStudioClient } from "./FotoStudioClient";
import { breadcrumbJsonLd } from "@/app/_lib/seo";

export const metadata: Metadata = {
  title: "Foto Studio — Portfolio Sayt Nümunəsi",
  description:
    "Filtrlənə bilən qalereya, klaviatura ilə idarə olunan lightbox və paket seçimi olan fotoqraf portfolio demo saytı — WebmasterDeniz-in yaradıcı sahə üçün qurduğu iş prinsipi.",
  alternates: { canonical: "/demo/foto-studio" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Ana səhifə", path: "/" },
  { name: "Nümunələr", path: "/numuneler" },
  { name: "Foto Studio", path: "/demo/foto-studio" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FotoStudioClient />
    </>
  );
}
