"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { ImageWithFallback } from "@/app/_lib/ImageWithFallback";
import { BagIcon, CheckIcon, MinusIcon, PlusIcon } from "@/app/_lib/icons";

const DELIVERY_FEE = 5;
const FREE_DELIVERY_THRESHOLD = 100;

const products = [
  { id: "coat", name: "Klassik Palto", price: 89, color: "from-rose-700 to-pink-500" },
  { id: "sweater", name: "Yun Sviter", price: 45, color: "from-pink-600 to-rose-400" },
  { id: "jeans", name: "Cins Şalvar", price: 39, color: "from-rose-800 to-fuchsia-500" },
  { id: "shirt", name: "Yay Köynəyi", price: 29, color: "from-fuchsia-700 to-pink-400" },
  { id: "bag", name: "Dəri Çanta", price: 65, color: "from-rose-700 to-orange-400" },
  { id: "shoes", name: "İdman Ayaqqabı", price: 75, color: "from-pink-700 to-rose-500" },
];

export default function TrendButik() {
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
    () => products.filter((p) => cart[p.id] > 0).map((p) => ({ ...p, qty: cart[p.id] })),
    [cart]
  );

  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  const orderMessage = () => {
    const itemLines = lines
      .map((l) => `• ${l.name} x${l.qty} — ${l.price * l.qty} AZN`)
      .join("\n");
    return `Salam, Trend Butik-dən sifariş vermək istəyirəm:\n\n${itemLines}\n\nMəhsullar: ${subtotal} AZN\nÇatdırılma: ${delivery === 0 ? "Pulsuz" : delivery + " AZN"}\nÜmumi: ${total} AZN`;
  };

  return (
    <DemoShell>
      <div className="bg-zinc-950 text-zinc-100">
        <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-700 to-pink-500 text-white">
            <BagIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trend Butik
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Yeni Kolleksiya — üslubunuzu tamamlayan seçimlər indi onlayn mağazada.
          </p>
          <p className="mt-3 text-xs font-medium text-rose-400">
            {FREE_DELIVERY_THRESHOLD} AZN üzərinə sifarişlərdə çatdırılma pulsuzdur.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Məhsullar</h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {products.map((p) => {
                const qty = cart[p.id] ?? 0;
                return (
                  <div
                    key={p.id}
                    className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
                  >
                    <div className="relative aspect-square bg-zinc-800">
                      <ImageWithFallback
                        basePath={`/products/${p.id}`}
                        alt={p.name}
                        className="object-contain"
                        fallback={
                          <div
                            className={`relative h-full bg-gradient-to-br ${p.color}`}
                          >
                            <div
                              className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/20 blur-xl"
                              aria-hidden
                            />
                          </div>
                        }
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-white">{p.name}</p>
                      <p className="mt-1 text-sm text-rose-400">{p.price} AZN</p>

                      <div className="mt-3">
                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => setQty(p.id, 1)}
                            className="w-full rounded-full border border-rose-500/40 py-1.5 text-xs font-semibold text-rose-400 transition-colors hover:bg-rose-500/10"
                          >
                            Səbətə at
                          </button>
                        ) : (
                          <div className="flex items-center justify-between rounded-full border border-zinc-700 bg-zinc-950 p-1">
                            <button
                              type="button"
                              aria-label="Azalt"
                              onClick={() => setQty(p.id, qty - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-300 hover:bg-zinc-800"
                            >
                              <MinusIcon className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-sm font-semibold text-white">{qty}</span>
                            <button
                              type="button"
                              aria-label="Artır"
                              onClick={() => setQty(p.id, qty + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-300 hover:bg-zinc-800"
                            >
                              <PlusIcon className="h-3.5 w-3.5" />
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
              <h3 className="font-semibold text-white">Səbətiniz</h3>

              {lines.length === 0 ? (
                <p className="mt-4 text-sm text-zinc-500">Səbətiniz boşdur.</p>
              ) : (
                <div className="mt-4 flex flex-col gap-3">
                  {lines.map((l) => (
                    <div key={l.id} className="flex items-center justify-between text-sm">
                      <span className="text-zinc-300">
                        {l.name} <span className="text-zinc-500">x{l.qty}</span>
                      </span>
                      <span className="text-zinc-300">{l.price * l.qty} AZN</span>
                    </div>
                  ))}

                  <div className="mt-2 flex flex-col gap-1.5 border-t border-zinc-800 pt-3 text-sm">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Məhsullar</span>
                      <span>{subtotal} AZN</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Çatdırılma</span>
                      <span>{delivery === 0 ? "Pulsuz" : `${delivery} AZN`}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-800 pt-1.5 font-semibold text-white">
                      <span>Ümumi</span>
                      <span>{total} AZN</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl(orderMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Sifarişi Tamamla
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
