import { FloatingWhatsApp } from "./_lib/FloatingWhatsApp";
import { HomeClient } from "./_lib/HomeClient";
import { MeshBackground } from "./_lib/MeshBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#030712] text-white">
      <MeshBackground />
      <HomeClient />
      <FloatingWhatsApp />
    </div>
  );
}
