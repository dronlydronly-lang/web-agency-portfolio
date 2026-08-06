import type { Metadata } from "next";
import { PortfolioClient } from "../_lib/PortfolioClient";

export const metadata: Metadata = {
  title: "Nümunə Saytlar — WebmasterDeniz",
  description:
    "Restoran, gözəllik, pərakəndə satış, tikinti, yaradıcılıq və media sahələri üçün fərqli iş prinsipi ilə qurulmuş nümunə saytlar.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
