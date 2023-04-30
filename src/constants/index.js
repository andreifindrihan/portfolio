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
  nextjs,
  jest,
  rts,
  materialui,
  git,
  graphql,
  bws,
  accesa,
  pentalog,
  carrent,
  jobit,
  tripguide,
  threejs,
  feedbackUser1,
  feedbackUser2,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Material UI",
    icon: materialui,
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
    name: "Jest",
    icon: jest,
  },
  {
    name: "React Testing Library",
    icon: rts,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    companyName: "Blue Wire Software",
    icon: bws,
    iconBg: "#383E56",
    date: "March 2019 - May 2021",
    points: [
      "Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings.",
      "Utilized HTML, CSS, and JavaScript to create various responsive landing pages for both company and client.",
      "Rebuilt 2-year-old ecommerce application in React 16 and Redux with full user experience redesign.",
      "articipated in product releases and code reviews with 2 senior developers and team leads",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Accesa",
    icon: accesa,
    iconBg: "#E6DEDD",
    date: "May 2021 - October 2021",
    points: [
      "Increased the app traffic by 20% after working with UI/UX on restructuring the application home page and implementing a tutorial flow",
      "Made recommendations for new technology integration based on suitability and alignment to business goals.",
      "Increased overall test coverage to 70% for new and already existent features",
      "Created non-technical descriptions of operations and workflow to enable non-coding team to function with minimal interruption",
      "Designed and updated layouts to meet usability and performance requirements",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Pentalog",
    icon: pentalog,
    iconBg: "#383E56",
    date: "October 2021 - March 2023",
    points: [
      "Contributed to the development and documentation of new features on a high traffic ecommerce web app.",
      "Helped refactor multiple reusable components to optimize page speed and scalability",
      "Increased test coverage to 80% throughout entire codebase",
      "Pinpointed user experience issues to devise targeted suggestions for improving user experience.",
      "Created new documentation for MaterialUI that prevented the need for a 2-week onboarding course.",
      "Pinpointed user experience issues to devise targeted suggestions for improving user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the great the honor to work with Andrei in the same Squad as his Product Owner. From the begining I was amazed how quickly Andrei worked himself into a new complex codebase and how quickly he managed to add value to our team. His active participating in sprint plannings, OKR refinement or technical discussion always led to fruitful outcomes and was valued by the whole team. We will certainly miss him as key member of the team and wish him all the best in his future career.",
    name: "Florian Findeisen",
    designation: "Senior Product Owner",
    company: "Interhyp Gruppe",
    image: feedbackUser1,
  },
  {
    testimonial:
      "Andrei is a hard working developer, dedicated to both delivering results to the client as well as improving his expertise. After having him in my team for well over a year I can safely say Andrei can be a dependable member of any team, being able to shoulder anything from time consuming tasks focusing on fine details to tackling larger features, with little to no interference from the team from conception until submitting the code for review. As far as communication and work ethics go, Andrei is a great member to have in any team, bringing a strong sense of responsibility and an open to communication attitude to the table.",
    name: "Paul Ghiran",
    designation: "Team Lead & Front-End Developer",
    company: "UpLead",
    image: feedbackUser2,
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
