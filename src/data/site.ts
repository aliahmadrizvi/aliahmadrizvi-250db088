// SINGLE CONFIG for personal + social links. Use real values only;
// null (or an invalid/non-https URL) keeps that button disabled.
export const site = {
  name: "Ali Ahmad Rizvi",
  role: "B.Tech CSE Student",
  location: "Lucknow, India",
  email: "alirizviiii2024@gmail.com" as string | null, // e.g. "you@example.com"
  github: "https://github.com/aliahmadrizvi" as string | null, // e.g. "https://github.com/username"
  linkedin: "https://www.linkedin.com/in/ali-ahmad-rizvi-389311377/" as string | null, // e.g. "https://linkedin.com/in/username"
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

export { projects, type Project, type ProjectCategory } from "./projects";

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
