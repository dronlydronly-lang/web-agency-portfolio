"use client";

import Link from "next/link";
import { AGENCY_NAME, INSTAGRAM_URL, WHATSAPP_URL } from "./constants";
import { examples } from "./examples";
import { useLanguage } from "./i18n";
import { ArrowRightIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { translations } from "./translations";

const featuredSlugs = ["aroma-cafe", "trend-butik", "foto-studio"];

// Everything below the hero fold, minus the footer (rendered separately by
// page.tsx since it's a page-level landmark, not part of <main>). Loaded via
// next/dynamic from page.tsx so its JS is a separate chunk that doesn't
// block the hero's time-to-interactive.
export function BelowFold() {
  return (
    <>
      <Services />
      <Process />
      <FeaturedWork />
      <WhyUs />
      <Contact />
    </>
  );
}

function Services() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="xidmetler" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {t.services.kicker}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium text-paper sm:text-4xl">
          {t.services.title}
        </h2>
        <p className="mt-3 max-w-md text-paper/92">{t.services.subtitle}</p>

        <div className="mt-12 border-t border-ink-line">
          {t.services.items.map((item, i) => (
            <div
              key={item.title}
              className="group flex flex-col gap-2 border-b border-ink-line py-6 transition-colors sm:flex-row sm:items-baseline sm:gap-8 sm:py-7"
            >
              <span className="font-mono text-sm text-paper/74 transition-colors group-hover:text-gold sm:w-10 sm:shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl text-paper sm:w-80 sm:shrink-0">
                {item.title}
              </h3>
              <p className="text-sm text-paper/92 sm:flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="border-t border-ink-line bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {t.process.kicker}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium text-paper sm:text-4xl">
          {t.process.title}
        </h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-ink-line sm:block"
            aria-hidden
          />
          {t.process.steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink font-mono text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-lg text-paper">{step.title}</h3>
              <p className="mt-1.5 text-sm text-paper/92">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const featured = featuredSlugs
    .map((slug) => examples.find((e) => e.slug === slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <section className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/76">
              {t.featured.kicker}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-paper sm:text-4xl">
              {t.featured.title}
            </h2>
            <p className="mt-3 max-w-md text-paper/82">{t.featured.subtitle}</p>
          </div>
          <Link
            href="/numuneler"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-paper/88 transition-colors hover:text-paper sm:inline-flex"
          >
            {t.featured.cta}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((ex, i) => (
            <Link
              key={ex.slug}
              href={`/demo/${ex.slug}`}
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br ${ex.color} p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 ${
                i === 0 ? "lg:col-span-2 lg:min-h-[22rem]" : "lg:min-h-[18rem]"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.16),transparent_55%)]"
                aria-hidden
              />
              <ex.illustration
                className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 text-white/10 transition-transform duration-500 group-hover:scale-105 sm:h-56 sm:w-56"
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-white/90">
                    {ex.category}
                  </span>
                  <ex.icon className="h-9 w-9 text-white/85" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-white sm:text-4xl">{ex.name}</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/75">{ex.principle}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    {t.portfolio.cta}
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/numuneler"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/88 transition-colors hover:text-ink sm:hidden"
        >
          {t.featured.cta}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function WhyUs() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="border-t border-paper-line bg-paper px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
        {t.whyUs.map((w, i) => (
          <div
            key={w.title}
            className={`${i > 0 ? "border-ink/10 sm:border-l sm:pl-6" : ""}`}
          >
            <h3 className="font-serif text-lg text-ink">{w.title}</h3>
            <p className="mt-1.5 text-sm text-ink/80">{w.desc}</p>
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
    <section id="elaqe" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {t.contact.kicker}
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium text-paper sm:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-paper/82">{t.contact.subtitle}</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-md bg-gold px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.contact.whatsapp}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-ink-line px-7 py-3.5 font-semibold text-paper/88 transition-colors hover:border-paper/30 hover:text-paper"
          >
            <InstagramIcon className="h-5 w-5" />
            {t.contact.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="border-t border-ink-line bg-ink py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-paper/76 sm:flex-row sm:px-8">
        <span>
          © {new Date().getFullYear()} {AGENCY_NAME}. {t.footer.rights}
        </span>
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
