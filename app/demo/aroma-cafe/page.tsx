import type { Metadata } from "next";
import { DemoCTA } from "@/app/_lib/DemoCTA";
import { DemoShell } from "@/app/_lib/DemoShell";
import { ClockIcon, CupIcon, MapPinIcon } from "@/app/_lib/icons";

export const metadata: Metadata = {
  title: "Aroma Cafe — Nümunə Sayt | WebUsta",
};

const menu = [
  { name: "Espresso", desc: "Qatı, güclü aromalı klassik espresso.", price: "3.50 AZN" },
  { name: "Cappuccino", desc: "Südlü köpüklə zənginləşdirilmiş kofe.", price: "5.00 AZN" },
  { name: "Latte", desc: "Yumşaq süd dadı ilə balanslaşdırılmış.", price: "5.50 AZN" },
  { name: "Flat White", desc: "Kremli toxuma, incə espresso notları.", price: "5.50 AZN" },
  { name: "Cheesecake", desc: "Ev şəraitində hazırlanan klassik dilim.", price: "7.00 AZN" },
  { name: "Kruassan", desc: "Təzə bişmiş, xırtıldayan kruassan.", price: "4.00 AZN" },
];

export default function AromaCafe() {
  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(217,119,6,0.18),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-700 to-orange-500 text-white">
            <CupIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Aroma Cafe
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            İstiliklə dolu hər fincan. Şəhərin mərkəzində sakit bir kofe künc.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" /> Nizami küç. 28, Bakı
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" /> 08:00 – 23:00
            </span>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Menyu</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <span className="shrink-0 text-sm font-semibold text-amber-400">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <DemoCTA />
      </div>
    </DemoShell>
  );
}
