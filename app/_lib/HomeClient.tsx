"use client";

import Link from "next/link";
import { AGENCY_NAME, INSTAGRAM_URL, WHATSAPP_URL, whatsappUrl } from "./constants";
import { useLanguage, type Lang } from "./i18n";
import { ArrowRightIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { translations } from "./translations";

const HEADER_WHATSAPP_URL = whatsappUrl(
  "Salam, veb-sayt hazırlanması haqqında məlumat almaq istərdim"
);

// Above-the-fold: header + hero + service marquee. Everything else lives in
// BelowFold.tsx, loaded via next/dynamic from page.tsx so its JS doesn't
// block the hero's time-to-interactive.
export function HomeClient() {
  return (
    <>
      <TopBar />
      <Hero />
      <Marquee />
    </>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const option = (value: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(value)}
      className={`rounded px-2 py-0.5 text-xs font-semibold transition-colors ${
        lang === value ? "text-clay" : "text-paper/40 hover:text-paper"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-0.5 border-l border-ink-line pl-3">
      {option("az", "AZ")}
      <span className="text-paper/20">/</span>
      {option("en", "EN")}
    </div>
  );
}

export function TopBar() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-medium tracking-tight text-paper"
        >
          {AGENCY_NAME}
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-paper/60 md:flex">
          <Link href="/numuneler" className="transition-colors hover:text-paper">
            {t.nav.work}
          </Link>
          <a href="/#elaqe" className="transition-colors hover:text-paper">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={HEADER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-clay px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-clay-soft sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.header.whatsapp}
          </a>
          <a
            href={HEADER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.whatsapp}
            className="flex h-9 w-9 items-center justify-center rounded-md bg-clay text-ink sm:hidden"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="grain relative overflow-hidden border-b border-ink-line bg-ink px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <div
        className="drift-slow pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-clay/10 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-rose-500/5 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl">
        <p
          className="reveal-up flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-clay"
          style={{ animationDelay: "0s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />
          {t.hero.kicker}
        </p>

        <h1
          className="reveal-up mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          <span className="block">{t.hero.titleStart}</span>
          <span className="relative inline-block italic">
            <span>{t.hero.titleHighlight}</span>
            <svg
              className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="hero-underline" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b75c3b" />
                  <stop offset="100%" stopColor="#c97552" />
                </linearGradient>
              </defs>
              <path
                className="underline-draw"
                d="M2 9c40-6 158-6 196 0"
                fill="none"
                stroke="url(#hero-underline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          {t.hero.titleEnd}
        </h1>

        <p
          className="reveal-up mt-7 max-w-md text-lg text-paper/55"
          style={{ animationDelay: "0.16s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="reveal-up mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
          style={{ animationDelay: "0.24s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-md bg-clay px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-clay-soft"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.hero.cta}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <Link
            href="/numuneler"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-paper/70 transition-colors hover:text-paper"
          >
            {t.hero.secondaryCta}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <p
          className="reveal-up mt-8 text-sm italic text-paper/35"
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.signature}
        </p>
      </div>
    </section>
  );
}

function Marquee() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="overflow-hidden border-b border-ink-line bg-ink py-3.5">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-sm font-medium text-paper/35"
          >
            {item}
            <span className="text-clay/50" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
