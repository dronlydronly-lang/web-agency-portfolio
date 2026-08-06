import {
  BagIcon,
  BuildingIcon,
  CameraIcon,
  CupIcon,
  DocIcon,
  ScissorsIcon,
} from "./icons";
import type { ComponentType } from "react";

export type Example = {
  slug: string;
  name: string;
  category: string;
  desc: string;
  principle: string;
  stats: [string, string];
  color: string;
  accent: string;
  icon: ComponentType<{ className?: string }>;
};

export const examples: Example[] = [
  {
    slug: "aroma-cafe",
    name: "Aroma Cafe",
    category: "Restoran",
    desc: "Restoran üçün rəqəmsal QR menyu sistemi.",
    principle: "Masadan sifariş, mətbəx izləməsi",
    stats: ["Masa nömrəsi ilə sifariş", "Canlı sifariş statusu"],
    color: "from-amber-700 to-orange-500",
    accent: "#f59e0b",
    icon: CupIcon,
  },
  {
    slug: "elit-berber",
    name: "Elit Berber Studio",
    category: "Gözəllik",
    desc: "Onlayn növbə götürmə və rezervasiya saytı.",
    principle: "Addım-addım növbə sistemi",
    stats: ["Usta seçimi", "Həftəlik təqvim zolağı"],
    color: "from-zinc-600 to-zinc-400",
    accent: "#a1a1aa",
    icon: ScissorsIcon,
  },
  {
    slug: "trend-butik",
    name: "Trend Butik",
    category: "Pərakəndə satış",
    desc: "Tam funksional geyim onlayn mağazası.",
    principle: "Filtr, sürətli baxış və səbət paneli",
    stats: ["Kateqoriya filtri", "Sürüşən səbət paneli"],
    color: "from-rose-700 to-pink-500",
    accent: "#f43f5e",
    icon: BagIcon,
  },
  {
    slug: "arxitekt-mmc",
    name: "Arxitekt MMC",
    category: "Tikinti & Arxitektura",
    desc: "Etibarlı və peşəkar korporativ imic saytı.",
    principle: "Layihə kataloqu və sorğu forması",
    stats: ["Kateqoriyalı layihə arxivi", "Ətraflı sorğu forması"],
    color: "from-sky-700 to-blue-500",
    accent: "#3b82f6",
    icon: BuildingIcon,
  },
  {
    slug: "foto-studio",
    name: "Foto Studio",
    category: "Yaradıcılıq",
    desc: "Yaradıcı işlərin vizual portfolio saytı.",
    principle: "Qalereya, lightbox və paket seçimi",
    stats: ["Klaviatura ilə lightbox naviqasiyası", "Paket müqayisəsi"],
    color: "from-violet-700 to-fuchsia-500",
    accent: "#d946ef",
    icon: CameraIcon,
  },
  {
    slug: "gundem-bloq",
    name: "Gündəm Bloq",
    category: "Media",
    desc: "Sürətli və rahat idarə olunan bloq sayt.",
    principle: "Kateqoriyalı oxuma rejimi",
    stats: ["Oxuma irəliləyiş zolağı", "Əlaqəli məqalələr"],
    color: "from-emerald-700 to-teal-500",
    accent: "#10b981",
    icon: DocIcon,
  },
];
