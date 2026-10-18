import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { useMotionSettings } from "./motion";

const lines = ["A HUMAN", "PERSPECTIVE", "ON TECHNOLOGY."];
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { enabled } = useMotionSettings();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yRing = useTransform(scrollYProgress, [0, 1], [0, enabled ? 140 : 0]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, enabled ? -80 : 0]);
  const yMeta = useTransform(scrollYProgress, [0, 1], [0, enabled ? 60 : 0]);
  const up = (d: number) => (enabled ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } } : {});

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-end overflow-hidden pt-24 pb-16 md:pb-20">
      {/* layered atmosphere */}
      <motion.div aria-hidden style={{ y: yOrb }} className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem]">
        <div className="glow-orb animate-drift h-full w-full opacity-70" />
      </motion.div>
      <div aria-hidden className="glow-orb-mint animate-drift-slow pointer-events-none absolute -bottom-40 -left-40 h-[26rem] w-[26rem] opacity-30" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px)] bg-[size:12.5%_100%] opacity-40" />
      <div aria-hidden className="light-sweep pointer-events-none absolute inset-0" />

      <motion.div aria-hidden style={{ y: yMeta }} className="pointer-events-none absolute right-6 top-28 hidden text-right md:block">
        <p className="label-mono text-muted-foreground">[ portfolio / vol.01 ]</p>
        <p className="label-mono mt-1 text-muted-foreground">26.8467° N, 80.9462° E</p>
      </motion.div>

      {/* decorative orbit */}
      <motion.div aria-hidden style={{ y: yRing }} className="pointer-events-none absolute right-[8%] top-[22%] hidden h-48 w-48 lg:block">
        <div className="absolute inset-0 rounded-full border border-lavender/30" />
        <div className="animate-orbit absolute inset-6 rounded-full border border-dashed border-mint/30">
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-mint" />
        </div>
        <span className="label-mono absolute -left-24 top-1/2 text-mint">● learning</span>
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.p {...up(0)} className="label-mono mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" /> CSE Student · Lucknow, India
        </motion.p>
        <h1 className="font-display font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.2rem,9.4vw,9.5rem)]">
          {lines.map((l, i) => (
            <span key={l} className={`block overflow-hidden pb-[0.04em] ${i === 1 ? "md:pl-[12%]" : ""} ${i === 2 ? "md:pl-[4%]" : ""}`}>
              <motion.span
                className={`block ${i === 1 ? "text-outline" : ""} ${i === 2 ? "text-lavender [text-shadow:0_0_60px_color-mix(in_oklab,var(--lavender)_35%,transparent)]" : ""}`}
                initial={enabled ? { y: "105%" } : false}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <motion.p {...up(0.55)} className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I'm <span className="text-foreground">Ali Ahmad Rizvi</span>, a Computer Science student exploring software, thoughtful digital experiences, and ideas that connect technology with people.
          </motion.p>
          <motion.div {...up(0.7)} className="flex flex-col gap-5 md:items-end">
            <ul className="label-mono space-y-1 text-muted-foreground md:text-right">
              <li>B.Tech CSE — Integral University</li>
              <li>Software · DSA · Web · Python · Data</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href="#projects" variant="primary">Explore My Work <ArrowDownRight size={16} /></Button>
              <Button href="#contact" variant="ghost">Get In Touch <ArrowUpRight size={16} /></Button>
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="flex h-9 w-5 justify-center rounded-full border border-muted-foreground/50 pt-2">
          <span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-mint" />
        </span>
      </a>
    </section>
  );
}
