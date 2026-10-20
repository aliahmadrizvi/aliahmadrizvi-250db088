import { describe, expect, it } from "vitest";
import { emailHref, safeUrl } from "./links";

describe("safeUrl", () => {
  it("accepts https links", () => expect(safeUrl("https://github.com/x")).toBe("https://github.com/x"));
  it("rejects http, placeholders and empty values", () => {
    expect(safeUrl("http://github.com/x")).toBeNull();
    expect(safeUrl("#")).toBeNull();
    expect(safeUrl("javascript:alert(1)")).toBeNull();
    expect(safeUrl("")).toBeNull();
    expect(safeUrl(null)).toBeNull();
  });
});

describe("emailHref", () => {
  it("builds mailto for a real address", () => expect(emailHref("a@b.com")).toBe("mailto:a@b.com"));
  it("encodes a contact email subject without allowing header injection", () => {
    expect(emailHref("alirizviiii2024@gmail.com", "Let's build something meaningful")).toBe("mailto:alirizviiii2024@gmail.com?subject=Let%27s%20build%20something%20meaningful");
    expect(emailHref("alirizviiii2024@gmail.com", "Hi&bcc=other@example.com")).toBe("mailto:alirizviiii2024@gmail.com?subject=Hi%26bcc%3Dother%40example.com");
  });
  it("returns null for missing or malformed email", () => {
    expect(emailHref(null)).toBeNull();
    expect(emailHref("not-an-email")).toBeNull();
  });
});
