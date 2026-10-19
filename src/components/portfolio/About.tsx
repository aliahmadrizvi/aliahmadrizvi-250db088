import { Reveal, Section, SectionHeading } from "./ui";

const highlights = [
  { k: "A", t: "Computer Science", d: "Building strong programming fundamentals." },
  { k: "B", t: "Development and Data/AI", d: "Exploring web, data analysis and applied AI." },
  { k: "C", t: "Learning by Building", d: "Turning concepts into small, real projects." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" label="About" title="Curious," accent="by design." />
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm md:mx-0">
          <figure className="relative -rotate-2 bg-foreground/95 p-3 pb-12 shadow-2xl transition-transform duration-700 hover:rotate-0">
            <span aria-hidden className="tape -left-6 top-4 -rotate-[35deg]" />
            <span aria-hidden className="tape -right-6 bottom-16 -rotate-[35deg]" />
            <div className="relative overflow-hidden bg-background">
              <img src="/ali-portrait.jpeg" alt="Portrait of Ali Ahmad Rizvi" loading="lazy" width={1060} height={1484} className="aspect-[4/5] w-full object-cover object-top" />
            </div>
            <figcaption className="label-mono absolute bottom-4 left-4 right-4 flex justify-between text-background">
              <span>Ali A. Rizvi</span><span>LKO · 2026</span>
            </figcaption>
          </figure>
          <span className="label-mono absolute -right-3 -top-5 rotate-6 rounded-sm bg-mint px-2 py-1 text-accent-foreground">student</span>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">
              I'm developing my programming fundamentals while exploring <span className="text-lavender">software development</span>, web design, data analysis and AI.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              As a B.Tech CSE student, I learn best by making things — small websites, practice problems and early concepts that help me understand how technology can be more useful and more human.
            </p>
          </Reveal>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {highlights.map((h, i) => (
              <Reveal key={h.t} delay={i * 0.08}>
                <li className="group flex items-baseline gap-5 py-5">
                  <span className="label-mono text-mint">{h.k}</span>
                  <div>
                    <p className="font-display text-lg font-bold transition-colors group-hover:text-lavender">{h.t}</p>
                    <p className="text-sm text-muted-foreground">{h.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
