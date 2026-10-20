import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/ali-portrait.png.asset.json";
import { site } from "@/data/site";
import { emailHref, safeUrl } from "@/lib/links";
import { Button } from "./Button";
import { useMotionSettings } from "./motion";

const ease = [0.22, 1, 0.36, 1] as const;
export function Hero() {
  const { enabled } = useMotionSettings();
  const enter = (delay: number) => enabled ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease } } : {};
  return (
    <section id="top" className="hero-scene relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="hero-portrait pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block" aria-hidden>
        <img src={portrait.url} alt="" width={1060} height={1484} fetchPriority="high" className="h-full w-full object-cover object-top duotone" />
      </div>
      <div aria-hidden className="hero-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p {...enter(0)} className="label-mono mb-6 text-mint">HELLO, I'M</motion.p>
        <h1 className="hero-name font-display font-black leading-[1.05]">
          <motion.span {...enter(0.1)} className="block">Ali Ahmad</motion.span>
          <motion.span {...enter(0.2)} className="hero-accent block">Rizvi<span className="text-mint">.</span></motion.span>
        </h1>
        <motion.div {...enter(0.3)} className="mt-7 max-w-2xl">
          <p className="font-display text-xl font-bold leading-snug sm:text-2xl">{site.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-lavender sm:text-base">{site.supportingLine}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{site.introduction}</p>
        </motion.div>
        <motion.div {...enter(0.45)} className="mt-8 flex flex-wrap gap-3">
          <Button href={emailHref(site.email, "Let's build something meaningful")}>Contact Me <Mail size={16} /></Button>
          <Button href="#projects" variant="ghost">View Projects <ArrowDownRight size={16} /></Button>
          <Button href={safeUrl(site.github)} variant="ghost" external><Github size={16} /> GitHub</Button>
          <Button href={safeUrl(site.linkedin)} variant="ghost" external><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></Button>
        </motion.div>
        <motion.p {...enter(0.55)} className="label-mono mt-10 max-w-xl leading-relaxed text-muted-foreground">{site.pronouns} · {site.location}</motion.p>
      </div>
    </section>
  );
}
