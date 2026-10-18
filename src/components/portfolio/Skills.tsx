import { skillGroups } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./ui";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="02" label="Skills & Stack" title="Tools I" accent="think with." />
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06} className="h-full">
            <div className="group relative h-full overflow-hidden bg-background p-7 transition-colors duration-500 hover:bg-surface md:p-10">
              <span aria-hidden className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-black text-outline opacity-40 transition-opacity group-hover:opacity-80">{g.no}</span>
              <p className="label-mono text-mint">{g.no} /</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase">{g.title}</h3>
              <ul className="mt-8 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lavender hover:text-lavender">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
