export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-[#ff8a00]/10 blur-3xl" />
      <div className="absolute right-[10%] top-48 h-80 w-80 rounded-full bg-[#a855f7]/14 blur-3xl" />
      <div className="absolute bottom-10 left-[42%] h-72 w-72 rounded-full bg-[#00c2ff]/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
