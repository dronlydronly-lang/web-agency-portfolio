import type { Metadata } from "next";
import { GundemBloqClient } from "./GundemBloqClient";
import { breadcrumbJsonLd } from "@/app/_lib/seo";

export const metadata: Metadata = {
  title: "Gündəm Bloq — Media Sayt Nümunəsi",
  description:
    "Kateqoriyalı məqalə siyahısı, oxuma irəliləyiş zolağı olan tam oxuma rejimi və əlaqəli məqalələr olan bloq demo saytı — WebmasterDeniz-in media sahəsi üçün qurduğu iş prinsipi.",
  alternates: { canonical: "/demo/gundem-bloq" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Ana səhifə", path: "/" },
  { name: "Nümunələr", path: "/numuneler" },
  { name: "Gündəm Bloq", path: "/demo/gundem-bloq" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GundemBloqClient />
    </>
  );
}
