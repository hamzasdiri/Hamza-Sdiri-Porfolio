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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unty_logo,
  water_sec_logo,
  aimino_logo
} from "../assets";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " Software Engineer",
    company_name: "Aimino Tech GmbH",
    icon: aimino_logo,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developed a Chrome extension for AI-driven LinkedIn outreach, boosting productivity.",
      "Redesigned Aimino’s web app UI to fix 50+ critical issues and enhance responsiveness across all devices.",
      "Developed backend workflows for automating LinkedIn messaging, minimizing manual effort.",
      "Enhanced inbox functionality with lead filtering, an AI-driven template section, and AI lead analysis for personalized engagement.",
      "Built real-time dashboards to visualize LinkedIn metrics, including message activity, requests, and user engagement",
      "Enhanced the backend with scalable queries and efficient data retrieval.",
      "Facilitated Pipedrive CRM synchronization for seamless lead management.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "UNTY",
    icon: unty_logo,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Optimized content workflows and improved user interactions to enhance platform efficiency.",
      "Designed and maintained a user-friendly backend system for effective platform management."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "UNTY",
    icon: unty_logo,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Collaborated on the development of an engaging, user-friendly website as part of a team.",
      "Designed intuitive screens to ensure a seamless user experience.",
      "Developed custom APIs to enhance functionality and improve load times for better overall performance.",
      "Worked on integrating third-party APIs to optimize data flow and expand website capabilities.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "WaterSec",
    icon: water_sec_logo,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jun 2023",
    points: [
      "Created a cross-platform app for water consumption insights with real-time tracking.",
      "Co-designed a user-friendly and visually appealing app interface, enhancing overall user experience.",
      "Enhanced app functionality, fine-tuning features for better user satisfaction."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "WaterSec",
    icon: water_sec_logo,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Enhanced the website’s front end by addressing responsiveness issues.",
      "Improved site design and fixed bugs to provide an exceptional user experience.",
      "Integrated real-time data using Socket.io, enhancing data accuracy and interactivity."
    ],
  },
];

const testimonials = [
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

const projects = [
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
