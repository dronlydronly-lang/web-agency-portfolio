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
  image: string;
  icon: ComponentType<{ className?: string }>;
  badge: ComponentType<{ className?: string }>;
};

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=800&q=75&auto=format&fit=crop`;
}

export const examples: Example[] = [
  {
    slug: "aroma-cafe",
    name: "Aroma Cafe",
    desc: "Restoran üçün rəqəmsal QR menyu sistemi.",
    color: "from-amber-700 to-orange-500",
    image: unsplash("1521017432531-fbd92d768814"),
    icon: CupIcon,
    badge: QrIcon,
  },
  {
    slug: "elit-berber",
    name: "Elit Berber Studio",
    desc: "Onlayn növbə götürmə və rezervasiya saytı.",
    color: "from-zinc-600 to-zinc-400",
    image: unsplash("1585747860715-2ba37e788b70"),
    icon: ScissorsIcon,
    badge: CalendarIcon,
  },
  {
    slug: "trend-butik",
    name: "Trend Butik",
    desc: "Tam funksional geyim onlayn mağazası.",
    color: "from-rose-700 to-pink-500",
    image: unsplash("1441984904996-e0b6ba687e04"),
    icon: BagIcon,
    badge: CartIcon,
  },
  {
    slug: "arxitekt-mmc",
    name: "Arxitekt MMC",
    desc: "Etibarlı və peşəkar korporativ imic saytı.",
    color: "from-sky-700 to-blue-500",
    image: unsplash("1487958449943-2429e8be8625"),
    icon: BuildingIcon,
    badge: CheckIcon,
  },
  {
    slug: "foto-studio",
    name: "Foto Studio",
    desc: "Yaradıcı işlərin vizual portfolio saytı.",
    color: "from-violet-700 to-fuchsia-500",
    image: unsplash("1516035069371-29a1b244cc32"),
    icon: CameraIcon,
    badge: FolderIcon,
  },
  {
    slug: "gundem-bloq",
    name: "Gündəm Bloq",
    desc: "Sürətli və rahat idarə olunan bloq sayt.",
    color: "from-emerald-700 to-teal-500",
    image: unsplash("1518432031352-d6fc5c10da5a"),
    icon: DocIcon,
    badge: PenIcon,
  },
];

export const CREATOR_AVATAR = unsplash("1555066931-4365d14bab8c");
