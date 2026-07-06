import {
  BrainCircuit,
  Code2,
  Cloud,
  Cpu,
  Mail,
  Network,
  Rocket,
  Satellite,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

export const site = {
  name: "itschekuri",
  person: "Raja Vamsi Chekuri",
  url: "https://itschekuri.com",
  email: "admin@itschekuri.com",
  description:
    "The digital workshop of Raja Vamsi Chekuri: software engineering, AI, cloud, product development, open source, and technical writing.",
  nav: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  futureNav: [
    { href: "/resume", label: "Resume" },
    { href: "/uses", label: "Uses" },
    { href: "/labs", label: "Labs" },
    { href: "/speaking", label: "Speaking" },
  ],
  socials: [
    { href: "https://github.com/itschekuri", label: "GitHub", icon: Code2 },
    { href: "https://linkedin.com/in/itschekuri", label: "LinkedIn", icon: Network },
    { href: "https://x.com/itschekuri", label: "Twitter/X", icon: Satellite },
    { href: "mailto:admin@itschekuri.com", label: "Email", icon: Mail },
  ],
};

export const interests = [
  { title: "Software Engineering", icon: Code2 },
  { title: "Artificial Intelligence", icon: BrainCircuit },
  { title: "Cloud Computing", icon: Cloud },
  { title: "Product Development", icon: Rocket },
  { title: "Open Source", icon: Terminal },
  { title: "Continuous Improvement", icon: Sparkles },
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AI APIs",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Tailwind CSS",
  "GitHub Actions",
  "Vercel",
];

export const projects = [
  {
    title: "Personal Digital Workshop",
    description:
      "The long-term home for writing, experiments, products, and the itschekuri brand.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    status: "Building",
    category: "Personal",
    tags: ["Website", "Design System", "Content"],
    github: "https://github.com/itschekuri",
    demo: "https://itschekuri.com",
  },
  {
    title: "AI Product Experiments",
    description:
      "Small focused prototypes exploring how AI can make useful workflows feel lighter.",
    stack: ["Python", "OpenAI", "React", "Cloud"],
    status: "Exploring",
    category: "Labs",
    tags: ["AI", "Automation", "Product"],
    github: "https://github.com/itschekuri",
    demo: "https://itschekuri.com/labs",
  },
  {
    title: "Engineering Notes",
    description:
      "A searchable writing system for cloud patterns, frontend craft, and lessons from building.",
    stack: ["MDX", "Next.js", "SEO", "Content"],
    status: "Planned",
    category: "Writing",
    tags: ["Blog", "Technical Writing", "Learning"],
    github: "https://github.com/itschekuri",
    demo: "https://itschekuri.com/blog",
  },
];

export const posts = [
  {
    title: "Designing a personal site like a product",
    excerpt:
      "Why a personal website should feel like a living system, not a frozen resume.",
    category: "Product",
    readTime: "4 min read",
    date: "Coming soon",
    featured: true,
  },
  {
    title: "Notes from learning AI engineering",
    excerpt:
      "A practical notebook for prompts, tools, evals, and experiments that actually help.",
    category: "AI",
    readTime: "6 min read",
    date: "Drafting",
    featured: false,
  },
  {
    title: "Cloud patterns I keep reaching for",
    excerpt:
      "Small architecture choices that make projects easier to ship and operate.",
    category: "Cloud",
    readTime: "5 min read",
    date: "Drafting",
    featured: false,
  },
];

export const timeline = [
  {
    year: "Now",
    title: "Building the itschekuri digital workshop",
    body: "Creating a premium home for projects, notes, experiments, and professional presence.",
  },
  {
    year: "Next",
    title: "Publishing useful engineering notes",
    body: "Turning learning and project work into searchable writing for other builders.",
  },
  {
    year: "Always",
    title: "Curious, analytical, and building",
    body: "Following the thread from software engineering to AI, cloud, product, and open source.",
  },
];

export const experiments = [
  { label: "Currently building", value: "Personal OS for projects", icon: Wrench },
  { label: "Learning", value: "AI agents and cloud-native systems", icon: Cpu },
  { label: "Writing about", value: "Product-minded engineering", icon: Sparkles },
];
