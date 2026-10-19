import { useEffect, useState } from "react";

export const INTRO_KEY = "aar-intro-seen";
/** Runs before paint: returning visitors in this session never see the overlay. */
export const introBootScript = `try{if(sessionStorage.getItem("${INTRO_KEY}"))document.documentElement.dataset.intro="seen"}catch(e){}`;

const MIN_MS = 1900;
const MAX_MS = 2700;
const FADE_MS = 600;

/**
 * Cinematic AR intro overlay. The CSS timeline also hides it on its own,
 * so the page stays usable even if JavaScript never runs.
 */
export function IntroLoader() {
  const [state, setState] = useState<"show" | "leaving" | "gone">("show");

  useEffect(() => {
    const root = document.documentElement;
    let seen = false;
    try { seen = !!sessionStorage.getItem(INTRO_KEY); } catch { /* storage blocked */ }
    if (seen || root.dataset["intro"] === "seen") { setState("gone"); return; }
    try { sessionStorage.setItem(INTRO_KEY, "1"); } catch { /* ignore */ }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || root.dataset["motion"] === "off";
    const start = performance.now();
    const minMs = reduce ? 300 : MIN_MS;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timers: number[] = [];
    const finish = () => {
      setState("leaving");
      document.body.style.overflow = prevOverflow;
      timers.push(window.setTimeout(() => { root.dataset["intro"] = "seen"; setState("gone"); }, reduce ? 150 : FADE_MS));
    };
    const onReady = () => timers.push(window.setTimeout(finish, Math.max(0, minMs - (performance.now() - start))));
    const maxTimer = window.setTimeout(finish, reduce ? 600 : MAX_MS);
    timers.push(maxTimer);
    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", onReady);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div className={`intro-overlay ${state === "leaving" ? "is-leaving" : ""}`} role="status" aria-live="polite" aria-label="Loading Ali Ahmad Rizvi's portfolio">
      <div className="intro-light" aria-hidden />
      <div className="relative flex flex-col items-center px-6 text-center">
        <svg className="intro-logo h-20 w-auto sm:h-24" viewBox="0 0 140 100" fill="none" aria-hidden shapeRendering="geometricPrecision">
          <path pathLength={1} d="M8 92 L38 8 L68 92 M20 62 H56" />
          <path pathLength={1} className="intro-logo-r" d="M82 92 V8 H106 A21 21 0 0 1 106 50 H82 M104 50 L130 92" />
          <circle cx="132" cy="14" r="3.5" className="intro-dot" />
        </svg>
        <p className="intro-name font-display mt-8 text-xl font-bold tracking-[0.18em] sm:text-2xl">ALI AHMAD RIZVI</p>
        <p className="intro-sub label-mono mt-3 text-muted-foreground">Developer · Creator · Student</p>
        <div className="intro-bar mt-10 h-px w-48 overflow-hidden bg-border sm:w-64"><span /></div>
        <p className="intro-status label-mono mt-4 text-[0.6rem] text-mint">Initializing experience</p>
      </div>
    </div>
  );
}
