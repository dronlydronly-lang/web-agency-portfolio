"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { CalendarIcon, CheckIcon, ClockIcon, MapPinIcon, ScissorsIcon } from "@/app/_lib/icons";

const services = [
  { id: "hair", name: "Saç Kəsimi", duration: 30, price: 15 },
  { id: "beard", name: "Saqqal Düzəltmə", duration: 20, price: 10 },
  { id: "combo", name: "Saç + Saqqal", duration: 45, price: 22 },
  { id: "kids", name: "Uşaq Kəsimi", duration: 25, price: 12 },
];

const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const today = new Date().toISOString().split("T")[0];

export default function ElitBerber() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const chosen = useMemo(() => services.filter((s) => selected.has(s.id)), [selected]);
  const totalPrice = chosen.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = chosen.reduce((sum, s) => sum + s.duration, 0);
  const isPastDate = date !== "" && date < today;
  const canBook = chosen.length > 0 && date !== "" && !isPastDate && time !== "";

  const newBooking = () => {
    setSelected(new Set());
    setDate("");
    setTime("");
    setBooked(false);
  };

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
            Klassik üslub, peşəkar toxunuş. Növbənizi aşağıdan onlayn təyin edin.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" /> 28 May küç. 12, Bakı
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" /> 10:00 – 19:00
            </span>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Növbə Götür</h2>

          <div className="mt-10 grid grid-cols-1 gap-4">
            <p className="text-sm font-medium text-zinc-400">1. Xidmət(ləri) seçin</p>
            {services.map((s) => {
              const active = selected.has(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggle(s.id)}
                  className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-colors ${
                    active
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                        active ? "border-amber-400 bg-amber-400 text-zinc-950" : "border-zinc-600 text-transparent"
                      }`}
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.name}</p>
                      <p className="text-sm text-zinc-500">{s.duration} dəq</p>
                    </div>
                  </div>
                  <span className="font-semibold text-amber-400">{s.price} AZN</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium text-zinc-400">2. Tarix seçin</p>
              <div
                className={`flex items-center gap-2 rounded-xl border bg-zinc-900/60 px-4 py-3 ${
                  isPastDate ? "border-red-500" : "border-zinc-800"
                }`}
              >
                <CalendarIcon className="h-4 w-4 text-zinc-500" />
                <input
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-white outline-none [color-scheme:dark]"
                />
              </div>
              {isPastDate && (
                <p className="mt-1.5 text-xs text-red-400">
                  Keçmiş tarix seçə bilməzsiniz. Zəhmət olmasa bugün və ya sonrakı bir tarix seçin.
                </p>
              )}
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-zinc-400">3. Saat seçin</p>
              <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
                <ClockIcon className="h-4 w-4 shrink-0 text-zinc-500" />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-transparent text-white outline-none [color-scheme:dark]"
                >
                  <option value="" className="bg-zinc-900">
                    Saat seçin
                  </option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-zinc-900">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            {booked ? (
              <div className="flex flex-col items-center py-4 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-white">Növbəniz təsdiqləndi!</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {date} tarixi, saat {time} üçün gözləyirik.
                </p>
                <button
                  type="button"
                  onClick={newBooking}
                  className="mt-5 rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800"
                >
                  Yeni növbə götür
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>Ümumi müddət</span>
                  <span>{totalDuration} dəq</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between font-semibold text-white">
                  <span>Ümumi qiymət</span>
                  <span>{totalPrice} AZN</span>
                </div>

                <button
                  type="button"
                  disabled={!canBook}
                  onClick={() => setBooked(true)}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-transform ${
                    canBook
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 hover:scale-105"
                      : "cursor-not-allowed bg-zinc-800 text-zinc-500"
                  }`}
                >
                  Növbəni Təsdiqlə
                </button>
                {!canBook && !isPastDate && (
                  <p className="mt-2 text-center text-xs text-zinc-500">
                    Davam etmək üçün xidmət, tarix və saat seçin.
                  </p>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
