import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { LanguageProvider } from "./_lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "WebmasterDeniz — Rəqəmsal Agentlik | Peşəkar Veb Sayt Hazırlanması",
  description:
    "Biznesiniz üçün sürətli, müasir və mobil uyğun veb saytlar hazırlayırıq. Korporativ sayt, landing page, e-ticarət və portfolio saytlar.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${geistSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
