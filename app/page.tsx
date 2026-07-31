import dynamic from "next/dynamic";
import { FloatingWhatsApp } from "./_lib/FloatingWhatsApp";
import { HomeClient } from "./_lib/HomeClient";
import { MeshBackground } from "./_lib/MeshBackground";

const BelowFold = dynamic(() =>
  import("./_lib/BelowFold").then((m) => m.BelowFold)
);

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#030712] text-white">
      <MeshBackground />
      <HomeClient />
      <BelowFold />
      <FloatingWhatsApp />
    </div>
  );
}
