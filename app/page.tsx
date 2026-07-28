import Link from "next/link";
import { AGENCY_NAME, WHATSAPP_URL } from "./_lib/constants";
import { examples, type Example } from "./_lib/examples";
import { InstagramIcon, WhatsAppIcon } from "./_lib/icons";

const whyUs = [
  { title: "Sürətli Təhvil", desc: "Layihələr qısa müddətdə hazır olur." },
  { title: "Müasir Texnologiya", desc: "Next.js əsasında sürətli, etibarlı saytlar." },
  { title: "Mobil Uyğunluq", desc: "Bütün cihazlarda mükəmməl görünüş." },
  { title: "Münasib Qiymət", desc: "Keyfiyyət və büdcə arasında ən yaxşı balans." },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-950 text-zinc-100">
      <Header />

      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          {AGENCY_NAME}
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#xidmetler" className="hover:text-white">
            Nümunələr
          </a>
          <a href="#elaqe" className="hover:text-white">
            Əlaqə
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.10),transparent_55%)]"
        aria-hidden
      />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Biznesinizi{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Onlayn Dünyaya
            </span>{" "}
            Daşıyın!
          </h1>
          <p className="mt-5 max-w-md text-lg text-zinc-400">
            Xüsusi dizayn, sürətli təhvil və SEO dəstəyi ilə satış gətirən veb saytlar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ilə Əlaqə
          </a>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-2xl backdrop-blur">
          <h2 className="mb-4 text-sm font-semibold text-zinc-300">Nümunələr</h2>
          <div className="flex flex-col gap-3">
            {examples.slice(0, 3).map((ex) => (
              <ExampleCard key={ex.slug} example={ex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleCard({ example }: { example: Example }) {
  return (
    <Link
      href={`/demo/${example.slug}`}
      className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 transition-colors hover:border-amber-500/50 hover:bg-zinc-900"
    >
      <div className="relative shrink-0">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${example.color} text-white`}
        >
          <example.icon className="h-6 w-6" />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-amber-400">
          <example.badge className="h-3 w-3" />
        </div>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">{example.name}</p>
        <p className="truncate text-xs text-zinc-400">{example.desc}</p>
      </div>
    </Link>
  );
}

function ExampleCoverCard({ example }: { example: Example }) {
  return (
    <Link
      href={`/demo/${example.slug}`}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10"
    >
      <div
        className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${example.color}`}
      >
        {/* glossy highlight for a pseudo-3D sheen */}
        <div
          className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-white/25 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,0,0,0.35),transparent_60%)]"
          aria-hidden
        />
        <example.icon className="h-16 w-16 text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-zinc-950/70 text-amber-400 backdrop-blur">
          <example.badge className="h-4 w-4" />
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-white">{example.name}</p>
        <p className="mt-1 text-sm text-zinc-400">{example.desc}</p>
        <span className="mt-3 inline-block text-xs font-medium text-amber-400">
          Demoya bax →
        </span>
      </div>
    </Link>
  );
}

function Services() {
  return (
    <section id="xidmetler" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Nümunə Saytlar
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-500">
        Kartlara klikləyin, hər nümunənin canlı demosuna baxın.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((ex) => (
          <ExampleCoverCard key={ex.slug} example={ex} />
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-900/40 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Hazırladığım Saytlar
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-zinc-800 text-zinc-600"
            >
              <FolderIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Tezliklə əlavə olunacaq</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w) => (
          <div key={w.title} className="text-center sm:text-left">
            <h3 className="font-semibold text-white">{w.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="elaqe" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15),transparent_60%)]"
          aria-hidden
        />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Layihənizi müzakirə edək
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          WhatsApp üzərindən yazın, ən qısa zamanda cavab verəcəm.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ilə yazın
          </a>

          <span
            className="flex cursor-not-allowed items-center gap-2 rounded-full border border-zinc-700 px-7 py-3 font-semibold text-zinc-500"
            title="Instagram profili tezliklə əlavə olunacaq"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
            <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs">tezliklə</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {AGENCY_NAME}. Bütün hüquqlar qorunur.
        </span>
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <span
            className="cursor-not-allowed text-zinc-700"
            aria-label="Instagram (tezliklə)"
            title="Instagram profili tezliklə əlavə olunacaq"
          >
            <InstagramIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə əlaqə"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-zinc-950 shadow-lg shadow-amber-500/30 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
