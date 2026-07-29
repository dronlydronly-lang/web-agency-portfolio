"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AGENCY_NAME, WHATSAPP_URL, whatsappUrl } from "./_lib/constants";
import { CREATOR_AVATAR, examples, type Example } from "./_lib/examples";
import { useLanguage, type Lang } from "./_lib/i18n";
import { InstagramIcon, WhatsAppIcon } from "./_lib/icons";
import { translations } from "./_lib/translations";

const INSTAGRAM_URL = "https://instagram.com/webmaster.deniz";

const showcase = examples.filter((e) =>
  ["aroma-cafe", "elit-berber", "trend-butik"].includes(e.slug)
);

const HEADER_WHATSAPP_URL = whatsappUrl(
  "Salam, veb-sayt hazırlanması haqqında məlumat almaq istərdim"
);

// Unsplash's imgix backend accepts &w= — request only the pixel size the
// container actually renders instead of shipping the full 800px master.
function thumb(url: string, width: number) {
  return url.replace(/w=\d+/, `w=${width}`);
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#030712] text-white">
      <MeshBackground />
      <Spotlight />
      <TopBar />

      <HeroSection />

      <div className="relative z-10">
        <Services />
        <WhyUs />
        <Contact />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="absolute right-[-10rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/5 blur-[160px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(3,7,18,0.6))]" />
    </div>
  );
}

function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Touch devices never fire mousemove usefully — skip the listener and
    // the fixed repaint layer entirely to save mobile CPU/battery.
    if (!window.matchMedia("(hover: hover)").matches) return;
    const move = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-75"
      style={{
        background:
          "radial-gradient(650px circle at var(--x, 50%) var(--y, 20%), rgba(212,175,55,0.16), transparent 42%)",
      }}
      aria-hidden
    />
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
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md sm:backdrop-blur-2xl">
      {option("az", "AZ")}
      {option("en", "EN")}
    </div>
  );
}

function TopBar() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#030712]/80 px-5 py-4 backdrop-blur-md sm:px-10">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-md sm:backdrop-blur-2xl">
        {AGENCY_NAME}
      </span>

      <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
        <a href="#xidmetler" className="hover:text-white">
          {t.nav.examples}
        </a>
        <a href="#elaqe" className="hover:text-white">
          {t.nav.contact}
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <a
          href={HEADER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>{t.header.whatsapp}</span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md sm:backdrop-blur-2xl transition-colors hover:text-white"
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md sm:backdrop-blur-2xl">
      {children}
    </span>
  );
}

function HeroPanel() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md sm:backdrop-blur-2xl sm:p-12 lg:p-14">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{t.hero.badge1}</Badge>
        <Badge>{t.hero.badge2}</Badge>
      </div>

      <h1
        className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
      >
        <span
          className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          style={{ textShadow: "0 0 60px rgba(212,175,55,0.25)" }}
        >
          {t.hero.titleStart}{" "}
        </span>
        <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
          {t.hero.titleHighlight}
        </span>
        <span
          className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          style={{ textShadow: "0 0 60px rgba(212,175,55,0.25)" }}
        >
          {t.hero.titleEnd}
        </span>
      </h1>

      <p className="mt-6 max-w-md text-base text-zinc-400 sm:text-lg">{t.hero.subtitle}</p>

      <div className="mt-10">
        <MagneticButton href={WHATSAPP_URL}>
          <WhatsAppIcon className="h-5 w-5" />
          {t.hero.cta}
        </MagneticButton>
      </div>
    </div>
  );
}

function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    });
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-8 py-4 font-semibold text-zinc-950 transition-transform duration-200 ease-out"
    >
      <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-amber-400/40 blur-xl" />
      {children}
    </a>
  );
}

function ShowcasePanel() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:backdrop-blur-2xl sm:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
          {t.showcase.title}
        </h2>
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      </div>

      <div className="flex flex-col gap-3">
        {showcase.map((ex) => (
          <ShowcaseCard key={ex.slug} example={ex} />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-400/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb(CREATOR_AVATAR, 120)}
            alt={t.creator.name}
            width={120}
            height={120}
            decoding="async"
            className="h-full w-full object-cover"
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

function ShowcaseCard({ example }: { example: Example }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md sm:backdrop-blur-2xl transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-amber-400/30"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb(example.image, 96)}
          alt=""
          aria-hidden
          width={96}
          height={96}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${example.color} opacity-70`}
        >
          <example.icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{example.name}</p>
        <p className="truncate text-xs text-zinc-400">{(t.examples as Record<string, string>)[example.slug]}</p>
      </div>
      <span className="text-zinc-600 transition-colors group-hover:text-amber-400">→</span>
    </Link>
  );
}

function ExampleCoverCard({ example }: { example: Example }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:backdrop-blur-2xl transition-all hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb(example.image, 500)}
          srcSet={`${thumb(example.image, 400)} 400w, ${thumb(example.image, 800)} 800w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${example.color} opacity-60 mix-blend-multiply`}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,0,0,0.45),transparent_60%)]"
          aria-hidden
        />
        <example.icon className="relative h-16 w-16 text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-zinc-950/70 text-amber-400 backdrop-blur">
          <example.badge className="h-4 w-4" />
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-white">{example.name}</p>
        <p className="mt-1 text-sm text-zinc-400">{(t.examples as Record<string, string>)[example.slug]}</p>
        <span className="mt-3 inline-block text-xs font-medium text-amber-400">
          {t.services.cta}
        </span>
      </div>
    </Link>
  );
}

function Services() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="xidmetler" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {t.services.title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-500">
        {t.services.subtitle}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((ex) => (
          <ExampleCoverCard key={ex.slug} example={ex} />
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.whyUs.map((w) => (
          <div key={w.title} className="text-center sm:text-left">
            <h3 className="font-semibold text-white">{w.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="elaqe" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-md sm:backdrop-blur-2xl sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15),transparent_60%)]"
          aria-hidden
        />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">{t.contact.subtitle}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.contact.whatsapp}
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-semibold text-zinc-300 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
            {t.contact.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {AGENCY_NAME}. {t.footer.rights}
        </span>
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə əlaqə"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-zinc-950 shadow-lg shadow-amber-500/30 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
