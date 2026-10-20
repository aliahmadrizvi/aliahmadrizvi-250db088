import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { useMotionSettings } from "./motion";

function MotionToggle() {
  const { userPref, enabled, toggle } = useMotionSettings();
  return (
    <Button
      type="button"
      variant="outline"
      onClick={toggle}
      aria-pressed={enabled}
      title={userPref && !enabled ? "Reduced by your system settings" : undefined}
      className="label-mono inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${enabled ? "bg-mint" : "bg-muted-foreground"}`} />
      Motion {enabled ? "On" : "Off"}
    </Button>
  );
}

export function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const { enabled } = useMotionSettings();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    // cheap sentinel instead of a scroll listener
    const top = document.getElementById("top");
    const s = new IntersectionObserver((entries) => setScrolled((entries[0]?.boundingClientRect.top ?? 0) < -20), { threshold: [0, 0.99, 1] });
    if (top) s.observe(top);
    return () => { obs.disconnect(); s.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    wasOpen.current = true;
    menuRef.current?.querySelector("a")?.focus();
    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, [open]);

  const shown = active;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : ""}`}>
      <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-lavender to-mint" />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          AAR<span className="text-lavender">.</span>
        </a>
        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={shown === n.id ? "true" : undefined}
                className={`label-mono relative block rounded-full px-2 py-2 transition-colors hover:text-foreground ${shown === n.id ? "text-foreground" : "text-muted-foreground"}`}
              >
                {shown === n.id && (
                  <motion.span {...(enabled ? { layoutId: "nav-pill" } : {})} className="absolute inset-0 -z-10 rounded-full border border-lavender/40 bg-lavender/10" transition={{ duration: enabled ? 0.3 : 0 }} />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <MotionToggle />
          <Button
            variant="outline"
            size="icon"
            ref={toggleRef}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>
      {open && (
        <div ref={menuRef} id="mobile-menu" role="dialog" aria-label="Site menu" className="h-[calc(100dvh-4rem)] overflow-y-auto bg-background px-5 pt-8 xl:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((n, i) => (
              <motion.li key={n.id} initial={enabled ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: enabled ? 0.3 : 0, delay: enabled ? i * 0.05 : 0 }}>
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
