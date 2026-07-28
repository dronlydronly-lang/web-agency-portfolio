import type { Metadata } from "next";
import { DemoCTA } from "@/app/_lib/DemoCTA";
import { DemoShell } from "@/app/_lib/DemoShell";
import { BagIcon } from "@/app/_lib/icons";

export const metadata: Metadata = {
  title: "Trend Butik — Nümunə Sayt | WebUsta",
};

const products = [
  { name: "Klassik Palto", price: "89 AZN", color: "from-rose-700 to-pink-500" },
  { name: "Yun Sviter", price: "45 AZN", color: "from-pink-600 to-rose-400" },
  { name: "Cins Şalvar", price: "39 AZN", color: "from-rose-800 to-fuchsia-500" },
  { name: "Yay Köynəyi", price: "29 AZN", color: "from-fuchsia-700 to-pink-400" },
  { name: "Dəri Çanta", price: "65 AZN", color: "from-rose-700 to-orange-400" },
  { name: "İdman Ayaqqabı", price: "75 AZN", color: "from-pink-700 to-rose-500" },
];

export default function TrendButik() {
  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-700 to-pink-500 text-white">
            <BagIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trend Butik
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Yeni Kolleksiya — üslubunuzu tamamlayan seçimlər indi onlayn mağazada.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Məhsullar</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
              >
                <div className={`aspect-square bg-gradient-to-br ${p.color}`} />
                <div className="p-4">
                  <p className="font-semibold text-white">{p.name}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-rose-400">{p.price}</span>
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Səbətə at
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <DemoCTA />
      </div>
    </DemoShell>
  );
}
