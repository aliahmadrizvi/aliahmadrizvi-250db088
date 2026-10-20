import { site } from "@/data/site";
import portrait from "@/assets/ali-portrait.png.asset.json";
import { Reveal, Section, SectionHeading } from "./ui";

const highlights = [
  { k: "A", t: "Software Engineering", d: "Strengthening fundamentals through C++ and Python DSA practice." },
  { k: "B", t: "Frontend, Data & AI", d: "Building web projects while exploring analytics and AI applications." },
  { k: "C", t: "Learning Together", d: "Collaborating at hackathons and turning ideas into practical prototypes." },
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
              <img src={portrait.url} alt="Portrait of Ali Ahmad Rizvi" loading="lazy" width={1060} height={1484} className="duotone aspect-[4/5] w-full object-cover object-top mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 via-transparent to-mint/10 mix-blend-color" aria-hidden />
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
              I'm working toward a future in <span className="text-lavender">software engineering</span> — one problem, project and collaboration at a time.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              As a B.Tech Computer Science and Engineering student at Integral University, Lucknow, I practice DSA using C++ and Python and build web projects to strengthen my programming fundamentals. My interests span frontend engineering, data analytics and AI.
            </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">Hackathons and project-based learning give me space to collaborate, prototype and learn from others. My next goal is a software development internship, with a long-term ambition to grow into an SDE role.</p>
            <p className="label-mono mt-6 text-mint">{site.pronouns} · {site.university}</p>
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
