import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ClipboardList,
  Cloud,
  DatabaseZap,
  Gauge,
  GitBranch,
  Handshake,
  Layers3,
  Mail,
  Map,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wrench,
} from "lucide-react";

export const site = {
  name: "itschekuri",
  person: "Raja Vamsi Chekuri",
  url: "https://itschekuri.com",
  email: "admin@itschekuri.com",
  description:
    "IT consulting and business solution design for organizations that need practical technology solutions to real operational problems.",
  positioning: "IT Consultant - Business Solutions Designer - Product Specialist",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
  ],
  futureNav: [],
  socials: [
    { href: "https://linkedin.com/in/itschekuri", label: "LinkedIn", icon: Network },
    { href: "https://github.com/itschekuri", label: "GitHub", icon: GitBranch },
    { href: "mailto:admin@itschekuri.com", label: "Email", icon: Mail },
  ],
};

export const whatIDo = [
  {
    title: "Analyze",
    description: "Understand operations, workflows, pain points, and business needs.",
    icon: Search,
    accent: "orange",
  },
  {
    title: "Design",
    description: "Create practical processes, solution strategies, and connected systems.",
    icon: Target,
    accent: "pink",
  },
  {
    title: "Implement",
    description: "Deploy, integrate, and optimize technology solutions for measurable outcomes.",
    icon: Workflow,
    accent: "cyan",
  },
];

export const expertise = [
  {
    title: "Business Systems",
    description: "CRM, ERP, HRMS, ITSM, CX, ECM",
    icon: BriefcaseBusiness,
    accent: "pink",
  },
  {
    title: "Infrastructure & Security",
    description: "Endpoint Management, Cybersecurity, Cloud, Observability",
    icon: ShieldCheck,
    accent: "orange",
  },
  {
    title: "Data & Automation",
    description: "Business Intelligence, Automation, Reporting, Digital Workplace",
    icon: BarChart3,
    accent: "cyan",
  },
];

export const services = [
  {
    title: "Business Process Discovery",
    description:
      "I analyze current workflows, stakeholder needs, system usage, bottlenecks, manual tasks, and operational gaps.",
    includes: [
      "Workflow mapping",
      "Requirement discovery",
      "Stakeholder interviews",
      "Pain point analysis",
      "Opportunity identification",
      "Current-state assessment",
    ],
    icon: ClipboardList,
    accent: "orange",
  },
  {
    title: "Solution Design",
    description: "I design practical technology solutions that align people, processes, data, and systems.",
    includes: [
      "Future-state process design",
      "Solution architecture",
      "Platform recommendations",
      "System design",
      "User journey planning",
      "Implementation roadmap",
    ],
    icon: Layers3,
    accent: "cyan",
  },
  {
    title: "Technology Implementation",
    description:
      "I help implement enterprise platforms and business systems with a focus on adoption, usability, and measurable outcomes.",
    includes: ["CRM implementation", "ERP support", "HRMS workflows", "ITSM setup", "CX systems", "Digital workplace tools"],
    icon: Wrench,
    accent: "purple",
  },
  {
    title: "Integration & Optimization",
    description:
      "I improve how systems work together and optimize existing platforms for better performance and usability.",
    includes: [
      "System integration planning",
      "Data flow improvement",
      "Automation opportunities",
      "Reporting improvements",
      "Process optimization",
      "Platform cleanup",
    ],
    icon: DatabaseZap,
    accent: "pink",
  },
  {
    title: "Product & Platform Advisory",
    description: "I help organizations evaluate, select, and adopt the right technology products.",
    includes: [
      "Product evaluation",
      "Vendor comparison",
      "Requirements alignment",
      "Cost-benefit analysis",
      "Adoption strategy",
      "Technology roadmap",
    ],
    icon: Handshake,
    accent: "orange",
  },
  {
    title: "AI, Automation & Business Intelligence",
    description:
      "I help identify practical opportunities to use automation, AI, and data insights to improve decision-making and reduce manual work.",
    includes: [
      "Automation use cases",
      "BI dashboards",
      "Reporting strategy",
      "AI opportunity discovery",
      "Data-driven decision support",
    ],
    icon: Bot,
    accent: "cyan",
  },
];

export const approach = [
  { title: "Discover", description: "Understand your business deeply.", icon: Search, accent: "orange" },
  { title: "Design", description: "Create the right solution path.", icon: Map, accent: "cyan" },
  { title: "Implement", description: "Deploy with focus on adoption.", icon: Sparkles, accent: "pink" },
  { title: "Optimize", description: "Continuously improve and create value.", icon: Gauge, accent: "purple" },
];

export const platformAreas = [
  "CRM, ERP, HRMS, ITSM, CX, ECM",
  "Endpoint Management",
  "Cybersecurity & Observability",
  "Cloud Solutions",
  "Business Intelligence",
  "Automation & Reporting",
  "Digital Workplace Technologies",
];

export const valueDrivers = [
  "Process clarity",
  "Right technology",
  "Connected systems",
  "Measurable outcomes",
  "Long-term growth",
];

export const caseStudies = [
  {
    title: "CRM Transformation for a Growing Sales Team",
    companyType: "Growing B2B services company",
    challenge:
      "Sales data was scattered across spreadsheets, email, and disconnected tools. Leadership had limited visibility into pipeline health and customer follow-ups.",
    approach: [
      "Discovered current sales workflow",
      "Identified manual tracking gaps",
      "Designed CRM stages and data model",
      "Configured customer records, pipeline, activities, and reporting",
      "Supported user adoption and process documentation",
    ],
    solution:
      "Unified CRM process with structured pipeline tracking, customer visibility, automated reminders, and reporting dashboards.",
    outcome: "Improved sales visibility, reduced manual tracking, and enabled better follow-up discipline.",
    tags: ["CRM", "Sales", "Automation"],
  },
  {
    title: "ITSM Optimization for Internal Support",
    companyType: "Mid-sized organization with internal IT team",
    challenge:
      "Service requests, incidents, and approvals were handled through emails and informal channels, causing delays and unclear ownership.",
    approach: [
      "Mapped request types and support workflows",
      "Designed ticket categories and SLAs",
      "Implemented ITSM workflows",
      "Created escalation rules",
      "Built reporting for request volume and response times",
    ],
    solution: "Structured ITSM process for incidents, requests, approvals, and service visibility.",
    outcome: "Improved accountability, faster response times, and better support reporting.",
    tags: ["ITSM", "Support", "Reporting"],
  },
  {
    title: "Workflow Automation for Operations Team",
    companyType: "Operations-heavy business",
    challenge: "Teams relied on repetitive manual tasks, duplicate data entry, and approval follow-ups.",
    approach: [
      "Identified high-volume manual processes",
      "Mapped approval flows",
      "Designed automation logic",
      "Integrated data capture and notifications",
      "Tested and refined workflow rules",
    ],
    solution: "Automated workflow for approvals, notifications, status tracking, and reporting.",
    outcome: "Reduced manual effort, improved consistency, and increased operational efficiency.",
    tags: ["Automation", "Operations", "Workflow"],
  },
  {
    title: "Business Intelligence Dashboard for Leadership",
    companyType: "Multi-department organization",
    challenge: "Leadership lacked a single view of performance metrics across departments.",
    approach: [
      "Defined key metrics",
      "Identified data sources",
      "Designed dashboard structure",
      "Created reporting views",
      "Improved data visibility",
    ],
    solution: "Executive dashboard showing operational performance, trends, and decision-ready insights.",
    outcome: "Improved decision-making and reduced dependency on manual reporting.",
    tags: ["BI", "Dashboards", "Data"],
  },
];

export const projects = caseStudies.map((study) => ({
  title: study.title,
  description: study.challenge,
  stack: study.tags,
  status: "Representative",
  category: study.tags[0],
  tags: study.tags,
  outcome: study.outcome,
  github: "https://github.com/itschekuri",
  demo: "https://itschekuri.com/case-studies",
}));

export const posts = [
  {
    title: "Turning operational friction into a practical solution roadmap",
    excerpt: "A business-first way to move from pain points to implementable technology opportunities.",
    category: "Strategy",
    readTime: "5 min read",
    date: "Coming soon",
    featured: true,
  },
];

export const timeline = [
  {
    year: "Now",
    title: "Designing practical IT solutions",
    body: "Helping businesses connect operations, systems, and measurable outcomes.",
  },
];

export const experiments = [
  { label: "Current focus", value: "Business process discovery and solution design", icon: Workflow },
  { label: "Exploring", value: "Practical AI, automation, and BI opportunities", icon: Bot },
  { label: "Building", value: "Connected systems that simplify operations", icon: Cloud },
];
