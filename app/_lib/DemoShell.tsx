import Link from "next/link";
import { AGENCY_NAME } from "./constants";
import { ArrowLeftIcon } from "./icons";

export function DemoShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <div className="sticky top-0 z-50 flex items-center justify-between gap-3 bg-zinc-950 px-4 py-2.5 text-xs text-zinc-400 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-medium text-zinc-300 hover:text-white"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          {AGENCY_NAME}
        </Link>
        <span className="rounded-full bg-zinc-800 px-3 py-1 font-medium text-amber-400">
          Nümunə / Demo Sayt
        </span>
      </div>
      {children}
    </div>
  );
}
