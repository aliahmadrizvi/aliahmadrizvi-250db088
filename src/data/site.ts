// Edit personal links here. Leave a value as null to hide its button.
export const site = {
  name: "Ali Ahmad Rizvi",
  role: "B.Tech CSE Student",
  location: "Lucknow, India",
  email: null as string | null, // e.g. "you@example.com"
  github: null as string | null, // e.g. "https://github.com/username"
  linkedin: null as string | null, // e.g. "https://linkedin.com/in/username"
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Learning" },
  { id: "contact", label: "Contact" },
];

export const marqueeItems = ["C++", "Python", "JavaScript", "HTML", "CSS", "Pandas", "NumPy", "Git", "GitHub", "JupyterLab", "FastAPI", "RAG"];

export const skillGroups = [
  { no: "01", title: "Programming", items: ["C++", "Python", "JavaScript"] },
  { no: "02", title: "Web Development", items: ["HTML", "CSS", "Responsive design"] },
  { no: "03", title: "Data Analysis", items: ["Pandas", "NumPy", "Data analysis fundamentals"] },
  { no: "04", title: "Tools", items: ["Git", "GitHub", "JupyterLab"] },
];

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

export const certificates = [
  { issuer: "IBM", title: "Web Development Fundamentals", status: "Issued 2026", url: null as string | null },
  { issuer: "Linux", title: "Linux Credential", status: "Issued March 2026", url: null as string | null },
  { issuer: "IBM", title: "Data Analytics with Python", status: "Status to be confirmed", url: null as string | null },
];

export const milestones = [
  { title: "Building web projects", text: "Designing and coding sites to turn fundamentals into working pages." },
  { title: "Practising DSA with C++", text: "Working through data structures and algorithms problems regularly." },
  { title: "Exploring multilingual AI", text: "Researching regional-language assistance through the Gohar AI concept." },
];
