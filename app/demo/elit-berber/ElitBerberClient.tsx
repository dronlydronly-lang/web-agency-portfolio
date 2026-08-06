"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { CheckIcon, ClockIcon, MapPinIcon } from "@/app/_lib/icons";
import { BarberMark } from "@/app/_lib/illustrations";

const services = [
  { id: "hair", name: "Saç Kəsimi", duration: 30, price: 15 },
  { id: "beard", name: "Saqqal Düzəltmə", duration: 20, price: 10 },
  { id: "combo", name: "Saç + Saqqal", duration: 45, price: 22 },
  { id: "kids", name: "Uşaq Kəsimi", duration: 25, price: 12 },
];

const stylists = [
  { id: "any", name: "İstənilən usta" },
  { id: "elvin", name: "Elvin" },
  { id: "tural", name: "Tural" },
];

const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

// Mock: a couple of slots read as already booked for a given stylist, just
// so the grid isn't uniformly open — same idea a real booking API would enforce.
const bookedByStylist: Record<string, string[]> = {
  elvin: ["12:00", "16:00"],
  tural: ["10:00", "14:00"],
  any: [],
};

function nextDays(count: number) {
  const days = [];
  for (let i = 0; i < count; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
}

const dayNames = ["Baz", "B.e", "Ç.a", "Çər", "C.a", "Cüm", "Şən"];

export function ElitBerberClient() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [stylist, setStylist] = useState("any");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);

  const days = useMemo(() => nextDays(7), []);
  const bookedSlots = bookedByStylist[stylist] ?? [];

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
  const canBook = chosen.length > 0 && date !== null && time !== "";

  const newBooking = () => {
    setSelected(new Set());
    setDate(null);
    setTime("");
    setBooked(false);
  };

  return (
    <DemoShell>
      <div className="bg-ink text-paper">
        <section className="grain relative overflow-hidden border-b border-ink-line px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(161,161,170,0.14),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-700 to-stone-500 text-white shadow-lg">
            <BarberMark className="h-16 w-16" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-paper sm:text-5xl">
            Elit Berber Studio
          </h1>
          <p className="mx-auto mt-4 max-w-md text-paper/92">
            Klassik üslub, peşəkar toxunuş. Növbənizi aşağıdan onlayn təyin edin.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-paper/76">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" /> 28 May küç. 12, Bakı
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" /> 10:00 – 19:00
            </span>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center font-serif text-3xl text-paper">Növbə Götür</h2>

          <div className="mt-10">
            <p className="text-sm font-medium text-paper/92">1. Xidmət(ləri) seçin</p>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {services.map((s) => {
                const active = selected.has(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggle(s.id)}
                    className={`flex items-center justify-between rounded-md border px-5 py-4 text-left transition-colors ${
                      active
                        ? "border-amber-500/60 bg-amber-500/10"
                        : "border-ink-line bg-ink-soft hover:border-paper/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                          active ? "border-amber-400 bg-amber-400 text-ink" : "border-paper/25 text-transparent"
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="font-medium text-paper">{s.name}</p>
                        <p className="text-sm text-paper/76">{s.duration} dəq</p>
                      </div>
                    </div>
                    <span className="font-semibold text-gold">{s.price} ₼</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium text-paper/92">2. Ustanı seçin</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {stylists.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setStylist(s.id);
                    setTime("");
                  }}
                  className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                    stylist === s.id
                      ? "border-amber-400 bg-amber-400 text-ink"
                      : "border-ink-line text-paper/84 hover:border-paper/20"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium text-paper/92">3. Tarix seçin</p>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {days.map((d) => {
                const isSelected = date?.toDateString() === d.toDateString();
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    onClick={() => {
                      setDate(d);
                      setTime("");
                    }}
                    className={`flex shrink-0 flex-col items-center rounded-md border px-4 py-3 transition-colors ${
                      isSelected
                        ? "border-amber-400 bg-amber-400 text-ink"
                        : "border-ink-line bg-ink-soft text-paper/88 hover:border-paper/20"
                    }`}
                  >
                    <span className="text-xs uppercase">{dayNames[d.getDay()]}</span>
                    <span className="mt-1 text-lg font-semibold">{d.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium text-paper/92">4. Saat seçin</p>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {timeSlots.map((t) => {
                const isBooked = date !== null && bookedSlots.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    disabled={isBooked || date === null}
                    onClick={() => setTime(t)}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      isBooked
                        ? "cursor-not-allowed border-ink-line text-paper/72 line-through"
                        : time === t
                          ? "border-amber-400 bg-amber-400 text-ink"
                          : "border-ink-line text-paper/88 hover:border-paper/20"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            {date === null && (
              <p className="mt-2 text-xs text-paper/74">Əvvəlcə tarix seçin.</p>
            )}
          </div>

          <div className="mt-10 rounded-lg border border-ink-line bg-ink-soft p-5">
            {booked ? (
              <div className="flex flex-col items-center py-4 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-paper">Növbəniz təsdiqləndi!</h3>
                <p className="mt-1 text-sm text-paper/92">
                  {stylists.find((s) => s.id === stylist)?.name} ·{" "}
                  {date?.toLocaleDateString("az-AZ", { day: "numeric", month: "long" })}, saat {time}.
                </p>
                <button
                  type="button"
                  onClick={newBooking}
                  className="mt-5 rounded-md border border-ink-line px-5 py-2 text-sm font-semibold text-paper/88 hover:text-paper"
                >
                  Yeni növbə götür
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-sm text-paper/78">
                  <span>Ümumi müddət</span>
                  <span>{totalDuration} dəq</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between font-semibold text-paper">
                  <span>Ümumi qiymət</span>
                  <span>{totalPrice} ₼</span>
                </div>

                <button
                  type="button"
                  disabled={!canBook}
                  onClick={() => setBooked(true)}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${
                    canBook
                      ? "bg-gold text-ink hover:bg-gold-soft"
                      : "cursor-not-allowed bg-ink-line text-paper/74"
                  }`}
                >
                  Növbəni Təsdiqlə
                </button>
                {!canBook && (
                  <p className="mt-2 text-center text-xs text-paper/74">
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
