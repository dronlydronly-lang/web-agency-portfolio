import Link from "next/link";
import { AGENCY_NAME } from "./constants";
import { ArrowLeftIcon } from "./icons";

export function DemoShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-ink-line bg-ink px-4 py-2.5 text-xs text-paper/84 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-medium text-paper/92 hover:text-paper"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          {AGENCY_NAME}
        </Link>
        <span className="rounded-full border border-ink-line px-3 py-1 font-medium text-gold">
          Nümunə / Demo Sayt
        </span>
      </header>
      <main>{children}</main>
    </div>
  );
}
