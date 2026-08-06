import dynamic from "next/dynamic";
import { FloatingWhatsApp } from "./_lib/FloatingWhatsApp";
import { HomeClient } from "./_lib/HomeClient";

const BelowFold = dynamic(() =>
  import("./_lib/BelowFold").then((m) => m.BelowFold)
);

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-ink text-paper">
      <HomeClient />
      <BelowFold />
      <FloatingWhatsApp />
    </div>
  );
}
