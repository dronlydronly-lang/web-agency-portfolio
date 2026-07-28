import type { Metadata } from "next";
import { DemoCTA } from "@/app/_lib/DemoCTA";
import { DemoShell } from "@/app/_lib/DemoShell";
import { CameraIcon } from "@/app/_lib/icons";

export const metadata: Metadata = {
  title: "Foto Studio — Nümunə Sayt | WebUsta",
};

const gallery = [
  { color: "from-violet-700 to-fuchsia-500", h: "h-56" },
  { color: "from-fuchsia-700 to-pink-500", h: "h-40" },
  { color: "from-violet-600 to-indigo-500", h: "h-64" },
  { color: "from-indigo-700 to-violet-500", h: "h-40" },
  { color: "from-pink-700 to-fuchsia-500", h: "h-56" },
  { color: "from-violet-800 to-purple-500", h: "h-40" },
];

const services = ["Toy Fotoqrafiyası", "Portret Çəkilişi", "Məhsul Fotoqrafiyası"];

export default function FotoStudio() {
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-400">
            {services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-white">Qalereya</h2>
          <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`break-inside-avoid rounded-2xl bg-gradient-to-br ${g.color} ${g.h}`}
              />
            ))}
          </div>
        </section>

        <DemoCTA />
      </div>
    </DemoShell>
  );
}
