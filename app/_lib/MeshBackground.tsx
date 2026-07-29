export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="absolute right-[-10rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/5 blur-[160px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(3,7,18,0.6))]" />
    </div>
  );
}
