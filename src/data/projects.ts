// Only source-inspected public repositories are linked; null omits a CTA.
export type ProjectCategory = "Web Development" | "AI";
export type Project = {
  no: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
};
export const projects: Project[] = [
  {
    no: "01", title: "Gohar AI", category: "AI", tagline: "गोहर · Agricultural assistance concept",
    description: "An agricultural assistance concept exploring native-language access to useful farming information. Planned scope includes Hindi and regional-language support, fertilizer guidance, weather information, relevant government schemes and an accessible conversational interface. The public repository contains an early prototype; this is not a production farming-advice service.",
    tags: ["Python", "FastAPI", "Multilingual AI", "Concept / prototype"],
    github: "https://github.com/aliahmadrizvi/Gohar", demo: null,
  },
  {
    no: "02", title: "Smart Logistics & Accessibility Intelligence Platform", category: "AI", tagline: "Internal SIH 2026 · Hackathon proposal",
    description: "An AI-based logistics and accessibility platform proposed for North Eastern India during the internal Smart India Hackathon 2026. My contribution was React frontend development: the dashboard, navigation, accessibility map interface, route-planning UI, alerts and field-reporting interface. An internal hackathon project, not a verified winning entry or production deployment.",
    tags: ["React", "Frontend development", "Accessibility", "SIH 2026"],
    github: "https://github.com/aliahmadrizvi/smart-logistics-platform", demo: null,
  },
  {
    no: "03", title: "ResQ", category: "Web Development", tagline: "MLH Hack Day · Hackathon concept",
    description: "A concept for coordinating individuals, organizations and emergency-response agencies during unexpected situations. Developed through MLH Hack Day at Integral University, with an emphasis on problem-solving, teamwork and rapid prototyping. The public repository documents a reporting and responder-dashboard prototype, not a verified operational emergency service.",
    tags: ["Hackathon", "Rapid prototyping", "Team collaboration"],
    github: "https://github.com/aliahmadrizvi/ResQ", demo: null,
  },
  {
    no: "04", title: "StudySync", category: "Web Development", tagline: "Student-focused landing-page study",
    description: "A static student-focused landing page built with HTML and CSS, featuring a hero, feature cards and promotional sections. A practice project in page structure, visual hierarchy and responsive styling — not a working study-resource or learning-management platform.",
    tags: ["HTML", "CSS", "Responsive styling"],
    github: "https://github.com/aliahmadrizvi/projects-web-dev/tree/main/studySync", demo: null,
  },
  {
    no: "05", title: "LeetMetric", category: "Web Development", tagline: "LeetCode progress, visualised",
    description: "A coding-statistics project that accepts and validates a LeetCode username, requests submission statistics and presents solved counts and progress indicators. Its live-data request depends on an external CORS proxy, so availability depends on that service.",
    tags: ["HTML", "CSS", "JavaScript", "GraphQL"],
    github: "https://github.com/aliahmadrizvi/projects-web-dev/tree/main/LeetMetric", demo: null,
  },
  {
    no: "06", title: "Mehfil-e-Zaiqa", category: "Web Development", tagline: "Recipe-catalogue website concept",
    description: "A food-inspired HTML/CSS website with recipe-category navigation, food cards, and About and Contact pages. A visual catalogue concept; individual recipe links and contact-form submission are not implemented in the current source.",
    tags: ["HTML", "CSS", "Recipe catalogue", "Visual design"],
    github: "https://github.com/aliahmadrizvi/projects-web-dev/tree/main/Recipe-Website", demo: null,
  },
  {
    no: "07", title: "Sabrina Fandom", category: "Web Development", tagline: "A fan-page design study",
    description: "A fan-page project for practising visual web design and content presentation.",
    tags: ["HTML", "CSS", "Visual design"], github: null, demo: null,
  },
];
