import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/site";
import { externalProps, safeUrl } from "@/lib/links";
import { Section, SectionHeading, Tag } from "./ui";

const filters: ("All" | ProjectCategory)[] = ["All", "Web Development", "AI"];

/** Original CSS-only cover art per project — no stock imagery. */
function Cover({ p }: { p: Project }) {
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

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects">
      <SectionHeading index="03" label="Selected Work" title="Things I'm" accent="building." />
      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`label-mono rounded-full border px-4 py-2 transition-colors ${filter === f ? "border-lavender bg-lavender text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{list.length} projects shown</p>

      <motion.ul layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p, i) => (
            <motion.li
              key={p.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 && list.length > 1 ? "md:col-span-2" : ""}
            >
              <article className="project-card group h-full rounded-lg border border-border bg-surface p-4 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-lavender/40 hover:shadow-glow focus-within:border-lavender/40 sm:p-5">
                <Cover p={p} />
                <div className="mt-6 px-1 pb-2">
                  <p className="label-mono mb-2 text-muted-foreground"><span className="text-mint">{p.no}</span> · {p.tagline}</p>
                  <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-lavender sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  {(safeUrl(p.github) || safeUrl(p.demo)) && (
                    <div className="mt-5 flex gap-3">
                      {safeUrl(p.github) && <a href={safeUrl(p.github)!} {...externalProps} aria-label={`${p.title} on GitHub (opens in a new tab)`} className="label-mono inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 hover:border-mint hover:text-mint"><Github size={14} /> GitHub</a>}
                      {safeUrl(p.demo) && <a href={safeUrl(p.demo)!} {...externalProps} aria-label={`${p.title} live demo (opens in a new tab)`} className="label-mono inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 hover:border-mint hover:text-mint">Live Demo <ArrowUpRight size={14} /></a>}
                    </div>
                  )}
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
