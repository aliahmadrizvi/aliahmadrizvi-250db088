/** Returns the URL only if it's a real https:// link (or mailto with an address); otherwise null. */
export function safeUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const v = url.trim();
  if (/^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/i.test(v)) return v;
  try {
    const u = new URL(v);
    return u.protocol === "https:" && u.hostname.includes(".") ? u.toString() : null;
  } catch {
    return null;
  }
}

export function emailHref(email: string | null | undefined, subject?: string): string | null {
  const href = email ? safeUrl(`mailto:${email.trim()}`) : null;
  if (!href) return null;
  return subject ? `${href}?subject=${encodeURIComponent(subject.trim().slice(0, 200))}` : href;
}

/** Props for links that open in a new tab — secure and announced to screen readers. */
export const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;
