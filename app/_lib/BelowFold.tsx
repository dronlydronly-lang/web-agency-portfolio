"use client";

import Image from "next/image";
import Link from "next/link";
import { AGENCY_NAME, INSTAGRAM_URL, WHATSAPP_URL } from "./constants";
import { examples, type Example } from "./examples";
import { useLanguage } from "./i18n";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { translations } from "./translations";

// Everything below the hero fold. Loaded via next/dynamic from page.tsx so
// its JS is a separate chunk that doesn't block the hero's time-to-interactive.
export function BelowFold() {
  return (
    <>
      <div className="relative z-10">
        <Services />
        <WhyUs />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

function ExampleCoverCard({ example }: { example: Example }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all hover:-translate-y-1 hover:border-amber-400/40"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-zinc-800">
        <Image
          src={example.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={70}
          loading="lazy"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
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
        <p className="mt-1 text-sm text-zinc-400">
          {(t.examples as Record<string, string>)[example.slug]}
        </p>
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
