import dynamic from "next/dynamic";
import { FloatingWhatsApp } from "./_lib/FloatingWhatsApp";
import { HeroSection, TopBar } from "./_lib/HomeClient";

const BelowFold = dynamic(() =>
  import("./_lib/BelowFold").then((m) => m.BelowFold)
);
const Footer = dynamic(() => import("./_lib/BelowFold").then((m) => m.Footer));

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-ink text-paper">
      <TopBar />
      <main>
        <HeroSection />
        <BelowFold />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
