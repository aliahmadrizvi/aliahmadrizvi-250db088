import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useMotionSettings } from "./motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const { enabled } = useMotionSettings();
  if (!enabled) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, label, title, accent }: { index: string; label: string; title: string; accent?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="label-mono mb-4 flex items-center gap-3 text-muted-foreground">
        <span className="text-mint">{index}</span>
        <span className="h-px w-10 bg-border" />
        {label}
      </p>
      <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
        {title} {accent && <span className="text-outline">{accent}</span>}
      </h2>
    </Reveal>
  );
}

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section-glow relative border-t border-border/50 ${className}`}>
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-32">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="label-mono rounded-full border border-border px-3 py-1 text-[0.65rem] text-muted-foreground">{children}</span>;
}
