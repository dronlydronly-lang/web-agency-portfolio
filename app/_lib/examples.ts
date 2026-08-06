import {
  BagIcon,
  BuildingIcon,
  CameraIcon,
  CupIcon,
  DocIcon,
  ScissorsIcon,
} from "./icons";
import {
  ArchitectureMark,
  BarberMark,
  BoutiqueMark,
  CameraMark,
  CoffeeMark,
  DocMark,
} from "./illustrations";
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
  illustration: ComponentType<{ className?: string }>;
};

// A muted, earthy accent per project — deliberately desaturated so each
// panel reads as "one considered color" rather than a saturated Tailwind
// default sitting next to the terracotta/pine brand palette.
export const examples: Example[] = [
  {
    slug: "aroma-cafe",
    name: "Aroma Cafe",
    category: "Restoran",
    desc: "Restoran üçün rəqəmsal QR menyu sistemi.",
    principle: "Masadan sifariş, mətbəx izləməsi",
    stats: ["Masa nömrəsi ilə sifariş", "Canlı sifariş statusu"],
    color: "from-amber-900 to-orange-800",
    accent: "#b4652e",
    icon: CupIcon,
    illustration: CoffeeMark,
  },
  {
    slug: "elit-berber",
    name: "Elit Berber Studio",
    category: "Gözəllik",
    desc: "Onlayn növbə götürmə və rezervasiya saytı.",
    principle: "Addım-addım növbə sistemi",
    stats: ["Usta seçimi", "Həftəlik təqvim zolağı"],
    color: "from-stone-700 to-stone-500",
    accent: "#8c8478",
    icon: ScissorsIcon,
    illustration: BarberMark,
  },
  {
    slug: "trend-butik",
    name: "Trend Butik",
    category: "Pərakəndə satış",
    desc: "Tam funksional geyim onlayn mağazası.",
    principle: "Filtr, sürətli baxış və səbət paneli",
    stats: ["Kateqoriya filtri", "Sürüşən səbət paneli"],
    color: "from-rose-950 to-rose-800",
    accent: "#a34a5b",
    icon: BagIcon,
    illustration: BoutiqueMark,
  },
  {
    slug: "arxitekt-mmc",
    name: "Arxitekt MMC",
    category: "Tikinti & Arxitektura",
    desc: "Etibarlı və peşəkar korporativ imic saytı.",
    principle: "Layihə kataloqu və sorğu forması",
    stats: ["Kateqoriyalı layihə arxivi", "Ətraflı sorğu forması"],
    color: "from-slate-800 to-blue-900",
    accent: "#3b5b7a",
    icon: BuildingIcon,
    illustration: ArchitectureMark,
  },
  {
    slug: "foto-studio",
    name: "Foto Studio",
    category: "Yaradıcılıq",
    desc: "Yaradıcı işlərin vizual portfolio saytı.",
    principle: "Qalereya, lightbox və paket seçimi",
    stats: ["Klaviatura ilə lightbox naviqasiyası", "Paket müqayisəsi"],
    color: "from-purple-950 to-fuchsia-900",
    accent: "#8b4b8f",
    icon: CameraIcon,
    illustration: CameraMark,
  },
  {
    slug: "gundem-bloq",
    name: "Gündəm Bloq",
    category: "Media",
    desc: "Sürətli və rahat idarə olunan bloq sayt.",
    principle: "Kateqoriyalı oxuma rejimi",
    stats: ["Oxuma irəliləyiş zolağı", "Əlaqəli məqalələr"],
    color: "from-emerald-950 to-teal-900",
    accent: "#3f6b52",
    icon: DocIcon,
    illustration: DocMark,
  },
];
