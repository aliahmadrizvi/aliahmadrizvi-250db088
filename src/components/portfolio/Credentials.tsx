import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { certificates, experience, hackathons } from "@/data/site";
import { safeUrl } from "@/lib/links";
import { Button } from "./Button";
import { Reveal, Section, SectionHeading } from "./ui";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="04" label="Experience" title="Learning by" accent="doing." />
      <Reveal>
        <div className="grid gap-8 border-y border-border py-8 md:grid-cols-[0.8fr_1.2fr] md:py-12">
          <div>
            <BriefcaseBusiness size={28} className="mb-6 text-lavender" aria-hidden />
            <p className="label-mono text-mint">{experience.period}</p>
            <h3 className="mt-3 font-display text-2xl font-bold">{experience.role}</h3>
            <p className="mt-3 text-muted-foreground">{experience.type} · Independent learning & project development</p>
            <p className="mt-2 text-sm text-muted-foreground">{experience.location}</p>
          </div>
          <ul className="space-y-4">
            {experience.activities.map((activity) => <li key={activity} className="flex gap-3 leading-relaxed text-muted-foreground"><span className="text-mint" aria-hidden>↗</span>{activity}</li>)}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="hackathons">
      <SectionHeading index="05" label="Hackathons & Achievements" title="Built" accent="together." />
      <ol className="border-l border-border pl-6 md:ml-[15%] md:pl-10">
        {hackathons.map((event, i) => (
          <Reveal key={event.event} delay={i * 0.06}>
            <li className="relative pb-12 last:pb-0">
              <span aria-hidden className="absolute -left-[1.8rem] top-1 h-3 w-3 rounded-full border-2 border-mint bg-background md:-left-[2.8rem]" />
              <p className="label-mono leading-relaxed text-mint">{event.event}</p>
              <h3 className="mt-3 max-w-3xl font-display text-2xl font-bold leading-snug md:text-3xl">{event.project}</h3>
              <p className="mt-3 text-sm text-lavender">{event.contribution}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{event.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="06" label="Education" title="Strong" accent="foundations." />
      <Reveal>
        <div className="grid gap-6 border-y border-border py-8 md:grid-cols-[auto_1fr] md:gap-10 md:py-12">
          <GraduationCap className="text-lavender" size={40} aria-hidden />
          <div>
            <p className="label-mono text-mint">Undergraduate · In progress</p>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Bachelor of Technology (B.Tech)</h3>
            <p className="mt-3 text-lg">Computer Science and Engineering (CSE Core)</p>
            <p className="mt-3 text-muted-foreground">Integral University, Lucknow, Uttar Pradesh, India</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeading index="07" label="Certificates" title="Continued" accent="learning." />
      <div className="grid gap-5 md:grid-cols-3">
        {certificates.map((credential, i) => {
          const href = safeUrl(credential.url);
          return (
            <Reveal key={credential.title} delay={i * 0.06}>
              <article className="flex h-full flex-col justify-between rounded-md border border-border bg-surface p-7 transition-colors hover:border-lavender/50">
                <div>
                  <p className="label-mono text-mint">{credential.issuer}</p>
                  <h3 className="mt-6 font-display text-xl font-bold leading-snug">{credential.title}</h3>
                </div>
                <div className="mt-8 border-t border-border pt-4">
                  <p className="label-mono text-muted-foreground">{credential.status}</p>
                  {href && <div className="mt-4"><Button href={href} variant="ghost" external>View Credential</Button></div>}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
