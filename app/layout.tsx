import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { AGENCY_NAME } from "./_lib/constants";
import { LanguageProvider } from "./_lib/i18n";
import "./globals.css";

// TODO: replace with the real registered domain once purchased on Namecheap
// (see NEXT_PUBLIC_SITE_URL in Vercel env vars) — this placeholder only
// affects absolute-URL metadata (OG images, canonical, JSON-LD `url`).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://webmasterdeniz.az";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const title = "WebmasterDeniz — Veb Sayt Hazırlanması Xidməti | Rəqəmsal Agentlik";
const description =
  "WebmasterDeniz — korporativ sayt, landing page, e-ticarət, rezervasiya və bloq platformaları hazırlayan rəqəmsal agentlik. Hər layihə fərqli iş prinsipi ilə, sürətli və peşəkar şəkildə qurulur.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${AGENCY_NAME}`,
  },
  description,
  keywords: [
    "WebmasterDeniz",
    "Webmaster",
    "veb sayt hazırlanması",
    "sayt sifarişi",
    "sayt hazırlanması Bakı",
    "korporativ sayt",
    "e-ticarət saytı",
    "landing page hazırlanması",
    "rəqəmsal agentlik Azərbaycan",
  ],
  authors: [{ name: "Dəniz", url: SITE_URL }],
  creator: AGENCY_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: SITE_URL,
    siteName: AGENCY_NAME,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: AGENCY_NAME,
  alternateName: "Webmaster Dəniz",
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  description,
  areaServed: { "@type": "Country", name: "Azerbaijan" },
  founder: { "@type": "Person", name: "Dəniz" },
  sameAs: ["https://instagram.com/webmaster.deniz"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Korporativ sayt hazırlanması" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-ticarət saytı hazırlanması" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rezervasiya və sifariş sistemləri" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bloq və media platformaları" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${instrumentSans.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
