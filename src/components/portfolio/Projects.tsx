import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/site";
import { Button as ControlButton } from "@/components/ui/button";
import { Button } from "./Button";
import { ProjectCover } from "./ProjectCover";
import { useMotionSettings } from "./motion";
import { safeUrl } from "@/lib/links";
import { Section, SectionHeading, Tag } from "./ui";

const filters: ("All" | ProjectCategory)[] = ["All", "Web Development", "AI"];

export function Projects() {
  const { enabled } = useMotionSettings();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects">
      <SectionHeading index="03" label="Featured Projects" title="Things I'm" accent="building." />
      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <ControlButton
            key={f}
            type="button"
            variant="outline"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`label-mono rounded-full border px-4 py-2 transition-colors ${filter === f ? "border-lavender bg-lavender text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            {f}
          </ControlButton>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{list.length} projects shown</p>

      <motion.ul layout={enabled} className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p, i) => (
            <motion.li
              key={p.title}
              layout={enabled}
              initial={enabled ? { opacity: 0, y: 24 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              exit={enabled ? { opacity: 0, scale: 0.96 } : { opacity: 1 }}
              transition={{ duration: enabled ? 0.6 : 0, delay: enabled ? (i % 2) * 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 && list.length > 1 ? "md:col-span-2" : ""}
            >
              <article className="project-card group h-full rounded-lg border border-border bg-surface p-4 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-lavender/40 hover:shadow-glow focus-within:border-lavender/40 sm:p-5">
                <ProjectCover p={p} />
                <div className="mt-6 px-1 pb-2">
                  <p className="label-mono mb-2 text-muted-foreground"><span className="text-mint">{p.no}</span> · {p.tagline}</p>
                  <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="transition-colors duration-300 group-hover:text-lavender"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="label-mono inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-3 transition-colors duration-300 hover:border-lavender hover:text-lavender"
                    >
                      View details <ArrowUpRight size={14} />
                    </Link>
                    {safeUrl(p.github) && <Button href={safeUrl(p.github)} variant="ghost" external><Github size={14} /> Source Code</Button>}
                    {safeUrl(p.demo) && <Button href={safeUrl(p.demo)} variant="ghost" external>Live Demo <ArrowUpRight size={14} /></Button>}
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
