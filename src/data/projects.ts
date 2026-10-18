// Project data. Add verified https URLs to `github` / `demo`; leave null to hide the button.
export type ProjectCategory = "Web Development" | "AI";
export type Project = {
  no: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  tags: string[];
  /** Public repository URL (https only). null = no public repo; button is hidden. */
  github: string | null;
  /** Live demo URL (https only). null = no demo; button is hidden. */
  demo: string | null;
};

export const projects: Project[] = [
  { no: "01", title: "Gohar AI", category: "AI", tagline: "Multilingual farming assistant — concept",
    description: "A concept for making practical agricultural guidance more accessible to farmers in Hindi and Awadhi.",
    tags: ["Python", "FastAPI", "Gemma", "RAG"], github: null, demo: null },
  { no: "02", title: "LeetMetric", category: "Web Development", tagline: "Coding progress, visualised",
    description: "A web project exploring coding progress and problem-solving activity.",
    tags: ["HTML", "CSS", "JavaScript"], github: null, demo: null },
  { no: "03", title: "StudySync", category: "Web Development", tagline: "Study resources, organised",
    description: "A student-focused web project exploring the presentation of study resources and learning workflows.",
    tags: ["HTML", "CSS", "JavaScript"], github: null, demo: null },
  { no: "04", title: "Mehfil-e-Zaiqa", category: "Web Development", tagline: "A recipe website concept",
    description: "Rich editorial typography, food-inspired visual styling and recipe categories.",
    tags: ["HTML", "CSS", "Typography"], github: null, demo: null },
  { no: "05", title: "Sabrina Fandom", category: "Web Development", tagline: "A fan-page design study",
    description: "A fan-page project for practising visual web design and content presentation.",
    tags: ["HTML", "CSS", "Visual design"], github: null, demo: null },
];

