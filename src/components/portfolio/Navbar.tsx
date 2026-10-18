import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          AAR<span className="text-lavender">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`label-mono relative rounded-full px-3 py-2 transition-colors hover:text-foreground ${active === n.id ? "text-foreground" : "text-muted-foreground"}`}
              >
                {active === n.id && <span className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-mint" />}
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="h-[calc(100dvh-4rem)] bg-background px-5 pt-8 md:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((n, i) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl font-bold uppercase ${active === n.id ? "text-lavender" : ""}`}
                >
                  <span className="label-mono text-muted-foreground">0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
