import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { projects } from "@/data/projects";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a project detail page for /projects/$slug", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/projects/gohar-ai");

    expect(matches.at(-1)?.routeId).toBe("/projects/$slug");
  });
});

describe("Project slugs", () => {
  it("gives every project a unique, URL-safe slug for its detail page", () => {
    const slugs = projects.map((p) => p.slug);

    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/));
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
