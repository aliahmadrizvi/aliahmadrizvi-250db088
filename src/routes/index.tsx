import { createFileRoute } from "@tanstack/react-router";
import { MotionProvider } from "@/components/portfolio/motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements, Certificates, Education, Experience } from "@/components/portfolio/Credentials";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali Ahmad Rizvi — Aspiring SDE & CSE Student" },
      { name: "description", content: "Ali Ahmad Rizvi, aspiring SDE and B.Tech CSE student at Integral University, Lucknow. Explore DSA, Python, React projects and hackathon collaborations." },
      { property: "og:title", content: "Ali Ahmad Rizvi — Aspiring Software Development Engineer" },
      { property: "og:description", content: "Aspiring SDE at Integral University, Lucknow — DSA, Python, web development and project-based learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ali Ahmad Rizvi — Aspiring Software Development Engineer" },
      { name: "twitter:description", content: "Aspiring SDE at Integral University, Lucknow — DSA, Python, web development and project-based learning." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ali Ahmad Rizvi",
          jobTitle: "B.Tech Computer Science and Engineering student",
          affiliation: { "@type": "CollegeOrUniversity", name: "Integral University, Lucknow" },
          sameAs: ["https://github.com/aliahmadrizvi", "https://www.linkedin.com/in/ali-ahmad-rizvi-389311377/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionProvider>
    <div className="grain vignette overflow-x-clip">
      <a href="#about" className="label-mono sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-lavender focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionProvider>
  );
}
