"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AGENCY_NAME, WHATSAPP_URL } from "./_lib/constants";
import { examples, type Example } from "./_lib/examples";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./_lib/icons";

const showcase = examples.filter((e) =>
  ["aroma-cafe", "elit-berber", "trend-butik"].includes(e.slug)
);

export default function Home() {
  return (
    <div className="relative flex h-screen min-h-[720px] w-full flex-col overflow-hidden bg-[#030712] text-white">
      <MeshBackground />
      <Spotlight />
      <TopBar />

      <main className="relative z-10 flex flex-1 items-center overflow-y-auto px-5 py-10 sm:px-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr] lg:gap-6">
          <HeroPanel />
          <ShowcasePanel />
        </div>
      </main>
    </div>
  );
}

function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
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
      className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-75"
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
    <div className="relative z-20 flex items-center justify-between px-5 pt-6 sm:px-10">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-2xl">
        {AGENCY_NAME}
      </span>

      <div className="flex items-center gap-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-2xl transition-colors hover:text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">+994 77 625 33 36</span>
        </a>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-500 backdrop-blur-2xl"
          title="Instagram profili tezliklə əlavə olunacaq"
        >
          <InstagramIcon className="h-4 w-4" />
        </span>
      </div>
    </div>
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
        Sürətli təhvil. Səssiz peşəkarlıq. Peşəkar addımlar, tam güvən.
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
    </div>
  );
}

function ShowcaseCard({ example }: { example: Example }) {
  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-amber-400/30"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${example.color} text-white shadow-lg`}
      >
        <example.icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{example.name}</p>
        <p className="truncate text-xs text-zinc-400">{example.desc}</p>
      </div>
      <span className="text-zinc-600 transition-colors group-hover:text-amber-400">→</span>
    </Link>
  );
}
