import type { Metadata } from "next";
import { AromaCafeClient } from "./AromaCafeClient";
import { breadcrumbJsonLd } from "@/app/_lib/seo";

export const metadata: Metadata = {
  title: "Aroma Cafe — Restoran Sayt Nümunəsi",
  description:
    "Restoran üçün masa nömrəsi ilə sifariş və canlı mətbəx statusu izləməsi olan demo sayt — WebmasterDeniz-in restoran sahəsi üçün qurduğu iş prinsipi.",
  alternates: { canonical: "/demo/aroma-cafe" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Ana səhifə", path: "/" },
  { name: "Nümunələr", path: "/numuneler" },
  { name: "Aroma Cafe", path: "/demo/aroma-cafe" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AromaCafeClient />
    </>
  );
}
