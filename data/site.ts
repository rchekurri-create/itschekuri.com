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
    "The digital headquarters of Raja Vamsi Chekuri, helping businesses discover, design, implement, and optimize practical technology solutions.",
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
  { title: "IT Consulting", icon: Network },
  { title: "Business Solution Design", icon: Wrench },
  { title: "Product Strategy", icon: Rocket },
  { title: "Solution Architecture", icon: Terminal },
  { title: "AI-Driven Solutions", icon: BrainCircuit },
  { title: "Cloud Technologies", icon: Cloud },
];

export const techStack = [
  "Business Strategy",
  "Product Thinking",
  "Solution Design",
  "Enterprise Software",
  "AI Adoption",
  "Cloud Strategy",
  "Process Automation",
  "Customer Success",
  "Technology Sales",
  "Implementation Planning",
  "Change Enablement",
  "Business Process Optimization",
];

export const projects = [
  {
    title: "itschekuri Advisory Hub",
    description:
      "A professional home for strategy notes, solution frameworks, case studies, product reviews, and practical guidance for business technology leaders.",
    stack: ["Brand Strategy", "Content System", "Consulting"],
    status: "Building",
    category: "Brand",
    tags: ["Website", "Advisory", "Content"],
    github: "https://github.com/itschekuri",
    demo: "https://itschekuri.com",
  },
  {
    title: "AI Adoption Playbooks",
    description:
      "Practical patterns for evaluating AI opportunities, designing low-risk pilots, and turning intelligent automation into measurable business value.",
    stack: ["AI Strategy", "Automation", "Governance"],
    status: "Planning",
    category: "AI",
    tags: ["AI", "Automation", "Transformation"],
    github: "https://github.com/itschekuri",
    demo: "https://itschekuri.com/labs",
  },
  {
    title: "Solution Design Library",
    description:
      "A growing collection of implementation strategies, architecture notes, buying considerations, and process improvement examples.",
    stack: ["Architecture", "Enterprise Tech", "Operations"],
    status: "Planned",
    category: "Insights",
    tags: ["Blog", "Case Studies", "Strategy"],
    github: "https://github.com/itschekuri",
    demo: "https://itschekuri.com/blog",
  },
];

export const posts = [
  {
    title: "Turning operational friction into a technology roadmap",
    excerpt:
      "A practical way to move from scattered business pain points to prioritized, implementable solution opportunities.",
    category: "Strategy",
    readTime: "5 min read",
    date: "Coming soon",
    featured: true,
  },
  {
    title: "How to evaluate AI use cases before buying tools",
    excerpt:
      "A business-first checklist for finding AI opportunities that are useful, measurable, and realistic to adopt.",
    category: "AI",
    readTime: "6 min read",
    date: "Drafting",
    featured: false,
  },
  {
    title: "What makes enterprise software adoption succeed",
    excerpt:
      "Lessons on implementation planning, customer success, process alignment, and stakeholder confidence.",
    category: "Implementation",
    readTime: "5 min read",
    date: "Drafting",
    featured: false,
  },
];

export const timeline = [
  {
    year: "Now",
    title: "Building the itschekuri advisory platform",
    body: "Creating a professional home for technology strategy, solution design, digital transformation insights, and implementation guidance.",
  },
  {
    year: "Next",
    title: "Publishing practical business technology guidance",
    body: "Sharing case studies, technology trends, product reviews, implementation strategies, and frameworks for better decision-making.",
  },
  {
    year: "Always",
    title: "Customer-focused, strategic, and implementation-minded",
    body: "Helping organizations connect goals, requirements, people, and platforms into solutions that solve real business problems.",
  },
];

export const experiments = [
  { label: "Currently building", value: "itschekuri advisory headquarters", icon: Wrench },
  { label: "Exploring", value: "AI adoption and intelligent automation", icon: Cpu },
  { label: "Writing about", value: "Technology strategy that creates business value", icon: Sparkles },
];
