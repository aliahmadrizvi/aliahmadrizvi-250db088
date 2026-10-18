import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./Button";
import { Reveal } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-surface">
      <div aria-hidden className="glow-orb absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <Reveal>
          <p className="label-mono mb-6 text-mint">07 — Contact</p>
          <h2 className="font-display font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.6rem,9vw,8rem)]">
            Let's build <br /><span className="text-outline">something</span> <span className="text-lavender">human.</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">Open to student collaborations, learning projects and conversations about technology that serves people.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={site.email ? `mailto:${site.email}` : null}><Mail size={16} /> {site.email ? "Email Me" : "Email — coming soon"}</Button>
            <Button href={site.github} variant="ghost" external><Github size={16} /> GitHub</Button>
            <Button href={site.linkedin} variant="ghost" external><Linkedin size={16} /> LinkedIn</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="label-mono text-muted-foreground">© {new Date().getFullYear()} {site.name}</p>
        <p className="label-mono text-muted-foreground">{site.location} · Made with curiosity</p>
        <a href="#top" className="label-mono hover:text-mint">Back to top ↑</a>
      </div>
    </footer>
  );
}
