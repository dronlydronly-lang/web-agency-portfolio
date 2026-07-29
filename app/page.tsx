"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AGENCY_NAME, WHATSAPP_URL, whatsappUrl } from "./_lib/constants";
import { CREATOR_AVATAR, examples, type Example } from "./_lib/examples";
import { InstagramIcon, WhatsAppIcon } from "./_lib/icons";

const showcase = examples.filter((e) =>
  ["aroma-cafe", "elit-berber", "trend-butik"].includes(e.slug)
);

const HEADER_WHATSAPP_URL = whatsappUrl(
  "Salam, veb-sayt hazırlanması haqqında məlumat almaq istərdim"
);

const whyUs = [
  { title: "Sürətli Təhvil", desc: "Layihələr qısa müddətdə hazır olur." },
  { title: "Müasir Texnologiya", desc: "Next.js əsasında sürətli, etibarlı saytlar." },
  { title: "Mobil Uyğunluq", desc: "Bütün cihazlarda mükəmməl görünüş." },
  { title: "Münasib Qiymət", desc: "Keyfiyyət və büdcə arasında ən yaxşı balans." },
];

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

function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#030712]/80 px-5 py-4 backdrop-blur-md sm:px-10">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-2xl">
        {AGENCY_NAME}
      </span>

      <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
        <a href="#xidmetler" className="hover:text-white">
          Nümunələr
        </a>
        <a href="#elaqe" className="hover:text-white">
          Əlaqə
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={HEADER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-500 backdrop-blur-2xl"
          title="Instagram profili tezliklə əlavə olunacaq"
        >
          <InstagramIcon className="h-4 w-4" />
        </span>
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
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-2xl">
      {children}
    </span>
  );
}

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl sm:p-12 lg:p-14">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>⚡ 99+ PageSpeed</Badge>
        <Badge>🔒 Enterprise Secure</Badge>
      </div>

      <h1
        className="mt-8 bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-5xl lg:text-6xl"
        style={{ textShadow: "0 0 60px rgba(212,175,55,0.25)" }}
      >
        Biznesinizi Onlayn Dünyaya Daşıyın!
      </h1>

      <p className="mt-6 max-w-md text-base text-zinc-400 sm:text-lg">
        Sürətli təhvil. Peşəkar addımlar, tam güvən.
      </p>

      <div className="mt-10">
        <MagneticButton href={WHATSAPP_URL}>
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp ilə Əlaqə
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
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl sm:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Canlı Nümunələr
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
            src={CREATOR_AVATAR}
            alt="Dəniz"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white">Dəniz</p>
          <p className="mt-0.5 text-sm text-zinc-400">
            İstəyə uyğun hər növ veb-saytlar peşəkarlıqla hazırlanır.
          </p>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ example }: { example: Example }) {
  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-amber-400/30"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={example.image}
          alt=""
          aria-hidden
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
        <p className="truncate text-xs text-zinc-400">{example.desc}</p>
      </div>
      <span className="text-zinc-600 transition-colors group-hover:text-amber-400">→</span>
    </Link>
  );
}

function ExampleCoverCard({ example }: { example: Example }) {
  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={example.image}
          alt=""
          aria-hidden
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
        <p className="mt-1 text-sm text-zinc-400">{example.desc}</p>
        <span className="mt-3 inline-block text-xs font-medium text-amber-400">
          Demoya bax →
        </span>
      </div>
    </Link>
  );
}

function Services() {
  return (
    <section id="xidmetler" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Nümunə Saytlar
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-500">
        Kartlara klikləyin, hər nümunənin canlı demosuna baxın.
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
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w) => (
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
  return (
    <section id="elaqe" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-2xl sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15),transparent_60%)]"
          aria-hidden
        />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Layihənizi müzakirə edək
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          WhatsApp üzərindən yazın, ən qısa zamanda cavab verəcəm.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ilə yazın
          </a>

          <span
            className="flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-semibold text-zinc-500"
            title="Instagram profili tezliklə əlavə olunacaq"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs">tezliklə</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {AGENCY_NAME}. Bütün hüquqlar qorunur.
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
          <span
            className="cursor-not-allowed text-zinc-700"
            aria-label="Instagram (tezliklə)"
            title="Instagram profili tezliklə əlavə olunacaq"
          >
            <InstagramIcon className="h-5 w-5" />
          </span>
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
