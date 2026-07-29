export const translations = {
  az: {
    nav: { examples: "Nümunələr", contact: "Əlaqə" },
    header: { whatsapp: "WhatsApp" },
    hero: {
      badge1: "⚡ 99+ PageSpeed",
      badge2: "🔒 Enterprise Secure",
      titleStart: "Biznesinizi",
      titleHighlight: "onlayn dünyaya",
      titleEnd: "daşıyın!",
      subtitle: "Sürətli təhvil. Peşəkar addımlar, tam güvən.",
      cta: "WhatsApp ilə Əlaqə",
    },
    showcase: { title: "Canlı Nümunələr" },
    creator: {
      name: "Dəniz",
      tagline: "İstəyə uyğun hər növ veb-saytlar peşəkarlıqla hazırlanır.",
    },
    services: {
      title: "Nümunə Saytlar",
      subtitle: "Kartlara klikləyin, hər nümunənin canlı demosuna baxın.",
      cta: "Demoya bax →",
    },
    examples: {
      "aroma-cafe": "Restoran üçün rəqəmsal QR menyu sistemi.",
      "elit-berber": "Onlayn növbə götürmə və rezervasiya saytı.",
      "trend-butik": "Tam funksional geyim onlayn mağazası.",
      "arxitekt-mmc": "Etibarlı və peşəkar korporativ imic saytı.",
      "foto-studio": "Yaradıcı işlərin vizual portfolio saytı.",
      "gundem-bloq": "Sürətli və rahat idarə olunan bloq sayt.",
    },
    whyUs: [
      { title: "Sürətli Təhvil", desc: "Layihələr qısa müddətdə hazır olur." },
      {
        title: "Müasir Texnologiya",
        desc: "Next.js əsasında sürətli, etibarlı saytlar.",
      },
      { title: "Mobil Uyğunluq", desc: "Bütün cihazlarda mükəmməl görünüş." },
      {
        title: "Münasib Qiymət",
        desc: "Keyfiyyət və büdcə arasında ən yaxşı balans.",
      },
    ],
    contact: {
      title: "Layihənizi müzakirə edək",
      subtitle: "WhatsApp üzərindən yazın, ən qısa zamanda cavab verəcəm.",
      whatsapp: "WhatsApp ilə yazın",
      instagram: "Instagram",
    },
    footer: { rights: "Bütün hüquqlar qorunur." },
  },
  en: {
    nav: { examples: "Examples", contact: "Contact" },
    header: { whatsapp: "WhatsApp" },
    hero: {
      badge1: "⚡ 99+ PageSpeed",
      badge2: "🔒 Enterprise Secure",
      titleStart: "Take",
      titleRest: "your business into the online world!",
      subtitle: "Fast delivery. Professional steps, complete trust.",
      cta: "Contact via WhatsApp",
    },
    showcase: { title: "Live Examples" },
    creator: {
      name: "Dəniz",
      tagline: "Any type of website you need, built professionally.",
    },
    services: {
      title: "Example Websites",
      subtitle: "Click a card to see each example's live demo.",
      cta: "View demo →",
    },
    examples: {
      "aroma-cafe": "Digital QR menu system for restaurants.",
      "elit-berber": "Online booking and reservation website.",
      "trend-butik": "Fully functional online clothing store.",
      "arxitekt-mmc": "Reliable and professional corporate image website.",
      "foto-studio": "Visual portfolio website for creative work.",
      "gundem-bloq": "Fast and easily managed blog website.",
    },
    whyUs: [
      { title: "Fast Delivery", desc: "Projects are completed in a short time." },
      {
        title: "Modern Technology",
        desc: "Fast, reliable websites built on Next.js.",
      },
      { title: "Mobile Friendly", desc: "Looks perfect on every device." },
      {
        title: "Affordable Pricing",
        desc: "The best balance between quality and budget.",
      },
    ],
    contact: {
      title: "Let's discuss your project",
      subtitle: "Message me on WhatsApp, I'll reply as soon as possible.",
      whatsapp: "Message on WhatsApp",
      instagram: "Instagram",
    },
    footer: { rights: "All rights reserved." },
  },
} as const;

export type Dict = (typeof translations)["az"];
