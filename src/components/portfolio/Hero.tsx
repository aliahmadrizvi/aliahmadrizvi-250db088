import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

const lines = ["A HUMAN", "PERSPECTIVE", "ON TECHNOLOGY."];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden pt-24 pb-16 md:pb-20">
      {/* atmosphere */}
      <div aria-hidden className="glow-orb pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px)] bg-[size:12.5%_100%] opacity-40" />
      <div aria-hidden className="pointer-events-none absolute right-6 top-28 hidden text-right md:block">
        <p className="label-mono text-muted-foreground">[ portfolio / vol.01 ]</p>
        <p className="label-mono mt-1 text-muted-foreground">26.8467° N, 80.9462° E</p>
      </div>
      {/* decorative ring */}
      <div aria-hidden className="pointer-events-none absolute right-[8%] top-[22%] hidden h-48 w-48 rounded-full border border-lavender/30 lg:block">
        <div className="absolute inset-6 rounded-full border border-dashed border-mint/30" />
        <span className="label-mono absolute -left-24 top-1/2 text-mint">● learning</span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="label-mono mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" /> CSE Student · Lucknow, India
        </p>
        <h1 className="font-display font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.4rem,10.5vw,9.5rem)]">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? "text-outline" : ""} ${i === 2 ? "text-lavender" : ""}`}
                initial={reduce ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I'm <span className="text-foreground">Ali Ahmad Rizvi</span>, a Computer Science student exploring software, thoughtful digital experiences, and ideas that connect technology with people.
          </p>
          <div className="flex flex-col gap-5 md:items-end">
            <ul className="label-mono space-y-1 text-muted-foreground md:text-right">
              <li>B.Tech CSE — Integral University</li>
              <li>Software · DSA · Web · Python · Data</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href="#projects" variant="primary">Explore My Work <ArrowDownRight size={16} /></Button>
              <Button href="#contact" variant="ghost">Get In Touch <ArrowUpRight size={16} /></Button>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="flex h-9 w-5 justify-center rounded-full border border-muted-foreground/50 pt-2">
          <span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-mint" />
        </span>
      </a>
    </section>
  );
}
