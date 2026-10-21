import { createFileRoute, Link, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { MotionProvider } from "@/components/portfolio/motion";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { Footer } from "@/components/portfolio/Contact";
import { Button } from "@/components/portfolio/Button";
import { Tag } from "@/components/portfolio/ui";
import { projects } from "@/data/site";
import { safeUrl } from "@/lib/links";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const { project } = loaderData;
    const url = `https://aliahmadrizvi.lovable.app/projects/${project.slug}`;
    const title = `${project.title} — Ali Ahmad Rizvi`;
    const description = `${project.tagline} — ${project.description}`.slice(0, 200);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  errorComponent: ProjectError,
  notFoundComponent: ProjectNotFound,
  component: ProjectDetailPage,
});

function ProjectError({ error, reset }: ErrorComponentProps) {
  console.error(error);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <h1 className="font-display text-4xl font-black uppercase">This project didn&apos;t load</h1>
      <p className="max-w-md text-muted-foreground">Something went wrong while opening this project. You can try again or head back to all projects.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={reset} className="label-mono rounded-full border border-border px-5 py-3 transition-colors hover:border-lavender hover:text-lavender">Try again</button>
        <Link to="/" className="label-mono rounded-full border border-border px-5 py-3 transition-colors hover:border-lavender hover:text-lavender">Back to all projects</Link>
      </div>
    </main>
  );
}

function ProjectNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <h1 className="font-display text-4xl font-black uppercase">Project not found</h1>
      <p className="max-w-md text-muted-foreground">The project you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/" hash="projects" className="label-mono rounded-full border border-border px-5 py-3 transition-colors hover:border-lavender hover:text-lavender">
        Back to all projects
      </Link>
    </main>
  );
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const github = safeUrl(project.github);
  const demo = safeUrl(project.demo);

  return (
    <MotionProvider>
      <div id="top" className="grain vignette overflow-x-clip">
        <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
          <nav aria-label="Project" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
            <Link to="/" className="font-display text-sm font-bold tracking-tight">
              AAR<span className="text-lavender">.</span>
            </Link>
            <Link to="/" hash="projects" className="label-mono flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft size={14} /> All projects
            </Link>
          </nav>
        </header>

        <main>
          <article className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-24">
            <p className="label-mono mb-6 text-muted-foreground"><span className="text-mint">{project.no}</span> · {project.category} · {project.tagline}</p>
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              {project.title}
            </h1>
            <div className="mt-10">
              <ProjectCover p={project} />
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] md:items-start">
              <div className="min-w-0">
                <h2 className="label-mono mb-4 text-muted-foreground">About this project</h2>
                <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">{project.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
              <aside className="md:border-l md:border-border md:pl-8">
                <h2 className="label-mono mb-4 text-muted-foreground">Links</h2>
                <div className="flex flex-col items-start gap-3">
                  <Button href={github} variant="ghost" external><Github size={14} /> Source Code</Button>
                  <Button href={demo} variant="ghost" external>Live Demo <ArrowUpRight size={14} /></Button>
                  {(!github || !demo) && (
                    <p className="label-mono text-muted-foreground">
                      {!github && "Source link not published yet. "}
                      {!demo && "No live demo available."}
                    </p>
                  )}
                </div>
              </aside>
            </div>
          </article>

          <nav aria-label="Next project" className="border-t border-border">
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-12 sm:px-8 md:py-16"
            >
              <span className="min-w-0">
                <span className="label-mono block text-muted-foreground">Next project · {next.no}</span>
                <span className="mt-2 block truncate font-display text-2xl font-black uppercase tracking-tight transition-colors duration-300 group-hover:text-lavender sm:text-4xl">
                  {next.title}
                </span>
              </span>
              <ArrowUpRight className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lavender" size={32} />
            </Link>
          </nav>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
