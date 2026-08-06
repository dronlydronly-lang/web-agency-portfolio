"use client";

import Image from "next/image";
import Link from "next/link";
import { AGENCY_NAME, INSTAGRAM_URL, WHATSAPP_URL, whatsappUrl } from "./constants";
import { CREATOR_AVATAR, examples, type Example } from "./examples";
import { useLanguage, type Lang } from "./i18n";
import { ImageWithFallback } from "./ImageWithFallback";
import { ArrowRightIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { translations } from "./translations";

const showcase = examples.filter((e) =>
  ["aroma-cafe", "elit-berber", "trend-butik"].includes(e.slug)
);

const HEADER_WHATSAPP_URL = whatsappUrl(
  "Salam, veb-sayt hazırlanması haqqında məlumat almaq istərdim"
);

// Only the above-the-fold hero: header + hero panel + showcase. Everything
// below the fold (Services/WhyUs/Contact/Footer) lives in BelowFold.tsx and
// is loaded via next/dynamic from page.tsx, so it doesn't add to the JS the
// browser must parse/execute before the hero becomes interactive.
export function HomeClient() {
  return (
    <>
      <TopBar />
      <HeroSection />
    </>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const option = (value: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(value)}
      className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
        lang === value ? "bg-amber-400 text-zinc-950" : "text-zinc-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-800 p-1">
      {option("az", "AZ")}
      {option("en", "EN")}
    </div>
  );
}

function TopBar() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-2 border-b border-white/10 bg-[#030712]/95 px-3 py-3 backdrop-blur sm:gap-4 sm:px-10 sm:py-4">
      <span className="flex min-w-0 shrink items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900 py-1.5 pl-1.5 pr-3 text-xs font-semibold tracking-wide sm:gap-2 sm:pr-4 sm:text-sm">
        <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-zinc-800">
          <ImageWithFallback
            basePath="/logo"
            alt={AGENCY_NAME}
            sizes="28px"
            className="scale-[2.7] origin-[48%_38%] object-cover"
            fallback={
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-300 text-xs font-bold text-zinc-950">
                W
              </div>
            }
          />
        </span>
        <span className="truncate">{AGENCY_NAME}</span>
      </span>

      <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
        <a href="#xidmetler" className="hover:text-white">
          {t.nav.examples}
        </a>
        <a href="#elaqe" className="hover:text-white">
          {t.nav.contact}
        </a>
      </nav>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <LanguageSwitcher />
        <a
          href={HEADER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.header.whatsapp}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-zinc-950 transition-colors hover:bg-[#1fb959] sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden text-sm font-semibold sm:inline">{t.header.whatsapp}</span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-colors hover:text-white"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <main className="relative z-10 flex min-h-[calc(100vh-88px)] items-center px-5 py-10 sm:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr] lg:gap-6">
        <HeroPanel />
        <ShowcasePanel />
      </div>
    </main>
  );
}

function HeroPanel() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="grain relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-8 sm:p-12 lg:p-14">
      <div
        className="drift-slow pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-rose-500/5 blur-[100px]"
        aria-hidden
      />

      <p
        className="reveal-up relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80"
        style={{ animationDelay: "0s" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
        {AGENCY_NAME}
      </p>

      <h1
        className="reveal-up relative mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        style={{ animationDelay: "0.08s" }}
      >
        <span className="block">{t.hero.titleStart}</span>
        <span className="relative inline-block">
          <span className="text-amber-400">{t.hero.titleHighlight}</span>
          <svg
            className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full sm:-bottom-2"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="hero-underline" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fb7185" />
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
        </span>
        {t.hero.titleEnd}
      </h1>

      <p
        className="reveal-up relative mt-6 max-w-md text-base text-zinc-400 sm:text-lg"
        style={{ animationDelay: "0.16s" }}
      >
        {t.hero.subtitle}
      </p>

      <div
        className="reveal-up relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
        style={{ animationDelay: "0.24s" }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-xl bg-amber-400 px-7 py-3.5 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {t.hero.cta}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <span className="text-sm italic text-zinc-500">{t.hero.signature}</span>
      </div>
    </div>
  );
}

function ShowcasePanel() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-zinc-900 p-6 sm:p-8">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
        {t.showcase.title}
      </h2>

      <div className="flex flex-col gap-3">
        {showcase.map((ex, i) => (
          <ShowcaseCard key={ex.slug} example={ex} index={i} />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-zinc-800 ring-2 ring-amber-400/40">
          <Image
            src={CREATOR_AVATAR}
            alt={t.creator.name}
            fill
            sizes="56px"
            quality={60}
            priority
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white">{t.creator.name}</p>
          <p className="mt-0.5 text-sm text-zinc-400">{t.creator.tagline}</p>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ example, index }: { example: Example; index: number }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Link
      href={`/demo/${example.slug}`}
      style={{ ["--accent" as string]: example.accent }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 border-l-2 border-l-transparent bg-zinc-800/60 p-4 transition-colors hover:border-l-[color:var(--accent)] hover:bg-zinc-800"
    >
      <span className="hidden font-mono text-xs text-zinc-600 sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-800 shadow-lg">
        <Image
          src={example.image}
          alt=""
          aria-hidden
          fill
          sizes="48px"
          quality={60}
          priority
          className="object-cover"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${example.color} opacity-70`}
        >
          <example.icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{example.name}</p>
        <p className="truncate text-xs text-zinc-400">
          {(t.examples as Record<string, string>)[example.slug]}
        </p>
      </div>
      <ArrowRightIcon className="h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
    </Link>
  );
}
