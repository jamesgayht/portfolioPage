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
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  pathfindingvisualizer,
  portfolipage,
  dategenie,
  visa,
  toluna,
  ascott,
  java,
  angular,
  jquery,
  mysql,
  redis,
} from "../assets";

export const githubRepoNames = [
  "portfolioPage",
  "DateGenie",
  "jamesgayht.github.io",
];

export const navLinks = [
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

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "Backend Engineering",
    icon: backend,
  },
  {
    title: "Frontend Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Associate Systems Analyst",
    company_name: "Visa",
    icon: visa,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Migrated dashboard user interface from React to Angular codebase to promote ease maintenance",
      "Crafted API endpoints following REST protocols for data retrieval & interaction with CRUD operations",
      "Compose docker files for seamless building, testing & deployment of applications",
      "Developed an application to reduce SUP for Hack Singapore 2023. Github Repo: https://github.com/justsaykk/kenchukky",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Toluna",
    icon: toluna,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - June 2022",
    points: [
      "Managed projects lifecycle from commission to completion while maintaining an average client satisfaction score of 9.2/10 for 1.5 years",
      "Served as the POC for clients globally to manage timelines, budgets & quality of deliverables on multiple projects simultaneously",
      "Spearheaded survey logic planning, survey recruitment, data analysis for clients such as DBS, Unilever and HP",
    ],
  },
  {
    title: "Management Associate",
    company_name: "The Ascott Limited",
    icon: ascott,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - September 2020",
    points: [
      "Managed the customer enquiry mailbox for ASR helping to achieve 1 million members in its inauguration year",
      "Attached to Philippines to curate marketing campaigns and conduct mystery shopping on Myron's reporting directly to the Regional GM",
      "Assisted in curating lyf's pre-launch marketing campaigns while running pre-opening operations",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

export class Project {
  constructor(name, description, tags, image, source_code_link) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.image = image;
    this.source_code_link = source_code_link;
  }
  name;
  description;
  tags;
  image;
  source_code_link;
}

export class Tag {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  name;
  color;
}

export const tagColors = [
  "blue-text-gradient",
  "orange-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
];

export const projectImages = [portfolipage, dategenie, pathfindingvisualizer];

export { services, technologies, experiences, testimonials };
