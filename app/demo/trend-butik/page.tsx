import type { Metadata } from "next";
import { TrendButikClient } from "./TrendButikClient";
import { breadcrumbJsonLd } from "@/app/_lib/seo";

export const metadata: Metadata = {
  title: "Trend Butik — E-ticarət Sayt Nümunəsi",
  description:
    "Kateqoriya filtri, sürətli baxış modalı və sürüşən səbət paneli olan onlayn mağaza demo saytı — WebmasterDeniz-in pərakəndə satış sahəsi üçün qurduğu iş prinsipi.",
  alternates: { canonical: "/demo/trend-butik" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Ana səhifə", path: "/" },
  { name: "Nümunələr", path: "/numuneler" },
  { name: "Trend Butik", path: "/demo/trend-butik" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrendButikClient />
    </>
  );
}
