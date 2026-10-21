import type { Project } from "@/data/site";

/** Original CSS-only cover art per project — no stock imagery. Shared by the project cards and the detail pages. */
export function ProjectCover({ p }: { p: Project }) {
  const art: Record<string, React.ReactNode> = {
    "Gohar AI": (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--mint)_0%,transparent_45%)] opacity-40" />
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="absolute left-0 right-0 h-px bg-mint/40" style={{ top: `${30 + i * 12}%`, transform: `rotate(${-6 + i * 3}deg)` }} />
        ))}
        <span className="absolute right-6 top-6 font-display text-6xl font-black text-mint/80">अ</span>
      </>
    ),
    "Smart Logistics & Accessibility Intelligence Platform": (
      <div className="absolute inset-8 grid grid-cols-3 grid-rows-3 gap-3">
        <div className="col-span-3 border-b border-lavender/40" />
        <div className="row-span-2 border-r border-mint/40" />
        <div className="col-span-2 row-span-2 grid place-items-center border border-border"><span className="font-display text-3xl text-lavender">NER ↗</span></div>
      </div>
    ),
    ResQ: (
      <div className="absolute inset-8 flex items-center justify-center gap-4"><span className="font-display text-6xl text-mint">+</span><span className="font-display text-4xl font-bold text-lavender">ResQ</span></div>
    ),
    LeetMetric: (
      <div className="absolute inset-x-6 bottom-6 flex h-2/3 items-end gap-2">
        {[30, 55, 40, 75, 60, 90, 70].map((h, i) => (
          <span key={i} className="flex-1 rounded-t-sm bg-lavender/60" style={{ height: `${h}%` }} />
        ))}
      </div>
    ),
    StudySync: (
      <>
        {[0, 1, 2].map((i) => (
          <span key={i} className="absolute h-2/3 w-1/2 rounded-md border border-lavender/50 bg-surface" style={{ left: `${18 + i * 10}%`, top: `${14 + i * 6}%`, transform: `rotate(${-8 + i * 7}deg)` }} />
        ))}
      </>
    ),
    "Mehfil-e-Zaiqa": (
      <>
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full border-[18px] border-mint/30" />
        <span className="absolute left-6 top-6 font-display text-5xl font-black italic text-lavender/80">Zaiqa</span>
      </>
    ),
    "Sabrina Fandom": (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--lavender)_0%,transparent_50%)] opacity-50" />
        <span className="absolute left-8 top-8 rotate-[-6deg] rounded-sm bg-foreground/90 px-2 py-1 font-display text-xs font-black text-background">FAN PAGE</span>
        <span className="absolute bottom-6 right-6 text-5xl text-lavender">✦</span>
      </>
    ),
  };
  const bg: Record<string, string> = {
    "Gohar AI": "bg-[linear-gradient(160deg,color-mix(in_oklab,var(--mint)_12%,var(--background)),var(--background))]",
    LeetMetric: "bg-[linear-gradient(0deg,color-mix(in_oklab,var(--lavender)_10%,var(--background)),var(--background))]",
    StudySync: "bg-[repeating-linear-gradient(0deg,transparent_0_23px,var(--border)_23px_24px)] bg-background",
    "Mehfil-e-Zaiqa": "bg-[radial-gradient(circle_at_80%_90%,color-mix(in_oklab,var(--mint)_10%,transparent),transparent_60%)] bg-background",
    "Sabrina Fandom": "bg-background",
  };
  return (
    <div aria-hidden className={`cover relative aspect-[16/10] md:max-h-[24rem] md:w-full overflow-hidden rounded-md border border-border ${bg[p.title] ?? "bg-background"}`}>
      <span className="tape -top-2 left-8 z-10 -rotate-6" />
      <span className="halftone absolute inset-0 opacity-10" />
      <div className="cover-art absolute inset-0 transition-transform duration-700 ease-out">{art[p.title]}</div>
      <span className="label-mono absolute bottom-3 left-3 text-muted-foreground">{p.no} / {p.category}</span>
    </div>
  );
}
