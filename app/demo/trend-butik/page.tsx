"use client";

import { useMemo, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { BagIcon, CheckIcon, MinusIcon, PlusIcon } from "@/app/_lib/icons";
import { BoutiqueMark } from "@/app/_lib/illustrations";

const DELIVERY_FEE = 5;
const FREE_DELIVERY_THRESHOLD = 100;
const SIZES = ["S", "M", "L", "XL"] as const;

const categories = [
  { id: "all", name: "Hamısı" },
  { id: "ust", name: "Üst geyim" },
  { id: "alt", name: "Alt geyim" },
  { id: "aksesuar", name: "Aksesuar" },
] as const;

const products = [
  { id: "coat", category: "ust", name: "Klassik Palto", price: 89 },
  { id: "sweater", category: "ust", name: "Yun Sviter", price: 45 },
  { id: "shirt", category: "ust", name: "Yay Köynəyi", price: 29 },
  { id: "jeans", category: "alt", name: "Cins Şalvar", price: 39 },
  { id: "bag", category: "aksesuar", name: "Dəri Çanta", price: 65 },
  { id: "shoes", category: "aksesuar", name: "İdman Ayaqqabı", price: 75 },
];

type CartLine = { key: string; id: string; name: string; price: number; size: string; qty: number };

function OrderNumber() {
  const [num] = useState(() => Math.floor(1000 + Math.random() * 9000));
  return <>#TB-{num}</>;
}

function QuickView({
  product,
  onClose,
  onAdd,
}: {
  product: (typeof products)[number];
  onClose: () => void;
  onAdd: (size: string) => void;
}) {
  const [size, setSize] = useState<string>("M");

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/80 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-lg border border-ink-line bg-ink-soft p-6 sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-paper">{product.name}</h3>
            <p className="mt-1 text-sm font-semibold text-rose-400">{product.price} ₼</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Bağla"
            className="text-2xl leading-none text-paper/40 hover:text-paper"
          >
            ×
          </button>
        </div>

        <p className="mt-3 text-sm font-medium text-paper/50">Ölçü seçin</p>
        <div className="mt-2 flex gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`h-10 w-10 rounded-md border text-sm font-semibold transition-colors ${
                size === s
                  ? "border-rose-400 bg-rose-400 text-ink"
                  : "border-ink-line text-paper/60 hover:border-paper/30"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onAdd(size)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-rose-400"
        >
          Səbətə əlavə et — {product.price} ₼
        </button>
      </div>
    </div>
  );
}

export default function TrendButik() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("all");
  const [quickView, setQuickView] = useState<(typeof products)[number] | null>(null);
  const [cart, setCart] = useState<Record<string, CartLine>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form" | "done">("cart");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const addToCart = (product: (typeof products)[number], size: string) => {
    const key = `${product.id}-${size}`;
    setCart((prev) => ({
      ...prev,
      [key]: {
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        qty: (prev[key]?.qty ?? 0) + 1,
      },
    }));
    setQuickView(null);
    setDrawerOpen(true);
  };

  const setQty = (key: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[key];
      else next[key] = { ...next[key], qty };
      return next;
    });
  };

  const lines = useMemo(() => Object.values(cart), [cart]);
  const itemCount = lines.reduce((sum, l) => sum + l.qty, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const visibleProducts = products.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );
  const canSubmitForm = form.name.trim() && form.phone.trim() && form.address.trim();

  const newOrder = () => {
    setCart({});
    setCheckoutStep("cart");
    setForm({ name: "", phone: "", address: "" });
    setDrawerOpen(false);
  };

  return (
    <DemoShell>
      <div className="relative bg-ink text-paper">
        <section className="grain relative overflow-hidden border-b border-ink-line px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.14),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-rose-700 to-pink-500 text-white">
            <BagIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-paper sm:text-5xl">
            Trend Butik
          </h1>
          <p className="mx-auto mt-4 max-w-md text-paper/50">
            Yeni Kolleksiya — üslubunuzu tamamlayan seçimlər indi onlayn mağazada.
          </p>
          <p className="mt-3 text-xs font-medium text-rose-400">
            {FREE_DELIVERY_THRESHOLD} ₼ üzərinə sifarişlərdə çatdırılma pulsuzdur.
          </p>
        </section>

        <div className="sticky top-[41px] z-40 flex items-center justify-between gap-4 border-b border-ink-line bg-ink/95 px-6 py-3 backdrop-blur">
          <div className="flex flex-wrap gap-1">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === c.id ? "bg-rose-500 text-white" : "text-paper/50 hover:text-paper"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="relative flex items-center gap-2 rounded-md border border-ink-line px-3 py-1.5 text-sm font-medium text-paper/80 hover:text-paper"
          >
            <BagIcon className="h-4 w-4" />
            Səbət
            {itemCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {visibleProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setQuickView(p)}
                className="group overflow-hidden rounded-lg border border-ink-line bg-ink-soft text-left transition-colors hover:border-rose-400/40"
              >
                <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-rose-800/40 to-pink-500/20">
                  <BagIcon className="h-10 w-10 text-rose-300/70 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-x-3 bottom-3 rounded-md bg-ink/80 py-2 text-center text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    Sürətli baxış
                  </span>
                </div>
                <div className="p-3">
                  <p className="font-medium text-paper">{p.name}</p>
                  <p className="mt-1 text-sm text-rose-400">{p.price} ₼</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {quickView && (
          <QuickView
            product={quickView}
            onClose={() => setQuickView(null)}
            onAdd={(size) => addToCart(quickView, size)}
          />
        )}

        <div
          className={`fixed inset-0 z-50 transition-opacity ${
            drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-ink/70" onClick={() => setDrawerOpen(false)} />
          <aside
            className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-ink-line bg-ink-soft transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-ink-line px-5 py-4">
              <h3 className="font-serif text-lg text-paper">Səbətiniz</h3>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Bağla"
                className="text-2xl leading-none text-paper/40 hover:text-paper"
              >
                ×
              </button>
            </div>

            {checkoutStep === "done" ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <h4 className="mt-4 font-serif text-lg text-paper">Sifarişiniz qəbul edildi!</h4>
                <p className="mt-1 text-sm text-paper/50">
                  Sifariş <OrderNumber /> 2-3 iş günü ərzində {form.address} ünvanına çatdırılacaq.
                </p>
                <button
                  type="button"
                  onClick={newOrder}
                  className="mt-6 rounded-md border border-ink-line px-5 py-2 text-sm font-semibold text-paper/70 hover:text-paper"
                >
                  Yeni sifariş ver
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  {lines.length === 0 ? (
                    <p className="text-sm text-paper/40">Səbətiniz boşdur.</p>
                  ) : checkoutStep === "cart" ? (
                    <div className="flex flex-col gap-4">
                      {lines.map((l) => (
                        <div key={l.key} className="flex items-center justify-between gap-3 text-sm">
                          <div>
                            <p className="text-paper">{l.name}</p>
                            <p className="text-paper/40">Ölçü: {l.size}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-md border border-ink-line p-0.5">
                              <button
                                type="button"
                                onClick={() => setQty(l.key, l.qty - 1)}
                                className="flex h-6 w-6 items-center justify-center rounded text-paper/70 hover:bg-ink"
                              >
                                <MinusIcon className="h-3 w-3" />
                              </button>
                              <span className="w-4 text-center font-semibold text-paper">{l.qty}</span>
                              <button
                                type="button"
                                onClick={() => setQty(l.key, l.qty + 1)}
                                className="flex h-6 w-6 items-center justify-center rounded text-paper/70 hover:bg-ink"
                              >
                                <PlusIcon className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="w-14 shrink-0 text-right text-paper/70">
                              {l.price * l.qty} ₼
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <label className="block text-sm text-paper/60">
                        Ad Soyad
                        <input
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="mt-1.5 w-full rounded-md border border-ink-line bg-transparent px-3 py-2 text-paper outline-none focus:border-rose-400"
                        />
                      </label>
                      <label className="block text-sm text-paper/60">
                        Telefon
                        <input
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder="+994 ..."
                          className="mt-1.5 w-full rounded-md border border-ink-line bg-transparent px-3 py-2 text-paper outline-none placeholder:text-paper/25 focus:border-rose-400"
                        />
                      </label>
                      <label className="block text-sm text-paper/60">
                        Çatdırılma ünvanı
                        <input
                          value={form.address}
                          onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                          className="mt-1.5 w-full rounded-md border border-ink-line bg-transparent px-3 py-2 text-paper outline-none focus:border-rose-400"
                        />
                      </label>
                    </div>
                  )}
                </div>

                {lines.length > 0 && (
                  <div className="border-t border-ink-line p-5">
                    <div className="flex flex-col gap-1.5 text-sm">
                      <div className="flex items-center justify-between text-paper/45">
                        <span>Məhsullar</span>
                        <span>{subtotal} ₼</span>
                      </div>
                      <div className="flex items-center justify-between text-paper/45">
                        <span>Çatdırılma</span>
                        <span>{delivery === 0 ? "Pulsuz" : `${delivery} ₼`}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-ink-line pt-1.5 font-semibold text-paper">
                        <span>Ümumi</span>
                        <span>{total} ₼</span>
                      </div>
                    </div>

                    {checkoutStep === "cart" ? (
                      <button
                        type="button"
                        onClick={() => setCheckoutStep("form")}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-rose-400"
                      >
                        Sifarişi Tamamla
                      </button>
                    ) : (
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setCheckoutStep("cart")}
                          className="rounded-md border border-ink-line px-4 py-3 text-sm font-semibold text-paper/70 hover:text-paper"
                        >
                          Geri
                        </button>
                        <button
                          type="button"
                          disabled={!canSubmitForm}
                          onClick={() => setCheckoutStep("done")}
                          className={`flex-1 rounded-md px-5 py-3 font-semibold transition-colors ${
                            canSubmitForm
                              ? "bg-rose-500 text-white hover:bg-rose-400"
                              : "cursor-not-allowed bg-ink-line text-paper/35"
                          }`}
                        >
                          Sifarişi Təsdiqlə
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </aside>
        </div>
      </div>
    </DemoShell>
  );
}
