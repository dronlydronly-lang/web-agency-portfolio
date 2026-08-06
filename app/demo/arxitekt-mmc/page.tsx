import type { Metadata } from "next";
import { ArxitektMmcClient } from "./ArxitektMmcClient";
import { breadcrumbJsonLd } from "@/app/_lib/seo";

export const metadata: Metadata = {
  title: "Arxitekt MMC — Korporativ Sayt Nümunəsi",
  description:
    "Layihə kataloqu, büdcə hesablayıcısı və sorğu forması olan korporativ imic sayt nümunəsi — WebmasterDeniz-in tikinti və arxitektura sahəsi üçün qurduğu iş prinsipi.",
  alternates: { canonical: "/demo/arxitekt-mmc" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Ana səhifə", path: "/" },
  { name: "Nümunələr", path: "/numuneler" },
  { name: "Arxitekt MMC", path: "/demo/arxitekt-mmc" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArxitektMmcClient />
    </>
  );
}
