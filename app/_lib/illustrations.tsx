// Bespoke line-art marks, one per demo vertical. Built as small scenes
// (multiple related shapes) rather than a single glyph, so panels that
// would otherwise sit empty read as deliberately illustrated instead of
// borrowed stock photography or a generic icon-in-a-box.

export function CoffeeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        d="M62 88h68v46a24 24 0 0 1-24 24H86a24 24 0 0 1-24-24V88Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M130 96h10a14 14 0 0 1 0 28h-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M52 158h96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M84 74c-4-8 4-10 2-18M100 74c-4-8 4-10 2-18M116 74c-4-8 4-10 2-18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="40" cy="120" r="5" fill="currentColor" opacity="0.35" />
      <circle cx="152" cy="140" r="4" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function BarberMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <rect x="86" y="40" width="24" height="110" rx="12" stroke="currentColor" strokeWidth="3" />
      <path
        d="M86 50 110 70M86 70 110 90M86 90 110 110M86 110 110 130"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <circle cx="98" cy="42" r="7" stroke="currentColor" strokeWidth="3" />
      <g transform="translate(30 118)">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="8" cy="30" r="7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 13 42 40M14 25 42 -2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <path
        d="M130 120h34M130 128h34M130 136h34M130 144h34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function BoutiqueMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        d="M100 52a10 10 0 0 1 10 10c0 4-3 7-6 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M100 70 54 100l14 12 10-8v58h44v-58l10 8 14-12-48-30Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="128" y="86" width="22" height="14" rx="2" transform="rotate(18 128 86)" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="140" cy="88" r="1.6" fill="currentColor" />
      <path d="M46 150h108" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function ArchitectureMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path d="M46 150V88l54-34 54 34v62" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 150h120" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M66 150V104h16v46M92 150v-30h16v30M118 150v-38h16v38"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <path d="M46 88 100 54l54 34" stroke="currentColor" strokeWidth="2.5" opacity="0.4" />
      <path d="M150 60 168 42M168 42h-14M168 42v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function CameraMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <rect x="44" y="76" width="112" height="80" rx="10" stroke="currentColor" strokeWidth="3" />
      <path d="M78 76 88 60h24l10 16" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="116" r="26" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="116" r="12" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
      <circle cx="136" cy="92" r="4" fill="currentColor" opacity="0.6" />
      <path
        d="M100 90a26 26 0 0 1 26 26M100 142a26 26 0 0 1-26-26"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.35"
      />
    </svg>
  );
}

export function DocMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        d="M100 66c-14-8-32-10-46-6v78c14-4 32-2 46 6 14-8 32-10 46-6V60c-14-4-32-2-46 6Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M100 66v78" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
      <path d="M64 78h24M64 92h24M64 106h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
      <path d="M112 78h24M112 92h24M112 106h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
