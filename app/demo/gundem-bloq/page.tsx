"use client";

import { useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { ImageWithFallback } from "@/app/_lib/ImageWithFallback";
import { CheckIcon, DocIcon } from "@/app/_lib/icons";

const posts = [
  {
    id: "design-trends",
    title: "2026-cı ildə veb dizaynda əsas trendlər",
    excerpt: "Minimalizmdən tutmuş hərəkətli interfeyslərə qədər bu il nələr aparıcıdır.",
    more: "Xüsusilə mobil-birinci yanaşma və sürətli yüklənmə artıq seçim deyil, standartdır. Brendlər sadə, aydın mesajlı saytlara üstünlük verir.",
    tag: "Dizayn",
    date: "12 İyul 2026",
  },
  {
    id: "why-website",
    title: "Kiçik biznes üçün niyə sayt vacibdir?",
    excerpt: "Sosial media kifayət etmir — öz domenində olmağın üstünlükləri.",
    more: "Öz saytınız olduqda alqoritm dəyişikliklərindən asılı olmursunuz və müştəri sizə birbaşa etibar edir. Həm də WhatsApp, İnstagram kimi kanalları bir yerdə toplaya bilirsiniz.",
    tag: "Biznes",
    date: "3 İyul 2026",
  },
  {
    id: "seo-basics",
    title: "SEO-ya başlanğıc: ilk 5 addım",
    excerpt: "Google-da görünmək üçün saytınızda etməli olduğunuz sadə addımlar.",
    more: "Düzgün başlıqlar, sürətli yüklənmə, mobil uyğunluq, keyfiyyətli məzmun və düzgün açar sözlər — bunlar heç bir xərc olmadan başlaya biləcəyiniz addımlardır.",
    tag: "SEO",
    date: "28 İyun 2026",
  },
  {
    id: "site-speed",
    title: "Sürətli sayt niyə satışa təsir edir?",
    excerpt: "Yüklənmə sürəti ilə istifadəçi davranışı arasındakı bağlantı.",
    more: "Araşdırmalar göstərir ki, 3 saniyədən çox yüklənən saytları ziyarətçilərin böyük hissəsi tərk edir. Sürət birbaşa satışa çevrilmə faizinə təsir edir.",
    tag: "Performans",
    date: "15 İyun 2026",
  },
];

export default function GundemBloq() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(valid ? "success" : "error");
  };

  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-500 text-white">
            <DocIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Gündəm Bloq
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Dizayn, biznes və texnologiya haqqında qısa və faydalı yazılar.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <div className="flex flex-col gap-4">
            {posts.map((p, i) => {
              const open = expanded.has(i);
              return (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-800">
                    <ImageWithFallback
                      basePath={`/blog/${p.id}`}
                      alt={p.title}
                      className="object-cover"
                      fallback={
                        <div className="h-full w-full bg-gradient-to-br from-emerald-700 to-teal-500" />
                      }
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400">
                        {p.tag}
                      </span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="mt-1.5 font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{p.excerpt}</p>
                    {open && <p className="mt-2 text-sm text-zinc-400">{p.more}</p>}
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="mt-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
                    >
                      {open ? "Gizlət" : "Daha çox oxu →"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center">
            <h2 className="text-lg font-bold text-white">E-poçt Bülleteni</h2>
            <p className="mx-auto mt-1 max-w-sm text-sm text-zinc-400">
              Yeni yazılardan xəbərdar olmaq üçün e-poçtunuzu buraxın.
            </p>

            {status === "success" ? (
              <div className="mt-4 flex items-center justify-center gap-2 text-emerald-400">
                <CheckIcon className="h-5 w-5" />
                Təşəkkürlər, abunə oldunuz!
              </div>
            ) : (
              <form
                onSubmit={subscribe}
                className="mx-auto mt-4 flex max-w-sm flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="E-poçt ünvanınız"
                  className="w-full rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Abunə ol
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-rose-400">Zəhmət olmasa düzgün e-poçt daxil edin.</p>
            )}
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
