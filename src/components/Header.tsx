// src/components/Header.tsx
export default function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <h1>
        <span className="text-sm font-semibold tracking-widest uppercase text-indigo-400 block">
          ISM
        </span>
        <span className="text-lg font-bold text-white leading-tight block">
          Journey Map
        </span>
      </h1>
      <p className="text-sm text-slate-400 hidden md:block">
        A missional guide to seeing and loving international students
      </p>
    </header>
  );
}
