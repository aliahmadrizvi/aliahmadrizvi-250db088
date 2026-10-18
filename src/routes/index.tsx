import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements, Certificates, Education } from "@/components/portfolio/Credentials";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali Ahmad Rizvi — A Human Perspective on Technology" },
      { name: "description", content: "Portfolio of Ali Ahmad Rizvi, B.Tech CSE student at Integral University, Lucknow — web, DSA, Python and data." },
      { property: "og:title", content: "Ali Ahmad Rizvi — Developer Portfolio" },
      { property: "og:description", content: "A Computer Science student exploring software and thoughtful digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain overflow-x-clip">
      <a href="#about" className="label-mono sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-lavender focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
