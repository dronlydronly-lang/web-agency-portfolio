"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { CheckIcon } from "@/app/_lib/icons";
import { ArchitectureMark } from "@/app/_lib/illustrations";

const projectTypes = [
  { id: "residential", name: "Yaşayış Tikintisi", ratePerM2: 450 },
  { id: "commercial", name: "Kommersiya Obyekti", ratePerM2: 600 },
  { id: "renovation", name: "Renovasiya", ratePerM2: 250 },
];

const projects = [
  { id: "villa-badamdar", type: "residential", name: "Villa — Badamdar", area: "480 m²", duration: "8 ay" },
  { id: "ofis-28may", type: "commercial", name: "Ofis Kompleksi — 28 May", area: "1200 m²", duration: "14 ay" },
  { id: "menzil-yeniles", type: "renovation", name: "Mənzil Yeniləmə — Nərimanov", area: "140 m²", duration: "2 ay" },
  { id: "restoran-fasad", type: "commercial", name: "Restoran Fasadı — Səbail", area: "310 m²", duration: "5 ay" },
  { id: "ev-mardakan", type: "residential", name: "Həyət Evi — Mərdəkan", area: "620 m²", duration: "10 ay" },
];

const services = [
  "Layihələndirmə və Dizayn",
  "Tikinti-Quraşdırma İşləri",
  "Daxili İnteryer Dizaynı",
  "Texniki Konsaltinq",
];

const stats = [
  { value: "12+", label: "İl təcrübə" },
  { value: "140+", label: "Tamamlanan layihə" },
  { value: "98%", label: "Məmnun müştəri" },
];

export default function ArxitektMMC() {
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [typeId, setTypeId] = useState(projectTypes[0].id);
  const [area, setArea] = useState("");
  const [sent, setSent] = useState(false);

  const type = projectTypes.find((t) => t.id === typeId)!;
  const areaNum = Number(area) || 0;
  const visibleProjects = projects.filter((p) => projectFilter === "all" || p.type === projectFilter);

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
      <div className="bg-ink text-paper">
        <section className="grain relative overflow-hidden border-b border-ink-line px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.14),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 text-white shadow-lg">
            <ArchitectureMark className="h-16 w-16" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-paper sm:text-5xl">
            Arxitekt MMC
          </h1>
          <p className="mx-auto mt-4 max-w-md text-paper/50">
            Etibarlı tikinti və dizayn həlləri ilə fikirlərinizi reallığa çeviririk.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-paper">Layihə Arxivi</h2>
            <div className="flex flex-wrap gap-1 rounded-md border border-ink-line p-1">
              {[{ id: "all", name: "Hamısı" }, ...projectTypes].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setProjectFilter(t.id)}
                  className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                    projectFilter === t.id ? "bg-sky-500 text-white" : "text-paper/50 hover:text-paper"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-ink-line">
            {visibleProjects.map((p) => {
              const open = expanded === p.id;
              return (
                <div key={p.id} className="border-b border-ink-line">
                  <button
                    type="button"
                    onClick={() => setExpanded(open ? null : p.id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <div>
                      <p className="font-serif text-lg text-paper">{p.name}</p>
                      <p className="mt-0.5 text-sm text-paper/40">
                        {projectTypes.find((t) => t.id === p.type)?.name}
                      </p>
                    </div>
                    <span
                      className={`text-xl text-paper/40 transition-transform ${open ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <div className="flex gap-8 pb-6 text-sm">
                      <div>
                        <p className="text-paper/35">Sahə</p>
                        <p className="mt-1 font-medium text-paper">{p.area}</p>
                      </div>
                      <div>
                        <p className="text-paper/35">Müddət</p>
                        <p className="mt-1 font-medium text-paper">{p.duration}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl text-paper">Xidmətlərimiz</h2>
              <div className="mt-6 flex flex-col gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-paper/70">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {s}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 rounded-lg border border-ink-line bg-ink-soft p-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-2xl text-sky-400">{s.value}</p>
                    <p className="mt-1 text-xs text-paper/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-ink-line bg-ink-soft p-6">
              {sent ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-paper">Sorğunuz qəbul edildi!</h3>
                  <p className="mt-1 text-sm text-paper/50">
                    Mütəxəssislərimiz 24 saat ərzində sizinlə əlaqə saxlayacaq.
                  </p>
                  <button
                    type="button"
                    onClick={newRequest}
                    className="mt-5 rounded-md border border-ink-line px-5 py-2 text-sm font-semibold text-paper/70 hover:text-paper"
                  >
                    Yeni sorğu göndər
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-lg text-paper">Təxmini Qiymət Hesablayıcı</h2>
                  <p className="mt-1 text-sm text-paper/45">
                    Layihə növünü və sahəni daxil edin, təxmini büdcəni görün.
                  </p>

                  <p className="mb-2 mt-5 text-sm font-medium text-paper/50">Layihə növü</p>
                  <div className="flex flex-col gap-2">
                    {projectTypes.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTypeId(t.id)}
                        className={`flex items-center justify-between rounded-md border px-4 py-3 text-left text-sm transition-colors ${
                          typeId === t.id
                            ? "border-sky-500 bg-sky-500/10 text-paper"
                            : "border-ink-line text-paper/50 hover:border-paper/20"
                        }`}
                      >
                        {t.name}
                        <span className="text-xs text-paper/35">{t.ratePerM2} ₼/m²</span>
                      </button>
                    ))}
                  </div>

                  <p className="mb-2 mt-5 text-sm font-medium text-paper/50">Sahə (m²)</p>
                  <input
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Məsələn: 120"
                    className="w-full rounded-md border border-ink-line bg-transparent px-4 py-3 text-paper outline-none placeholder:text-paper/25 focus:border-sky-500"
                  />

                  {areaNum > 0 && (
                    <div className="mt-5 rounded-md border border-sky-500/30 bg-sky-500/10 p-4 text-center">
                      <p className="text-xs text-paper/45">Təxmini büdcə</p>
                      <p className="mt-1 text-xl font-semibold text-paper">
                        {min.toLocaleString()} – {max.toLocaleString()} ₼
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={!canSubmit}
                    onClick={() => setSent(true)}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${
                      canSubmit
                        ? "bg-clay text-ink hover:bg-clay-soft"
                        : "cursor-not-allowed bg-ink-line text-paper/35"
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
