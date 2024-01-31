import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  java,
  spring,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  vuejs,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

type Service = {
  title: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "ReactJS Developer",
    icon: web,
  },
  {
    title: "VueJS Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
  {
    title: "Junior Backend Developer",
    icon: backend,
  },
];

type Technolgy = {
  name: string;
  icon: string;
};

const technologies: Technolgy[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const timelines = [
  {
    title: "Since september 2022",
  },
  {
    title: "March 2022 - August 2022",
  },
  {
    title: "2020 December - 2021 August",
  },
];

export const items = [
  {
    title: "Since september 2022",
    cardTitle: "VISEO",
    cardSubtitle: "Frontend Software Engineer",
    cardDetailedText:
      "Developing and maintaining web applications using React.js and other related technologies Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. \n Implementing responsive design and ensuring cross-browser compatibility. Participating in code reviews and providing constructive feedback to other developers.",
  },
  {
    title: "March 2022 - August 2022",
    cardTitle: "FullStack Software Internship",
    cardSubtitle: "VISEO",
    cardDetailedText:
      "Developing and maintaining web applications using React.js and other related technologies Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. \n Implementing responsive design and ensuring cross-browser compatibility. Participating in code reviews and providing constructive feedback to other developers.",
  },
  {
    title: "2020 December - 2021 August",
    cardTitle: "Web and Mobile developer",
    cardSubtitle: "Bluetree Digital",
    cardDetailedText:
      "Developing and maintaining web applications using React.js and other related technologies Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. \n Implementing responsive design and ensuring cross-browser compatibility. Participating in code reviews and providing constructive feedback to other developers.",
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
}

const projects: IProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, testimonials, projects };
