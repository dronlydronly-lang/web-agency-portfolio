"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { CalendarIcon, CheckIcon } from "@/app/_lib/icons";
import { CameraMark } from "@/app/_lib/illustrations";

const categories = [
  { id: "all", name: "Hamısı" },
  { id: "wedding", name: "Toy" },
  { id: "portrait", name: "Portret" },
  { id: "product", name: "Məhsul" },
] as const;

const gallery = [
  { id: 1, category: "wedding", label: "Toy — Bakı Bulvarı", photo: "1519741196428-6a2175fa2557", h: "h-56" },
  { id: 2, category: "portrait", label: "Portret — Studio", photo: "1506863530036-1efeddceb993", h: "h-40" },
  { id: 3, category: "product", label: "Məhsul — Kosmetika", photo: "1586495777744-4413f21062fa", h: "h-64" },
  { id: 4, category: "wedding", label: "Toy — Naxçıvanski", photo: "1680624629496-0a2c2444153e", h: "h-40" },
  { id: 5, category: "portrait", label: "Portret — Açıq hava", photo: "1633381521050-26bb467d9d5a", h: "h-56" },
  { id: 6, category: "product", label: "Məhsul — Aksesuar", photo: "1723150512429-bfa92988d845", h: "h-40" },
];

const packages = [
  { id: "portrait", name: "Portret Paketi", detail: "1 saat çəkiliş, 15 redaktə edilmiş foto", price: 150 },
  { id: "wedding", name: "Toy Paketi", detail: "Tam gün çəkiliş, 200+ foto, video xülasə", price: 800 },
  { id: "product", name: "Məhsul Paketi", detail: "10 məhsul, ağ fon, e-ticarət üçün hazır", price: 200 },
];

const today = new Date().toISOString().split("T")[0];

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: typeof gallery;
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onNavigate]);

  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-paper/95 px-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Bağla"
        className="absolute right-6 top-6 text-3xl leading-none text-ink/80 hover:text-ink"
      >
        ×
      </button>

      <div
        className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg bg-ink-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={`https://images.unsplash.com/photo-${item.photo}?w=1200&h=900&fit=crop&q=80`}
          alt={item.label}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-4 flex items-center gap-6 text-sm text-ink/75">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + items.length) % items.length);
          }}
          className="hover:text-ink"
        >
          ← Əvvəlki
        </button>
        <span className="text-ink">{item.label}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % items.length);
          }}
          className="hover:text-ink"
        >
          Növbəti →
        </button>
      </div>
      <p className="mt-1 text-xs text-ink/65">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

export function FotoStudioClient() {
  const [filter, setFilter] = useState<(typeof categories)[number]["id"]>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [packageId, setPackageId] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [booked, setBooked] = useState(false);

  const visibleGallery = useMemo(
    () => gallery.filter((g) => filter === "all" || g.category === filter),
    [filter]
  );

  const pkg = packages.find((p) => p.id === packageId);
  const isPastDate = date !== "" && date < today;
  const canSubmit = Boolean(pkg && date && !isPastDate);

  const newBooking = () => {
    setPackageId(null);
    setDate("");
    setMessage("");
    setBooked(false);
  };

  return (
    <DemoShell>
      <div className="bg-ink text-paper">
        <section className="grain relative overflow-hidden border-b border-ink-line px-6 py-24 text-center">
          <div
            className="cinematic-in mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-950 to-fuchsia-900 text-white shadow-lg"
            style={{ animationDelay: "0s" }}
          >
            <CameraMark className="h-16 w-16" />
          </div>
          <h1
            className="cinematic-in mt-6 font-serif text-4xl font-medium tracking-tight text-paper sm:text-5xl"
            style={{ animationDelay: "0.08s" }}
          >
            Foto Studio
          </h1>
          <p
            className="cinematic-in mx-auto mt-4 max-w-md text-paper/92"
            style={{ animationDelay: "0.16s" }}
          >
            Anları əbədiləşdiririk. Yaradıcı baxış, peşəkar nəticə.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-paper">Qalereya</h2>
            <div className="flex flex-wrap gap-1 rounded-md border border-ink-line p-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setFilter(c.id)}
                  className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                    filter === c.id ? "bg-violet-500 text-white" : "text-paper/92 hover:text-paper"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {visibleGallery.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setLightboxIndex(gallery.findIndex((i) => i.id === g.id))}
                className={`group relative block w-full break-inside-avoid overflow-hidden rounded-lg bg-ink-soft ${g.h}`}
              >
                <Image
                  src={`https://images.unsplash.com/photo-${g.photo}?w=500&h=700&fit=crop&q=70`}
                  alt={g.label}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
              </button>
            ))}
          </div>
        </section>

        {lightboxIndex !== null && (
          <Lightbox
            items={gallery}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}

        <section className="mx-auto max-w-3xl px-6 pb-20">
          {booked ? (
            <div className="flex flex-col items-center rounded-lg border border-ink-line bg-ink-soft py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <CheckIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-xl text-paper">Sorğunuz qəbul edildi!</h3>
              <p className="mx-auto mt-1 max-w-sm text-sm text-paper/92">
                {pkg?.name} — {date} tarixi üçün ilkin qeyd olundu. Detalları dəqiqləşdirmək üçün
                tezliklə sizinlə əlaqə saxlanılacaq.
              </p>
              <button
                type="button"
                onClick={newBooking}
                className="mt-5 rounded-md border border-ink-line px-5 py-2 text-sm font-semibold text-paper/88 hover:text-paper"
              >
                Yeni sorğu göndər
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-center font-serif text-3xl text-paper">Paket Seçin</h2>

              <div className="mt-10 flex flex-col gap-3">
                {packages.map((p) => {
                  const active = packageId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPackageId(p.id)}
                      className={`flex items-center justify-between rounded-md border px-5 py-4 text-left transition-colors ${
                        active
                          ? "border-violet-500 bg-violet-500/10"
                          : "border-ink-line bg-ink-soft hover:border-paper/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                            active
                              ? "border-violet-400 bg-violet-400 text-ink"
                              : "border-paper/25 text-transparent"
                          }`}
                        >
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="font-medium text-paper">{p.name}</p>
                          <p className="text-sm text-paper/76">{p.detail}</p>
                        </div>
                      </div>
                      <span className="shrink-0 font-semibold text-violet-400">{p.price} ₼</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                <p className="mb-2 text-sm font-medium text-paper/92">Tarix seçin</p>
                <div
                  className={`flex items-center gap-2 rounded-md border bg-ink-soft px-4 py-3 ${
                    isPastDate ? "border-red-500" : "border-ink-line"
                  }`}
                >
                  <CalendarIcon className="h-4 w-4 text-paper/76" />
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-paper outline-none [color-scheme:dark]"
                  />
                </div>
                {isPastDate && (
                  <p className="mt-1.5 text-xs text-red-400">
                    Keçmiş tarix seçə bilməzsiniz. Zəhmət olmasa bugün və ya sonrakı bir tarix
                    seçin.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-paper/92">Çəkiliş haqqında (istəyə bağlı)</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Məkan, mövzu, xüsusi istəkləriniz..."
                  className="w-full rounded-md border border-ink-line bg-ink-soft px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/72 focus:border-violet-500"
                />
              </div>

              <button
                type="button"
                disabled={!canSubmit}
                onClick={() => setBooked(true)}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${
                  canSubmit
                    ? "bg-gold text-ink hover:bg-gold-soft"
                    : "cursor-not-allowed bg-ink-line text-paper/74"
                }`}
              >
                Sorğu Göndər
              </button>
              {!canSubmit && !isPastDate && (
                <p className="mt-2 text-center text-xs text-paper/74">
                  Davam etmək üçün paket və tarix seçin.
                </p>
              )}
            </>
          )}
        </section>
      </div>
    </DemoShell>
  );
}
