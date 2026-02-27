// src/components/Header.tsx
export default function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div>
        <span className="text-sm font-semibold tracking-widest uppercase text-indigo-400">
          ISM
        </span>
        <h1 className="text-lg font-bold text-white leading-tight">
          Journey Map
        </h1>
      </div>
      <p className="text-sm text-slate-400 hidden md:block">
        A missional guide to seeing and loving international students
      </p>
    </header>
  );
}
