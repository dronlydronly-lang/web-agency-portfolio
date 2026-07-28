import type { Metadata } from "next";
import { DemoCTA } from "@/app/_lib/DemoCTA";
import { DemoShell } from "@/app/_lib/DemoShell";
import { ClockIcon, MapPinIcon, ScissorsIcon } from "@/app/_lib/icons";

export const metadata: Metadata = {
  title: "Elit Berber Studio — Nümunə Sayt | WebUsta",
};

const services = [
  { name: "Saç Kəsimi", duration: "30 dəq", price: "15 AZN" },
  { name: "Saqqal Düzəltmə", duration: "20 dəq", price: "10 AZN" },
  { name: "Saç + Saqqal", duration: "45 dəq", price: "22 AZN" },
  { name: "Uşaq Kəsimi", duration: "25 dəq", price: "12 AZN" },
];

export default function ElitBerber() {
  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-400 text-white">
            <ScissorsIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Elit Berber Studio
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Klassik üslub, peşəkar toxunuş. Növbənizi onlayn təyin edin.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" /> 28 May küç. 12, Bakı
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" /> 10:00 – 22:00
            </span>
          </div>
          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
          >
            Növbə Götür
          </button>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Xidmətlər</h2>
          <div className="mt-10 flex flex-col gap-3">
            {services.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4"
              >
                <div>
                  <p className="font-semibold text-white">{s.name}</p>
                  <p className="text-sm text-zinc-500">{s.duration}</p>
                </div>
                <span className="font-semibold text-amber-400">{s.price}</span>
              </div>
            ))}
          </div>
        </section>

        <DemoCTA />
      </div>
    </DemoShell>
  );
}
