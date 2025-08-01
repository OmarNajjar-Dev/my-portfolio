export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "small-portfolio",
    title: "Small Portfolio",
    description:
      "A simple portfolio project for beginners, featuring a single-page layout with placeholder information, focusing on basic web structure and styling.",
    image: "/images/projects/small-portfolio.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/OmarNajjar-Dev/small-portfolio",
    liveUrl: "https://omarnajjar-dev.github.io/small-portfolio/",
  },
  {
    id: "todo-list",
    title: "To Do List",
    description:
      "A user-friendly task manager with local storage, allowing task management with dark mode and smooth animations for a better experience.",
    image: "/images/projects/to-do-list.webp",
    technologies: ["HTML", "SCSS", "JavaScript"],
    codeUrl: "https://github.com/OmarNajjar-Dev/todo-list",
    liveUrl: "https://task-master-bice.vercel.app/",
    featured: true,
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description:
      "A simple yet engaging Snake game built with OOP and Turtle. Features multiple food types appearing randomly and increasing difficulty as the score rises.",
    image: "/images/projects/snake-game.webp",
    technologies: ["Python", "Turtle", "OOP"],
    codeUrl: "https://github.com/OmarNajjar-Dev/snake-game",
    liveUrl: "https://www.mediafire.com/file/5u4fsgqcp79njpj/Snake+Game.exe/file",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A bilingual weather application with English and Arabic support, featuring RTL layout, real-time weather data, dynamic backgrounds, and temperature unit switching. Built with React.js and Tailwind CSS.",
    image: "/images/projects/weather-app.webp",
    technologies: ["React", "API", "Tailwind"],
    codeUrl: "https://github.com/OmarNajjar-Dev/weather-app",
    liveUrl: "https://weather-app-teal-zeta-67.vercel.app/",
  },
  {
    id: "shop-hub",
    title: "ShopHub",
    description:
      "A modern e-commerce web application featuring user authentication, product catalog with filtering, shopping cart system, favorites management, and multi-step checkout. Built with React.js, Tailwind CSS, and Framer Motion.",
    image: "/images/projects/shop-hub.webp",
    technologies: ["React", "Tailwind"],
    codeUrl: "https://github.com/OmarNajjar-Dev/ShopHub",
    liveUrl: "https://shop-kkre3g8yf-omarnajjar-devs-projects.vercel.app/",
    featured: true,
  },
];
