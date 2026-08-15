"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import {
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
} from "@/app/_lib/icons";
import { CoffeeMark } from "@/app/_lib/illustrations";

const SERVICE_FEE = 2;
const STATUS_STEPS = ["Qəbul edildi", "Hazırlanır", "Hazırdır"] as const;
const STATUS_DELAYS = [0, 3200, 7200];

const categories = [
  { id: "qehve", name: "Qəhvə" },
  { id: "sirniyyat", name: "Şirniyyat" },
] as const;

// Every photo below was downloaded and visually checked against its label —
// the previous cappuccino/latte/flat white slots didn't actually show those
// drinks (one was three unrelated drinks, one was an iced coffee, one was a
// bare espresso shot in a branded cup).
const menu = [
  { id: "espresso", category: "qehve", name: "Espresso", desc: "Qatı, güclü aromalı klassik espresso.", price: 3.5, photo: "1512663827140-3ef55c96cd49" },
  { id: "cappuccino", category: "qehve", name: "Cappuccino", desc: "Südlü köpüklə zənginləşdirilmiş kofe.", price: 5, photo: "1503240778100-fd245e17a273" },
  { id: "latte", category: "qehve", name: "Latte", desc: "Yumşaq süd dadı ilə balanslaşdırılmış.", price: 5.5, photo: "1587982704600-e5f79d652fe5" },
  { id: "flatwhite", category: "qehve", name: "Flat White", desc: "Kremli toxuma, incə espresso notları.", price: 5.5, photo: "1724776756211-279ec9e8308a" },
  { id: "cheesecake", category: "sirniyyat", name: "Cheesecake", desc: "Ev şəraitində hazırlanan klassik dilim.", price: 7, photo: "1524351199678-941a58a3df50" },
  { id: "kruassan", category: "sirniyyat", name: "Kruassan", desc: "Təzə bişmiş, xırtıldayan kruassan.", price: 4, photo: "1623334044303-241021148842" },
];

function OrderNumber() {
  const [num] = useState(() => Math.floor(1000 + Math.random() * 9000));
  return <>#AC-{num}</>;
}

function StatusTracker({ table }: { table: string }) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timers = STATUS_DELAYS.map((delay, i) =>
      setTimeout(() => setStepIndex(i), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center py-4 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
        <CheckIcon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-serif text-lg text-paper">Sifariş {table ? `(Masa ${table})` : ""} qəbul edildi</h3>
      <p className="mt-1 text-sm text-paper/92">
        Sifariş <OrderNumber /> mətbəxə göndərildi.
      </p>

      <div className="mt-6 flex w-full flex-col gap-3">
        {STATUS_STEPS.map((step, i) => {
          const reached = i <= stepIndex;
          return (
            <div key={step} className="flex items-center gap-3 text-left">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-colors ${
                  reached
                    ? "border-emerald-400 bg-emerald-400 text-ink"
                    : "border-ink-line text-transparent"
                }`}
              >
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className={`text-sm ${reached ? "text-paper" : "text-paper/74"}`}>
                {step}
              </span>
              {i === stepIndex && i < STATUS_STEPS.length - 1 && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AromaCafeClient() {
  const [table, setTable] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("qehve");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const setQty = (id: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const lines = useMemo(
    () => menu.filter((item) => cart[item.id] > 0).map((item) => ({ ...item, qty: cart[item.id] })),
    [cart]
  );

  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const total = subtotal > 0 ? subtotal + SERVICE_FEE : 0;
  const visibleMenu = menu.filter((item) => item.category === activeCategory);

  const newOrder = () => {
    setCart({});
    setSubmitted(false);
  };

  return (
    <DemoShell>
      <div className="bg-ink text-paper">
        <section className="grain relative overflow-hidden border-b border-ink-line px-6 py-24 text-center">
          <div
            className="cinematic-in mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-900 to-orange-800 text-white shadow-lg"
            style={{ animationDelay: "0s" }}
          >
            <CoffeeMark className="h-16 w-16" />
          </div>
          <h1
            className="cinematic-in mt-6 font-serif text-4xl font-medium tracking-tight text-paper sm:text-5xl"
            style={{ animationDelay: "0.08s" }}
          >
            Aroma Cafe
          </h1>
          <p
            className="cinematic-in mx-auto mt-4 max-w-md text-paper/92"
            style={{ animationDelay: "0.16s" }}
          >
            İstiliklə dolu hər fincan. Şəhərin mərkəzində sakit bir kofe künc.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-paper/76">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" /> Nizami küç. 28, Bakı
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" /> 08:00 – 23:00
            </span>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-sm">
            <label className="block text-sm font-medium text-paper/84">
              Masa nömrəniz
              <input
                type="text"
                inputMode="numeric"
                value={table}
                onChange={(e) => setTable(e.target.value)}
                placeholder="Məs: 4"
                className="mt-2 w-full rounded-md border border-ink-line bg-transparent px-4 py-2.5 text-paper outline-none placeholder:text-paper/72 focus:border-gold"
              />
            </label>
          </div>

          <h2 className="mt-14 text-center font-serif text-3xl text-paper">Menyu</h2>

          <div className="mx-auto mt-6 flex w-fit gap-1 rounded-md border border-ink-line p-1">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === c.id ? "bg-gold text-ink" : "text-paper/92 hover:text-paper"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-3">
              {visibleMenu.map((item) => {
                const qty = cart[item.id] ?? 0;
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b border-ink-line py-4"
                  >
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-ink-soft">
                      <Image
                        src={`https://images.unsplash.com/photo-${item.photo}?w=112&h=112&fit=crop&q=70`}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-paper">{item.name}</h3>
                        <span className="shrink-0 text-sm font-semibold text-gold">
                          {item.price.toFixed(2)} ₼
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-paper/78">{item.desc}</p>
                    </div>

                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => setQty(item.id, 1)}
                        className="shrink-0 rounded-md border border-gold/40 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/10"
                      >
                        Əlavə et
                      </button>
                    ) : (
                      <div className="flex shrink-0 items-center gap-2 rounded-md border border-ink-line p-0.5">
                        <button
                          type="button"
                          aria-label="Azalt"
                          onClick={() => setQty(item.id, qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded text-paper/88 hover:bg-ink-soft"
                        >
                          <MinusIcon className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center text-sm font-semibold text-paper">{qty}</span>
                        <button
                          type="button"
                          aria-label="Artır"
                          onClick={() => setQty(item.id, qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded text-paper/88 hover:bg-ink-soft"
                        >
                          <PlusIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-lg border border-ink-line bg-ink-soft p-5 lg:sticky lg:top-20">
              {submitted ? (
                <>
                  <StatusTracker table={table} />
                  <button
                    type="button"
                    onClick={newOrder}
                    className="mt-2 w-full rounded-md border border-ink-line px-5 py-2 text-sm font-semibold text-paper/88 transition-colors hover:text-paper"
                  >
                    Yeni sifariş ver
                  </button>
                </>
              ) : (
                <>
                  <h3 className="font-serif text-lg text-paper">Sifarişiniz</h3>

                  {lines.length === 0 ? (
                    <p className="mt-4 text-sm text-paper/76">Səbətiniz boşdur.</p>
                  ) : (
                    <div className="mt-4 flex flex-col gap-3">
                      {lines.map((l) => (
                        <div key={l.id} className="flex items-center justify-between text-sm">
                          <span className="text-paper/88">
                            {l.name} <span className="text-paper/74">x{l.qty}</span>
                          </span>
                          <span className="text-paper/88">{(l.price * l.qty).toFixed(2)} ₼</span>
                        </div>
                      ))}

                      <div className="mt-2 flex flex-col gap-1.5 border-t border-ink-line pt-3 text-sm">
                        <div className="flex items-center justify-between text-paper/78">
                          <span>Ara cəm</span>
                          <span>{subtotal.toFixed(2)} ₼</span>
                        </div>
                        <div className="flex items-center justify-between text-paper/78">
                          <span>Xidmət haqqı</span>
                          <span>{SERVICE_FEE.toFixed(2)} ₼</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-ink-line pt-1.5 font-semibold text-paper">
                          <span>Ümumi</span>
                          <span>{total.toFixed(2)} ₼</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={!table}
                        onClick={() => setSubmitted(true)}
                        className={`mt-2 flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${
                          table
                            ? "bg-gold text-ink hover:bg-gold-soft"
                            : "cursor-not-allowed bg-ink-line text-paper/74"
                        }`}
                      >
                        Sifarişi Göndər
                      </button>
                      {!table && (
                        <p className="text-center text-xs text-paper/74">
                          Davam etmək üçün masa nömrənizi daxil edin.
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
