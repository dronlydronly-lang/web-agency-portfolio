import { WHATSAPP_URL } from "./constants";
import { WhatsAppIcon } from "./icons";

export function DemoCTA() {
  return (
    <section className="bg-zinc-950 px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Bu cür sayt sizə də lazımdır?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-zinc-400">
        Bu, WebUsta tərəfindən hazırlanmış nümunə saytdır. Öz biznesiniz üçün buna
        bənzər bir sayt sifariş etmək istəyirsinizsə, yazın.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp ilə yazın
      </a>
    </section>
  );
}
