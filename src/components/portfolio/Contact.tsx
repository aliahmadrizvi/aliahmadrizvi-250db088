import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./Button";
import { Reveal } from "./ui";
import { emailHref, externalProps, safeUrl } from "@/lib/links";

function Ticket({ href, icon, label, value, external }: { href: string | null; icon: React.ReactNode; label: string; value: string; external?: boolean }) {
  const inner = (
    <>
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border">{icon}</span>
        <span className="min-w-0">
          <span className="label-mono block text-muted-foreground">{label}</span>
          <span className="block truncate font-display text-lg font-bold">{value}</span>
        </span>
      </span>
      {href && <ArrowUpRight className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={20} />}
    </>
  );
  const cls = "group flex items-center justify-between gap-4 border-t border-dashed border-border py-5";
  if (!href) return <div className={`${cls} opacity-60`} aria-disabled="true">{inner}</div>;
  return (
    <a href={href} className={`${cls} transition-colors hover:text-lavender`} {...(external ? externalProps : {})}>
      {inner}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-surface">
      <div aria-hidden className="halftone absolute inset-y-0 right-0 w-1/3 opacity-20 [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-40">
        <Reveal>
          <p className="label-mono mb-8 flex items-center gap-3 text-muted-foreground"><span className="text-mint">08</span><span className="h-px w-10 bg-border" />Contact · The last page</p>
          <h2 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Have an idea? <br />Let's build <span className="text-lavender">something meaningful.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[1fr_1.1fr] md:items-end">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              I'm open to connecting with developers, collaborating on projects, learning from the community, and exploring relevant internship opportunities.
            </p>
            <div className="mt-6"><Button href={emailHref(site.email, "Let's build something meaningful")}>Email Me <Mail size={16} /></Button></div>
             <div className="mt-10 inline-block -rotate-3 rounded-sm border-2 border-dashed border-lavender/60 px-5 py-4 text-lavender">
              <p className="label-mono">Posted from</p>
              <p className="font-display text-xl font-black uppercase">Lucknow, IN</p>
              <p className="label-mono">Reply welcome ✦</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-b border-dashed border-border">
              <Ticket href={emailHref(site.email, "Let's build something meaningful")} icon={<Mail size={16} />} label="Email" value={emailHref(site.email) ? (site.email ?? "Address unavailable") : "Address coming soon"} />
              <Ticket href={safeUrl(site.github)} icon={<Github size={16} />} label="GitHub" value={safeUrl(site.github) ? "View my code" : "Link coming soon"} external />
              <Ticket href={safeUrl(site.linkedin)} icon={<Linkedin size={16} />} label="LinkedIn" value={safeUrl(site.linkedin) ? "Connect with me" : "Link coming soon"} external />
            </div>
          </Reveal>
        </div>
      </div>

      <div aria-hidden className="relative select-none overflow-hidden border-t border-border py-6">
        <p className="text-center font-display text-3xl font-black uppercase leading-tight text-outline opacity-60 sm:text-6xl md:text-8xl">
          Ali Ahmad Rizvi
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="label-mono text-muted-foreground">© {new Date().getFullYear()} {site.name}</p>
        <p className="label-mono text-muted-foreground">{site.location} · Designed &amp; built by hand</p>
        <a href="#top" className="label-mono hover:text-mint">Back to top ↑</a>
      </div>
    </footer>
  );
}
