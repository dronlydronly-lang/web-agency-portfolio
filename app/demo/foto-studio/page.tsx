"use client";

import { useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { whatsappUrl } from "@/app/_lib/constants";
import { ImageWithFallback } from "@/app/_lib/ImageWithFallback";
import { CalendarIcon, CameraIcon, CheckIcon, WhatsAppIcon } from "@/app/_lib/icons";

const gallery = [
  { id: "gallery-1", color: "from-violet-700 to-fuchsia-500", h: "h-56" },
  { id: "gallery-2", color: "from-fuchsia-700 to-pink-500", h: "h-40" },
  { id: "gallery-3", color: "from-violet-600 to-indigo-500", h: "h-64" },
  { id: "gallery-4", color: "from-indigo-700 to-violet-500", h: "h-40" },
  { id: "gallery-5", color: "from-pink-700 to-fuchsia-500", h: "h-56" },
  { id: "gallery-6", color: "from-violet-800 to-purple-500", h: "h-40" },
];

const packages = [
  { id: "portrait", name: "Portret Paketi", detail: "1 saat çəkiliş, 15 redaktə edilmiş foto", price: 150 },
  { id: "wedding", name: "Toy Paketi", detail: "Tam gün çəkiliş, 200+ foto, video xülasə", price: 800 },
  { id: "product", name: "Məhsul Paketi", detail: "10 məhsul, ağ fon, e-ticarət üçün hazır", price: 200 },
];

export default function FotoStudio() {
  const [packageId, setPackageId] = useState<string | null>(null);
  const [date, setDate] = useState("");

  const pkg = packages.find((p) => p.id === packageId);
  const canSubmit = Boolean(pkg && date);

  const bookingMessage = () =>
    `Salam, Foto Studio-dan çəkiliş sifariş etmək istəyirəm:\n\nPaket: ${pkg?.name}\nDetallar: ${pkg?.detail}\nTarix: ${date}\nQiymət: ${pkg?.price} AZN`;

  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-fuchsia-500 text-white">
            <CameraIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Foto Studio
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Anları əbədiləşdiririk. Yaradıcı baxış, peşəkar nəticə.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Qalereya</h2>
          <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {gallery.map((g) => (
              <div
                key={g.id}
                className={`relative break-inside-avoid overflow-hidden rounded-2xl bg-zinc-800 ${g.h}`}
              >
                <ImageWithFallback
                  basePath={`/gallery/${g.id}`}
                  alt="Foto Studio işi"
                  className="object-cover"
                  fallback={<div className={`h-full w-full bg-gradient-to-br ${g.color}`} />}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <h2 className="text-center text-3xl font-bold text-white">Paket Seçin</h2>

          <div className="mt-10 flex flex-col gap-3">
            {packages.map((p) => {
              const active = packageId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPackageId(p.id)}
                  className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-colors ${
                    active
                      ? "border-violet-500 bg-violet-500/10"
                      : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                        active
                          ? "border-violet-400 bg-violet-400 text-zinc-950"
                          : "border-zinc-600 text-transparent"
                      }`}
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{p.name}</p>
                      <p className="text-sm text-zinc-500">{p.detail}</p>
                    </div>
                  </div>
                  <span className="shrink-0 font-semibold text-violet-400">{p.price} AZN</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-zinc-400">Tarix seçin</p>
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <CalendarIcon className="h-4 w-4 text-zinc-500" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-white outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          <a
            href={canSubmit ? whatsappUrl(bookingMessage()) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!canSubmit) e.preventDefault();
            }}
            className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-transform ${
              canSubmit
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 hover:scale-105"
                : "cursor-not-allowed bg-zinc-800 text-zinc-500"
            }`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Sifariş Et
          </a>
          {!canSubmit && (
            <p className="mt-2 text-center text-xs text-zinc-500">
              Davam etmək üçün paket və tarix seçin.
            </p>
          )}
        </section>
      </div>
    </DemoShell>
  );
}
