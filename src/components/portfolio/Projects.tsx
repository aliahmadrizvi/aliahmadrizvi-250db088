import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/site";
import { Section, SectionHeading, Tag } from "./ui";

const filters: ("All" | ProjectCategory)[] = ["All", "Web Development", "AI"];

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

      <ul className="border-t border-border">
        <AnimatePresence initial={false}>
          {list.map((p, i) => (
            <motion.li
              key={p.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative border-b border-border"
            >
              <article className={`grid gap-6 py-10 md:grid-cols-12 md:items-center md:py-14 ${i % 2 ? "md:text-right" : ""}`}>
                <span className={`label-mono text-mint md:col-span-1 ${i % 2 ? "md:order-3" : ""}`}>{p.no}</span>
                <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <p className="label-mono mb-3 text-muted-foreground">{p.category} · {p.tagline}</p>
                  <h3 className="font-display text-4xl font-black uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-lavender sm:text-5xl lg:text-6xl">
                    {p.title}
                  </h3>
                </div>
                <div className={`md:col-span-4 ${i % 2 ? "md:order-1 md:text-left" : ""}`}>
                  <p className="leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  {(p.github || p.demo) && (
                    <div className="mt-5 flex gap-4">
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="label-mono inline-flex items-center gap-1 hover:text-mint"><Github size={14} /> GitHub</a>}
                      {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="label-mono inline-flex items-center gap-1 hover:text-mint">Live Demo <ArrowUpRight size={14} /></a>}
                    </div>
                  )}
                </div>
              </article>
              <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-lavender transition-transform duration-500 group-hover:scale-x-100" />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Section>
  );
}
