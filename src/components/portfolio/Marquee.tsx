import { marqueeItems } from "@/data/site";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-border bg-surface py-5" aria-label="Technologies">
      <ul className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= marqueeItems.length} className="flex items-center gap-10 font-display text-2xl font-bold uppercase md:text-4xl">
            <span className={i % 2 ? "text-outline" : ""}>{t}</span>
            <span className="text-mint">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
