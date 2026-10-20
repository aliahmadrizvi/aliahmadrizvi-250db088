// Personal identity and verified contact destinations.
export const site = {
  name: "Ali Ahmad Rizvi",
  pronouns: "He/Him",
  role: "Aspiring Software Development Engineer",
  headline: "Aspiring SDE | CSE Student | DSA • Python • Web Development | Building & Learning",
  supportingLine: "CSE Student | DSA • Python • Web Development | Building & Learning",
  location: "Lucknow, Uttar Pradesh, India",
  university: "Integral University, Lucknow",
  introduction: "I'm a Computer Science and Engineering student at Integral University, Lucknow, passionate about software development, problem-solving, and building useful digital experiences. I strengthen my programming fundamentals through consistent DSA practice while exploring web development, Python, and AI-powered applications. I enjoy learning by building, collaborating with teams, and turning ideas into practical solutions.",
  email: "alirizviiii2024@gmail.com" as string | null,
  github: "https://github.com/aliahmadrizvi" as string | null,
  linkedin: "https://www.linkedin.com/in/ali-ahmad-rizvi-389311377/" as string | null,
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "hackathons", label: "Hackathons" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const marqueeItems = ["C++", "Python", "Java", "JavaScript", "React", "HTML", "CSS", "DSA", "Pandas", "NumPy", "Git", "GitHub"];
export const skillGroups = [
  { no: "01", title: "Programming", items: ["C++", "Python", "Java"] },
  { no: "02", title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React"] },
  { no: "03", title: "Computer Science", items: ["Data Structures and Algorithms", "Object-Oriented Programming"] },
  { no: "04", title: "Tools", items: ["Git", "GitHub", "JupyterLab"] },
  { no: "05", title: "Data Analytics", items: ["Python", "NumPy", "Pandas"] },
];
export { projects, type Project, type ProjectCategory } from "./projects";

// Existing credential records lack public verification URLs or certificate files.
// Keep their verification status explicit; do not assert issue dates or awards.
export const certificates = [
  { issuer: "IBM", title: "Web Development Fundamentals", status: "Verification pending", url: null as string | null },
  { issuer: "Linux", title: "Linux Credential", status: "Verification pending", url: null as string | null },
  { issuer: "IBM", title: "Data Analytics with Python", status: "Status to be confirmed", url: null as string | null },
];
export const experience = {
  role: "Student Developer", type: "Self-employed", period: "January 2026 – Present",
  location: site.location,
  activities: ["Practicing Data Structures and Algorithms using C++ and Python.", "Building web development projects and exploring frontend engineering.", "Maintaining and improving GitHub projects.", "Developing programming and problem-solving skills.", "Learning through hands-on projects and technical collaboration."],
};
export const hackathons = [
  { event: "Internal Smart India Hackathon 2026", project: "Smart Logistics & Accessibility Intelligence Platform", contribution: "React frontend development", text: "An internal hackathon proposal for logistics and accessibility in North Eastern India. My contribution focused on the dashboard, navigation, accessibility map, route-planning UI, alerts and field reporting." },
  { event: "MLH Hack Day · Integral University", project: "ResQ", contribution: "Teamwork & rapid prototyping", text: "A concept for coordinating individuals, organizations and emergency-response agencies during unexpected situations. An opportunity to practice collaborative problem-solving and rapid prototyping." },
  { event: "Hacktoberfest × IUL", project: "Gohar AI — गोहर", contribution: "Agricultural assistant concept", text: "Exploring how native-language interaction could make agricultural information more accessible. The project remains a concept, with features described as planned rather than delivered." },
];
