export default function KeyboardHints() {
  return (
    <div className="hidden lg:flex items-center gap-4 text-[10px] text-slate-600">
      <span className="flex items-center gap-1.5">
        <kbd className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-slate-500">
          ←
        </kbd>
        <kbd className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-slate-500">
          →
        </kbd>
        <span>stages</span>
      </span>
      <span className="flex items-center gap-1.5">
        <kbd className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-slate-500">
          ↑
        </kbd>
        <kbd className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-slate-500">
          ↓
        </kbd>
        <span>backgrounds</span>
      </span>
      <span className="flex items-center gap-1.5">
        <kbd className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-slate-500">
          ⌘K
        </kbd>
        <span>search</span>
      </span>
    </div>
  );
}
