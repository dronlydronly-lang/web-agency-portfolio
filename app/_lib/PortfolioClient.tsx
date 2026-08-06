"use client";

import Link from "next/link";
import { examples } from "./examples";
import { useLanguage } from "./i18n";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import { translations } from "./translations";
import { Footer } from "./BelowFold";
import { TopBar } from "./HomeClient";

export function PortfolioClient() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex min-h-screen w-full flex-col bg-ink text-paper">
      <TopBar />

      <header className="grain relative overflow-hidden border-b border-ink-line px-5 py-20 sm:px-8 sm:py-28">
        <div
          className="drift-slow pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-gold/10 blur-[130px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-paper/50 transition-colors hover:text-paper"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            {t.portfolio.back}
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {t.portfolio.kicker}
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.05] text-paper sm:text-6xl">
            {t.portfolio.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-paper/55">{t.portfolio.subtitle}</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {examples.map((ex, i) => (
          <Link
            key={ex.slug}
            href={`/demo/${ex.slug}`}
            className={`group flex flex-col gap-10 border-b border-ink-line py-14 sm:py-16 lg:flex-row lg:items-center lg:gap-16 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`relative flex aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${ex.color} lg:w-[22rem]`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 14px)",
                }}
                aria-hidden
              />
              <span className="absolute left-5 top-5 font-mono text-xs text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ex.icon className="relative h-20 w-20 text-white/90 transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="flex-1">
              <span className="inline-block rounded-full border border-ink-line px-3 py-1 text-xs font-medium text-paper/60">
                {ex.category}
              </span>
              <h2 className="mt-5 font-serif text-3xl text-paper sm:text-4xl">{ex.name}</h2>
              <p className="mt-3 max-w-md text-paper/55">
                {(t.examples as Record<string, string>)[ex.slug]}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink-line pt-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-paper/35">
                    {t.portfolio.principleLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium text-paper/80">{ex.principle}</p>
                </div>
              </div>

              <ul className="mt-4 flex flex-col gap-1.5">
                {ex.stats.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-paper/50">
                    <span
                      className="h-1 w-1 shrink-0 rounded-full"
                      style={{ background: ex.accent }}
                      aria-hidden
                    />
                    {s}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-gold">
                {t.portfolio.cta}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
