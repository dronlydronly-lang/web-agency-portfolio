"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { BuildingIcon, CheckIcon } from "@/app/_lib/icons";

const projectTypes = [
  { id: "residential", name: "Yaşayış Tikintisi", ratePerM2: 450 },
  { id: "commercial", name: "Kommersiya Obyekti", ratePerM2: 600 },
  { id: "renovation", name: "Renovasiya", ratePerM2: 250 },
];

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
  const [typeId, setTypeId] = useState(projectTypes[0].id);
  const [area, setArea] = useState("");
  const [sent, setSent] = useState(false);

  const type = projectTypes.find((t) => t.id === typeId)!;
  const areaNum = Number(area) || 0;

  const { min, max } = useMemo(() => {
    const base = areaNum * type.ratePerM2;
    return { min: Math.round(base * 0.9), max: Math.round(base * 1.15) };
  }, [areaNum, type]);

  const canSubmit = areaNum > 0;

  const newRequest = () => {
    setArea("");
    setSent(false);
  };

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

              <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-sky-400">{s.value}</p>
                    <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              {sent ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">Sorğunuz qəbul edildi!</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Mütəxəssislərimiz 24 saat ərzində sizinlə əlaqə saxlayacaq.
                  </p>
                  <button
                    type="button"
                    onClick={newRequest}
                    className="mt-5 rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800"
                  >
                    Yeni sorğu göndər
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-white">Təxmini Qiymət Hesablayıcı</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Layihə növünü və sahəni daxil edin, təxmini büdcəni görün.
                  </p>

                  <p className="mt-5 mb-2 text-sm font-medium text-zinc-400">Layihə növü</p>
                  <div className="flex flex-col gap-2">
                    {projectTypes.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTypeId(t.id)}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                          typeId === t.id
                            ? "border-sky-500 bg-sky-500/10 text-white"
                            : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        {t.name}
                        <span className="text-xs text-zinc-500">{t.ratePerM2} AZN/m²</span>
                      </button>
                    ))}
                  </div>

                  <p className="mt-5 mb-2 text-sm font-medium text-zinc-400">Sahə (m²)</p>
                  <input
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Məsələn: 120"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-sky-500"
                  />

                  {areaNum > 0 && (
                    <div className="mt-5 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 text-center">
                      <p className="text-xs text-zinc-400">Təxmini büdcə</p>
                      <p className="mt-1 text-xl font-bold text-white">
                        {min.toLocaleString()} – {max.toLocaleString()} AZN
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={!canSubmit}
                    onClick={() => setSent(true)}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-transform ${
                      canSubmit
                        ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 hover:scale-105"
                        : "cursor-not-allowed bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    Sorğu Göndər
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
