import { MotionConfig, useReducedMotion } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { enabled: boolean; userPref: boolean; toggle: () => void };
const MotionCtx = createContext<Ctx>({ enabled: true, userPref: true, toggle: () => {} });
const KEY = "aar-motion";

/** Motion is on only when the visitor allows it AND the OS doesn't request reduced motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const osReduce = useReducedMotion();
  const [userPref, setUserPref] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(KEY) === "off") setUserPref(false);
  }, []);

  const enabled = userPref && !osReduce;

  useEffect(() => {
    document.documentElement.dataset["motion"] = enabled ? "on" : "off";
  }, [enabled]);

  const toggle = () =>
    setUserPref((p) => {
      localStorage.setItem(KEY, p ? "off" : "on");
      return !p;
    });

  return (
    <MotionCtx.Provider value={{ enabled, userPref, toggle }}>
      <MotionConfig reducedMotion={enabled ? "never" : "always"}>{children}</MotionConfig>
    </MotionCtx.Provider>
  );
}

export const useMotionSettings = () => useContext(MotionCtx);
