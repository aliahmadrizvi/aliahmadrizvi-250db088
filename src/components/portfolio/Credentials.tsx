import { ArrowUpRight, GraduationCap } from "lucide-react";
import { certificates, milestones } from "@/data/site";
import { externalProps, safeUrl } from "@/lib/links";
import { Reveal, Section, SectionHeading } from "./ui";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="04" label="Education" title="Currently" accent="studying." />
      <Reveal>
        <div className="relative overflow-hidden rounded-md border border-border bg-surface p-8 md:p-14">
          <div aria-hidden className="glow-orb absolute -bottom-40 -left-20 h-80 w-80 opacity-40" />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <GraduationCap className="text-lavender" size={40} aria-hidden />
            <div>
              <p className="label-mono text-mint">Undergraduate · In progress</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase sm:text-3xl md:text-4xl">B.Tech — Computer Science and Engineering</h3>
              <p className="mt-2 text-muted-foreground">Integral University, Lucknow, Uttar Pradesh, India</p>
            </div>
            <span className="label-mono self-start rounded-full border border-mint/40 px-3 py-1 text-mint md:self-center">Current</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeading index="05" label="Certificates & Learning" title="Proof of" accent="practice." />
      <div className="grid gap-5 md:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className={`group flex h-full flex-col justify-between rounded-md border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lavender/50 hover:shadow-glow ${i === 1 ? "md:mt-10" : ""}`}>
              <div>
                <div className="flex items-center justify-between">
                  <span className="label-mono text-muted-foreground">{c.issuer}</span>
                  <span className="label-mono text-mint">0{i + 1}</span>
                </div>
                <h3 className="mt-10 font-display text-xl font-bold leading-tight">{c.title}</h3>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-dashed border-border pt-4">
                <span className="label-mono text-muted-foreground">{c.status}</span>
                {safeUrl(c.url) && <a href={safeUrl(c.url)!} {...externalProps} aria-label={`View ${c.title} credential (opens in a new tab)`} className="text-lavender"><ArrowUpRight size={18} /></a>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="milestones">
      <SectionHeading index="06" label="Milestones" title="Along the" accent="way." />
      <ol className="relative border-l border-border pl-8 md:ml-[30%]">
        {milestones.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.08}>
            <li className="relative pb-12 last:pb-0">
              <span aria-hidden className="absolute -left-[2.3rem] top-2 h-3 w-3 rounded-full border-2 border-mint bg-background" />
              <p className="label-mono text-muted-foreground">Ongoing · 0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase md:text-3xl">{m.title}</h3>
              <p className="mt-2 max-w-md text-muted-foreground">{m.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
