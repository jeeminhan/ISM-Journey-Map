// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
      <Link href="/" className="group">
        <span className="text-[10px] sm:text-sm font-semibold tracking-widest uppercase text-indigo-400 block transition-colors group-hover:text-indigo-300">
          ISM
        </span>
        <span className="text-base sm:text-lg font-bold text-white leading-tight block transition-colors group-hover:text-slate-200">
          Journey Map
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <p className="text-sm text-slate-400 hidden lg:block">
          A missional guide to seeing and loving international students
        </p>
      </div>
    </header>
  );
}
