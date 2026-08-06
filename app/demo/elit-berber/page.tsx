import type { Metadata } from "next";
import { ElitBerberClient } from "./ElitBerberClient";
import { breadcrumbJsonLd } from "@/app/_lib/seo";

export const metadata: Metadata = {
  title: "Elit Berber Studio — Rezervasiya Sayt Nümunəsi",
  description:
    "Usta seçimi, həftəlik təqvim zolağı və saat seçimi olan onlayn növbə sistemi demo saytı — WebmasterDeniz-in gözəllik sahəsi üçün qurduğu iş prinsipi.",
  alternates: { canonical: "/demo/elit-berber" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Ana səhifə", path: "/" },
  { name: "Nümunələr", path: "/numuneler" },
  { name: "Elit Berber Studio", path: "/demo/elit-berber" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ElitBerberClient />
    </>
  );
}
