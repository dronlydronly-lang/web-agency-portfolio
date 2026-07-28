import type { Metadata } from "next";
import { DemoCTA } from "@/app/_lib/DemoCTA";
import { DemoShell } from "@/app/_lib/DemoShell";
import { BuildingIcon, CheckIcon } from "@/app/_lib/icons";

export const metadata: Metadata = {
  title: "Arxitekt MMC — Nümunə Sayt | WebUsta",
};

const services = [
  "Layihələndirmə və Dizayn",
  "Tikinti-Quraşdırma İşləri",
  "Daxili Interyer Dizaynı",
  "Texniki Konsaltinq",
];

const stats = [
  { value: "12+", label: "İl təcrübə" },
  { value: "140+", label: "Tamamlanan layihə" },
  { value: "98%", label: "Məmnun müştəri" },
];

export default function ArxitektMMC() {
  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-700 to-blue-500 text-white">
            <BuildingIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Arxitekt MMC
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Etibarlı tikinti və dizayn həlləri ilə fikirlərinizi reallığa çeviririk.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Xidmətlərimiz</h2>
              <div className="mt-6 flex flex-col gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-zinc-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 self-start rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:col-span-1">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-sky-400">{s.value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DemoCTA />
      </div>
    </DemoShell>
  );
}
