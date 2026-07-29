"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { ImageWithFallback } from "@/app/_lib/ImageWithFallback";
import {
  CakeSliceIcon,
  CheckIcon,
  ClockIcon,
  CroissantIcon,
  CupIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
} from "@/app/_lib/icons";

const SERVICE_FEE = 2;

const menu = [
  { id: "espresso", name: "Espresso", desc: "Qatı, güclü aromalı klassik espresso.", price: 3.5, icon: CupIcon, color: "from-amber-800 to-amber-600", image: "espresso" },
  { id: "cappuccino", name: "Cappuccino", desc: "Südlü köpüklə zənginləşdirilmiş kofe.", price: 5, icon: CupIcon, color: "from-amber-700 to-orange-500", image: "cappuccino" },
  { id: "latte", name: "Latte", desc: "Yumşaq süd dadı ilə balanslaşdırılmış.", price: 5.5, icon: CupIcon, color: "from-orange-600 to-amber-400", image: "latte" },
  { id: "flatwhite", name: "Flat White", desc: "Kremli toxuma, incə espresso notları.", price: 5.5, icon: CupIcon, color: "from-amber-600 to-yellow-500", image: "flat-white" },
  { id: "cheesecake", name: "Cheesecake", desc: "Ev şəraitində hazırlanan klassik dilim.", price: 7, icon: CakeSliceIcon, color: "from-orange-700 to-rose-400", image: "cheesecake" },
  { id: "kruassan", name: "Kruassan", desc: "Təzə bişmiş, xırtıldayan kruassan.", price: 4, icon: CroissantIcon, color: "from-yellow-700 to-amber-500", image: "kruassan" },
];

function MenuItemPhoto({ item }: { item: (typeof menu)[number] }) {
  return (
    <div className="relative h-48 w-full bg-zinc-800">
      <ImageWithFallback
        basePath={`/menu/${item.image}`}
        alt={item.name}
        className="object-contain"
        fallback={
          <div
            className={`flex h-full items-center justify-center bg-gradient-to-br ${item.color}`}
          >
            <div
              className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/20 blur-xl"
              aria-hidden
            />
            <item.icon className="h-10 w-10 text-white drop-shadow" />
          </div>
        }
      />
    </div>
  );
}

export default function AromaCafe() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const setQty = (id: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const lines = useMemo(
    () =>
      menu
        .filter((item) => cart[item.id] > 0)
        .map((item) => ({ ...item, qty: cart[item.id] })),
    [cart]
  );

  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const total = subtotal > 0 ? subtotal + SERVICE_FEE : 0;

  const orderMessage = () => {
    const itemLines = lines
      .map((l) => `• ${l.name} x${l.qty} — ${(l.price * l.qty).toFixed(2)} AZN`)
      .join("\n");
    return `Salam, Aroma Cafe-dən sifariş vermək istəyirəm:\n\n${itemLines}\n\nAra cəm: ${subtotal.toFixed(2)} AZN\nXidmət haqqı: ${SERVICE_FEE.toFixed(2)} AZN\nÜmumi: ${total.toFixed(2)} AZN`;
  };

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

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Menyu</h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
            Sifariş vermək üçün istədiyiniz məhsulların sayını seçin.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {menu.map((item) => {
                const qty = cart[item.id] ?? 0;
                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
                  >
                    <MenuItemPhoto item={item} />
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <span className="shrink-0 text-sm font-semibold text-amber-400">
                          {item.price.toFixed(2)} AZN
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>

                      <div className="mt-4">
                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => setQty(item.id, 1)}
                            className="w-full rounded-full border border-amber-500/40 py-2 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
                          >
                            Səbətə at
                          </button>
                        ) : (
                          <div className="flex items-center justify-between rounded-full border border-zinc-700 bg-zinc-950 p-1">
                            <button
                              type="button"
                              aria-label="Azalt"
                              onClick={() => setQty(item.id, qty - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 hover:bg-zinc-800"
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <span className="font-semibold text-white">{qty}</span>
                            <button
                              type="button"
                              aria-label="Artır"
                              onClick={() => setQty(item.id, qty + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 hover:bg-zinc-800"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 lg:sticky lg:top-20">
              <h3 className="font-semibold text-white">Sifarişiniz</h3>

              {lines.length === 0 ? (
                <p className="mt-4 text-sm text-zinc-500">Səbətiniz boşdur.</p>
              ) : (
                <div className="mt-4 flex flex-col gap-3">
                  {lines.map((l) => (
                    <div key={l.id} className="flex items-center justify-between text-sm">
                      <span className="text-zinc-300">
                        {l.name} <span className="text-zinc-500">x{l.qty}</span>
                      </span>
                      <span className="text-zinc-300">{(l.price * l.qty).toFixed(2)} AZN</span>
                    </div>
                  ))}

                  <div className="mt-2 flex flex-col gap-1.5 border-t border-zinc-800 pt-3 text-sm">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Ara cəm</span>
                      <span>{subtotal.toFixed(2)} AZN</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Xidmət haqqı</span>
                      <span>{SERVICE_FEE.toFixed(2)} AZN</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-800 pt-1.5 font-semibold text-white">
                      <span>Ümumi</span>
                      <span>{total.toFixed(2)} AZN</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl(orderMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Sifarişi Göndər
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
