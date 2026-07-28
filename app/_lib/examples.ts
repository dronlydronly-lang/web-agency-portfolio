import {
  BagIcon,
  BuildingIcon,
  CalendarIcon,
  CameraIcon,
  CartIcon,
  CheckIcon,
  CupIcon,
  DocIcon,
  FolderIcon,
  PenIcon,
  QrIcon,
  ScissorsIcon,
} from "./icons";
import type { ComponentType } from "react";

export type Example = {
  slug: string;
  name: string;
  desc: string;
  color: string;
  icon: ComponentType<{ className?: string }>;
  badge: ComponentType<{ className?: string }>;
};

export const examples: Example[] = [
  {
    slug: "aroma-cafe",
    name: "Aroma Cafe",
    desc: "Restoran üçün rəqəmsal QR menyu sistemi.",
    color: "from-amber-700 to-orange-500",
    icon: CupIcon,
    badge: QrIcon,
  },
  {
    slug: "elit-berber",
    name: "Elit Berber Studio",
    desc: "Onlayn növbə götürmə və rezervasiya saytı.",
    color: "from-zinc-600 to-zinc-400",
    icon: ScissorsIcon,
    badge: CalendarIcon,
  },
  {
    slug: "trend-butik",
    name: "Trend Butik",
    desc: "Tam funksional geyim onlayn mağazası.",
    color: "from-rose-700 to-pink-500",
    icon: BagIcon,
    badge: CartIcon,
  },
  {
    slug: "arxitekt-mmc",
    name: "Arxitekt MMC",
    desc: "Etibarlı və peşəkar korporativ imic saytı.",
    color: "from-sky-700 to-blue-500",
    icon: BuildingIcon,
    badge: CheckIcon,
  },
  {
    slug: "foto-studio",
    name: "Foto Studio",
    desc: "Yaradıcı işlərin vizual portfolio saytı.",
    color: "from-violet-700 to-fuchsia-500",
    icon: CameraIcon,
    badge: FolderIcon,
  },
  {
    slug: "gundem-bloq",
    name: "Gündəm Bloq",
    desc: "Sürətli və rahat idarə olunan bloq sayt.",
    color: "from-emerald-700 to-teal-500",
    icon: DocIcon,
    badge: PenIcon,
  },
];
