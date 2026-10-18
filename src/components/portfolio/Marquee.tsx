const items = ["Software Development", "Data Structures", "Web Development", "Python", "Open Source"];

export function Marquee() {
  // Two identical halves; animation moves by -50% so the loop is seamless.
  const half = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden border-y border-border bg-surface py-5" role="region" aria-label="Focus areas">
      <p className="sr-only">{items.join(", ")}</p>
      <div aria-hidden className="animate-marquee flex w-max">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 gap-10 whitespace-nowrap pr-10">
            {half.map((t, i) => (
              <li key={i} className="flex items-center gap-10 font-display text-2xl font-bold uppercase md:text-4xl">
                <span className={i % 2 ? "text-outline" : ""}>{t}</span>
                <span className="text-mint">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
