import {
  backend,
  bluetree,
  creator,
  e3tool,
  git,
  hellokit,
  javascript,
  mobile,
  reactjs,
  redux,
  tailwind,
  typescript,
  ultracker,
  viseo,
  web,
} from "../assets";
import aiIcon from "../assets/ai.svg";
import azuremaps from "../assets/tech/azuremaps.svg";
import highcharts from "../assets/tech/highcharts.svg";
import azuredevops from "../assets/tech/azuredevops.svg";
import csharp from "../assets/tech/csharp.svg";
import dotnet from "../assets/tech/dotnet.svg";
import expo from "../assets/tech/expo.svg";
import copilot from "../assets/tech/githubcopilot.svg";
import jest from "../assets/tech/jest.svg";
import maestro from "../assets/tech/maestro.svg";
import mcp from "../assets/tech/modelcontextprotocol.svg";
import mui from "../assets/tech/mui.svg";
import playwright from "../assets/tech/playwright.svg";
import postgresql from "../assets/tech/postgresql.svg";
import reactHookForm from "../assets/tech/reacthookform.svg";
import tanstackQuery from "../assets/tech/reactquery.svg";
import storybook from "../assets/tech/storybook.svg";
import turborepo from "../assets/tech/turborepo.svg";
import vite from "../assets/tech/vite.svg";
import vitest from "../assets/tech/vitest.svg";
import zod from "../assets/tech/zod.svg";
import zustand from "../assets/tech/zustand.svg";

export type NavLink = {
  id: string;
  title: string;
};

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "ai",
    title: "AI",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

type Service = {
  title: string;
  icon: string;
  wave?: boolean;
};

const services: Service[] = [
  {
    title: "ReactJS Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Design System Engineer",
    icon: creator,
  },
  {
    title: "Fullstack .NET Developer",
    icon: backend,
  },
  {
    title: "AI-Assisted Engineer",
    icon: aiIcon,
    wave: true,
  },
];

export const aiPractices = [
  "Following AI news and best practices, and sharing them to help the team improve its skills.",
  "Fine-tuning my Copilot / Claude harness: custom skills, instructions and approval-gated commands.",
  "Contributing to Nexans' shared AI repositories: proposing skills, reviewing them, and creating new ones when needed.",
  "Shipping an AI MCP server with the HelloKit UI design system.",
];

type Technolgy = {
  name: string;
  icon: string;
};

const technologies: Technolgy[] = [
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "React 19", icon: reactjs },
  { name: "React Native", icon: reactjs },
  { name: "Expo", icon: expo },
  { name: "Redux Toolkit", icon: redux },
  { name: "Zustand", icon: zustand },
  { name: "TanStack Query", icon: tanstackQuery },
  { name: "React Hook Form", icon: reactHookForm },
  { name: "Zod", icon: zod },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MUI", icon: mui },
  { name: "Storybook", icon: storybook },
  { name: "C#", icon: csharp },
  { name: ".NET 10", icon: dotnet },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Vitest", icon: vitest },
  { name: "Jest", icon: jest },
  { name: "Playwright", icon: playwright },
  { name: "Maestro", icon: maestro },
  { name: "Vite", icon: vite },
  { name: "Turborepo", icon: turborepo },
  { name: "Git", icon: git },
  { name: "Azure DevOps", icon: azuredevops },
  { name: "Azure Maps", icon: azuremaps },
  { name: "Highcharts", icon: highcharts },
  { name: "GitHub Copilot", icon: copilot },
  { name: "MCP", icon: mcp },
];

export const items = [
  {
    title: "Since 2025",
    cardTitle: "Nexans - Ultracker v4, e3Tool & HelloKit UI v2",
    cardSubtitle: "Confirmed Software Engineer - VISEO (latest mission, 1.5 yrs)",
    logo: viseo,
    tags: ["React 19", "React Native", "Expo", ".NET 10", "Azure DevOps", "Storybook"],
    cardDetailedText:
      "Ultracker v4 (web & mobile): features on the Turborepo monorepo of the IoT cable drum tracking platform with React 19 and React Native / Expo 57: IoT beacon scan and association flows, CASL role-based permissions, Azure Maps, Okta / SecureStore authentication, Azure DevOps CI/CD with Playwright / Maestro E2E tests. \n e3Tool (web & API): financial and decarbonization scenario planning with ROCE / OFCF simulations, Highcharts, Excel exports and real-time notifications (React 19, .NET 10, EF Core, PostgreSQL). \n HelloKit UI v2: shared Web & React Native Design System, Storybook / Guidelines and AI MCP server.",
  },
  {
    title: "Jan 2025 - Jun 2025",
    cardTitle: "Cegid (client: CNRS)",
    cardSubtitle: "Expense management mobile app",
    logo: viseo,
    tags: ["React Native", "Offline mode"],
    cardDetailedText:
      "Designed and developed the React Native expense management mobile application for CNRS: receipt scanning and entry, approval workflows, offline mode and API synchronization.",
  },
  {
    title: "Sep 2023 - 2024",
    cardTitle: "LVMH (Celine) & Orange",
    cardSubtitle: "Front-End web applications",
    logo: viseo,
    tags: ["React", "TypeScript", "Design System"],
    cardDetailedText:
      "LVMH (Celine): migration and modernization of web interfaces to React / TypeScript. \n Orange: React Front-End features built on Orange's internal Design System.",
  },
  {
    title: "Late 2022 - 2024",
    cardTitle: "Nexans - Ultracker V1 Mobile, HelloKit UI Mobile & GridSensing",
    cardSubtitle: "Mobile & Front-End - VISEO",
    logo: viseo,
    tags: ["React Native", "Expo", ".NET", "Design System"],
    cardDetailedText:
      "HelloKit UI Mobile & Ultracker V1 Mobile (2024): created the mobile Design System (@nexans/react-native-ui-kit) and the React Native / Expo V1 mobile app for drum tracking and geolocation. \n GridSensing (2022 - 2023): real-time monitoring web app for intercontinental and subsea cables (React / TypeScript / .NET).",
  },
  {
    title: "March 2022 - August 2022",
    cardTitle: "Fullstack Software Internship",
    cardSubtitle: "VISEO",
    logo: viseo,
    tags: ["ReactJS", "TypeScript"],
    cardDetailedText:
      "Final-year internship (6 months): designed and developed an internal web application with ReactJS / TypeScript.",
  },
  {
    title: "2020 December - 2021 August",
    cardTitle: "Software Engineer (Algeria)",
    cardSubtitle: "Bluetree Digital",
    logo: bluetree,
    tags: ["ReactJS", "React Native", "E-Commerce"],
    cardDetailedText:
      "Permanent position: developed a web and mobile E-Commerce platform with ReactJS / React Native.",
  },
];

type Testimonials = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

const testimonials: Testimonials[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export type Tag = {
  name: string;
  color: string;
};

interface IProject {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  sourceCodeLink: string;
  details: string[];
}

const projects: IProject[] = [
  {
    name: "E3 Tool",
    description:
      "Internal web app for simulating greenhouse-gas emission trajectories by business group, unit and plant, comparing scenarios against reduction targets.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "dotnet", color: "pink-text-gradient" },
    ],
    image: e3tool,
    sourceCodeLink: "https://github.com/",
    details: [
      "Designed and developed a financial and decarbonization scenario planning platform (web and API) over one year.",
      "Purchasing / recycled-materials and transport levers, with ROCE / OFCF simulations.",
      "Interactive financial charts (Highcharts), custom Excel exports and a real-time notification engine.",
      "Stack: React 19 (TanStack Query, Zustand, React Hook Form) and .NET 10 (Clean Architecture, EF Core, PostgreSQL).",
    ],
  },
  {
    name: "Ultracker",
    description:
      "Logistics tracking platform with a guided multi-step flow to create return requests: contact, transport choice, items and summary. Web and mobile UI/UX mockup, no private data.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "dotnet", color: "green-text-gradient" },
      { name: "azure", color: "pink-text-gradient" },
      { name: "react-native", color: "blue-text-gradient" },
    ],
    image: ultracker,
    sourceCodeLink: "https://github.com/",
    details: [
      "Web and mobile platform for IoT-based cable drum and stock tracking and traceability, built in a Turborepo monorepo (React 19 and React Native / Expo 57).",
      "Redesigned the mobile IoT Beacon scanning and association / dissociation workflows.",
      "Hierarchical role-based permissions (CASL), Azure Maps integration, resilient Okta / SecureStore authentication.",
      "Azure DevOps CI/CD with Playwright / Maestro E2E tests and Bruno API collections.",
      "Earlier (2024): built Ultracker V1 Mobile in React Native / Expo for drum tracking and geolocation.",
    ],
  },
  {
    name: "Hello Kit",
    description:
      "React design system and documentation site: reusable components, variants, states, accessibility and design tokens, with a mobile component kit. Web and mobile UI/UX mockup.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "storybook", color: "green-text-gradient" },
      { name: "design-system", color: "pink-text-gradient" },
      { name: "react-native", color: "blue-text-gradient" },
    ],
    image: hellokit,
    sourceCodeLink: "https://github.com/",
    details: [
      "Created and introduced the mobile design system, then evolved the shared cross-platform component library (Web and React Native).",
      "Accessibility work, Storybook / Guidelines documentation site.",
      "Integration of an AI MCP server so developers can query components, themes and usage guidance.",
    ],
  },
];

export { projects,services, technologies, testimonials };
