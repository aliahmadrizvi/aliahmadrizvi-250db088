import type { ReactNode } from "react";

const variants = {
  primary: "bg-lavender text-primary-foreground hover:bg-mint",
  ghost: "border border-border text-foreground hover:border-lavender hover:text-lavender",
  disabled: "border border-dashed border-border text-muted-foreground cursor-not-allowed",
};

export function Button({ href, children, variant = "primary", external }: { href?: string | null; children: ReactNode; variant?: keyof typeof variants; external?: boolean }) {
  const cls = `label-mono inline-flex items-center gap-2 rounded-full px-5 py-3 transition-colors duration-300 ${variants[href ? variant : "disabled"]}`;
  if (!href) return <span className={cls} aria-disabled="true">{children}</span>;
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
