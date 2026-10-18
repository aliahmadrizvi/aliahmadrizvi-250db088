import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { useMotionSettings } from "./motion";

function MotionToggle() {
  const { userPref, enabled, toggle } = useMotionSettings();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      title={userPref && !enabled ? "Reduced by your system settings" : undefined}
      className="label-mono inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${enabled ? "bg-mint" : "bg-muted-foreground"}`} />
      Motion {enabled ? "On" : "Off"}
    </button>
  );
}

export function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", "milestones", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    // cheap sentinel instead of a scroll listener
    const top = document.getElementById("top");
    const s = new IntersectionObserver(([e]) => setScrolled(e.boundingClientRect.top < -20), { threshold: [0, 0.99, 1] });
    if (top) s.observe(top);
    return () => { obs.disconnect(); s.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const shown = active === "milestones" ? "certificates" : active;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : ""}`}>
      <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-lavender to-mint" />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          AAR<span className="text-lavender">.</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={shown === n.id ? "true" : undefined}
                className={`label-mono relative block rounded-full px-3 py-2 transition-colors hover:text-foreground ${shown === n.id ? "text-foreground" : "text-muted-foreground"}`}
              >
                {shown === n.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full border border-lavender/40 bg-lavender/10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <MotionToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto bg-background px-5 pt-8 lg:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((n, i) => (
              <motion.li key={n.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl font-bold uppercase ${shown === n.id ? "text-lavender" : ""}`}
                >
                  <span className="label-mono text-muted-foreground">0{i + 1}</span>
                  {n.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
