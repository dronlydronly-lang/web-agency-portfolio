"use client";

import { useEffect, useState } from "react";
import { DemoShell } from "@/app/_lib/DemoShell";
import { CheckIcon } from "@/app/_lib/icons";
import { DocMark } from "@/app/_lib/illustrations";

const posts = [
  {
    id: "design-trends",
    title: "2026-cı ildə veb dizaynda əsas trendlər",
    excerpt: "Minimalizmdən tutmuş hərəkətli interfeyslərə qədər bu il nələr aparıcıdır.",
    body: "Xüsusilə mobil-birinci yanaşma və sürətli yüklənmə artıq seçim deyil, standartdır. Brendlər sadə, aydın mesajlı saytlara üstünlük verir.\n\nTipoqrafiya daha cəsarətli olur, animasiyalar isə funksional məqsədə xidmət edir — sadəcə diqqət çəkmək üçün deyil. İstifadəçi bir səhifədə nə etməli olduğunu ilk saniyədə anlamalıdır.",
    tag: "Dizayn",
    date: "12 İyul 2026",
    readTime: "4 dəq",
  },
  {
    id: "why-website",
    title: "Kiçik biznes üçün niyə sayt vacibdir?",
    excerpt: "Sosial media kifayət etmir — öz domenində olmağın üstünlükləri.",
    body: "Öz saytınız olduqda alqoritm dəyişikliklərindən asılı olmursunuz və müştəri sizə birbaşa etibar edir. Həm də WhatsApp, İnstagram kimi kanalları bir yerdə toplaya bilirsiniz.\n\nBir sayt, sosial media hesabınız bağlansa belə, biznesinizin davam etməsini təmin edən yeganə rəqəmsal aktivdir.",
    tag: "Biznes",
    date: "3 İyul 2026",
    readTime: "3 dəq",
  },
  {
    id: "seo-basics",
    title: "SEO-ya başlanğıc: ilk 5 addım",
    excerpt: "Google-da görünmək üçün saytınızda etməli olduğunuz sadə addımlar.",
    body: "Düzgün başlıqlar, sürətli yüklənmə, mobil uyğunluq, keyfiyyətli məzmun və düzgün açar sözlər — bunlar heç bir xərc olmadan başlaya biləcəyiniz addımlardır.\n\nGoogle əvvəlcə istifadəçi təcrübəsinə baxır: sayt nə qədər sürətli açılır, mobil ekranda necə görünür. Texniki əsas düzgün qurulmadan məzmun tək başına kifayət etmir.",
    tag: "SEO",
    date: "28 İyun 2026",
    readTime: "5 dəq",
  },
  {
    id: "site-speed",
    title: "Sürətli sayt niyə satışa təsir edir?",
    excerpt: "Yüklənmə sürəti ilə istifadəçi davranışı arasındakı bağlantı.",
    body: "Araşdırmalar göstərir ki, 3 saniyədən çox yüklənən saytları ziyarətçilərin böyük hissəsi tərk edir. Sürət birbaşa satışa çevrilmə faizinə təsir edir.\n\nŞəkillərin optimallaşdırılması, lazımsız skriptlərin silinməsi və müasir texnologiyalardan istifadə sürəti kəskin artıra bilər.",
    tag: "Performans",
    date: "15 İyun 2026",
    readTime: "3 dəq",
  },
];

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setProgress(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-[41px] z-40 h-0.5 w-full bg-ink-line">
      <div className="h-full bg-emerald-400 transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  );
}

function ArticleReader({
  post,
  related,
  onBack,
  onOpen,
}: {
  post: (typeof posts)[number];
  related: typeof posts;
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="bg-ink text-paper">
      <ProgressBar />
      <article className="mx-auto max-w-2xl px-6 py-16">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-paper/50 hover:text-paper"
        >
          ← Bütün yazılar
        </button>

        <div className="mt-6 flex items-center gap-2 text-xs text-paper/45">
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400">{post.tag}</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} oxuma</span>
        </div>

        <h1 className="mt-4 font-serif text-3xl font-medium text-paper sm:text-4xl">{post.title}</h1>

        <div className="mt-8 flex flex-col gap-4 text-paper/70">
          {post.body.split("\n\n").map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink-line pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/35">
              Əlaqəli məqalələr
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {related.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => onOpen(r.id)}
                  className="text-left text-sm font-medium text-paper/70 hover:text-paper"
                >
                  {r.title} →
                </button>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

export default function GundemBloq() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const tags = ["all", ...Array.from(new Set(posts.map((p) => p.tag)))];
  const activePost = posts.find((p) => p.id === activeId) ?? null;

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(valid ? "success" : "error");
  };

  if (activePost) {
    return (
      <DemoShell>
        <ArticleReader
          post={activePost}
          related={posts.filter((p) => p.id !== activePost.id && p.tag === activePost.tag).slice(0, 2)}
          onBack={() => setActiveId(null)}
          onOpen={setActiveId}
        />
      </DemoShell>
    );
  }

  const visiblePosts = posts.filter((p) => tagFilter === "all" || p.tag === tagFilter);
  const [featured, ...rest] = visiblePosts;

  return (
    <DemoShell>
      <div className="bg-ink text-paper">
        <section className="grain relative overflow-hidden border-b border-ink-line px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.14),transparent_60%)]"
            aria-hidden
          />
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-950 to-teal-900 text-white shadow-lg">
            <DocMark className="h-16 w-16" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-paper sm:text-5xl">
            Gündəm Bloq
          </h1>
          <p className="mx-auto mt-4 max-w-md text-paper/50">
            Dizayn, biznes və texnologiya haqqında qısa və faydalı yazılar.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex flex-wrap gap-1 rounded-md border border-ink-line p-1">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setTagFilter(tag)}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                  tagFilter === tag ? "bg-emerald-500 text-white" : "text-paper/50 hover:text-paper"
                }`}
              >
                {tag === "all" ? "Hamısı" : tag}
              </button>
            ))}
          </div>

          {featured && (
            <button
              type="button"
              onClick={() => setActiveId(featured.id)}
              className="mt-8 block w-full rounded-lg border border-ink-line bg-ink-soft p-6 text-left transition-colors hover:border-emerald-400/40 sm:p-8"
            >
              <div className="flex items-center gap-2 text-xs text-paper/45">
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400">
                  {featured.tag}
                </span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} oxuma</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl text-paper sm:text-3xl">{featured.title}</h2>
              <p className="mt-2 text-paper/55">{featured.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-400">
                Məqaləni oxu →
              </span>
            </button>
          )}

          <div className="mt-4 border-t border-ink-line">
            {rest.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className="flex w-full items-center justify-between gap-4 border-b border-ink-line py-5 text-left transition-colors hover:bg-ink-soft/50"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-paper/40">
                    <span>{p.tag}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mt-1 truncate font-medium text-paper">{p.title}</h3>
                </div>
                <span className="shrink-0 text-paper/30">→</span>
              </button>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-ink-line bg-ink-soft p-6 text-center">
            <h2 className="font-serif text-lg text-paper">E-poçt Bülleteni</h2>
            <p className="mx-auto mt-1 max-w-sm text-sm text-paper/50">
              Yeni yazılardan xəbərdar olmaq üçün e-poçtunuzu buraxın.
            </p>

            {status === "success" ? (
              <div className="mt-4 flex items-center justify-center gap-2 text-emerald-400">
                <CheckIcon className="h-5 w-5" />
                Təşəkkürlər, abunə oldunuz!
              </div>
            ) : (
              <form
                onSubmit={subscribe}
                className="mx-auto mt-4 flex max-w-sm flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="E-poçt ünvanınız"
                  className="w-full rounded-md border border-ink-line bg-ink px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/25 focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                >
                  Abunə ol
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-rose-400">Zəhmət olmasa düzgün e-poçt daxil edin.</p>
            )}
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
