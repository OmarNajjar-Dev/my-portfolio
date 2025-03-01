// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
  // Replace with your EmailJS public key
  emailjs.init("YOUR_PUBLIC_KEY");
});

// Skills Data
const skillsData = [
  {
    name: "HTML",
    image: "images/html-logo.webp",
  },
  {
    name: "CSS", 
    image: "images/css-logo.webp",
  },
  {
    name: "JavaScript",
    image: "images/javascript-logo.webp",
  },
  {
    name: "Node.js",
    image: "images/node-logo.webp",
  },
  {
    name: "React.js",
    image: "images/react-logo.webp",
  },
];

// Projects Data
const projectsData = [
  {
    title: "Small Portfolio",
    image: "images/small-portfolio.webp",
    description:
      "A beginner-friendly portfolio project designed as a training exercise. It features a simple single-page layout with placeholder names and general information, focusing on basic web structure and styling.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/OmarNajjar-Dev/small-portfolio.git",
      demo: "https://omarnajjar-dev.github.io/small-portfolio/",
    },
  },

  {
    title: "To Do List",
    image: "images/to-do-list.webp", 
    description:
      "A flexible and user-friendly task manager with local storage support. It allows users to add, edit, delete, and mark tasks as done. Features include a dark mode and smooth animations for a better user experience.",
    tags: ["HTML", "SCSS", "JavaScript"],
    links: {
      github: "https://github.com/OmarNajjar-Dev/to-do-list.git",
      demo: "https://omarnajjar-dev.github.io/to-do-list/",
    },
  },

  {
    title: "Snake Game",
    image: "images/snake-game.webp",
    description:
      "A simple yet engaging Snake game built with OOP and Turtle. Features multiple food types appearing randomly and increasing difficulty as the score rises.",
    tags: ["Python", "Turtle", "OOP"],
    links: {
      github: "https://github.com/OmarNajjar-Dev/snake-game.git",
      demo: "https://github.com/OmarNajjar-Dev/snake-game.git",
    },
  },

  {
    title: "Ping Pong",
    image: "images/ping-pong.webp",
    description: "Comming Soon...",
    tags: ["Python", "Turtle", "OOP"],
    links: {
      github: "",
      demo: "",
    },
  },
];

// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
  window.intlTelInput(phoneInput, {
    preferredCountries: ["us", "gb"],
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });
}

// Animation logic
const animatedElements = document.querySelectorAll(
  ".fade-in-up, .fade-in-left"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});

// Skills Display
const skillsList = document.getElementById("skills-list");

skillsData.forEach((skill) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");

  img.src = skill.image;
  span.textContent = skill.name;

  li.appendChild(img);
  li.appendChild(span);
  skillsList.appendChild(li);
});

// Get the projects list container element from the DOM
const projectsList = document.getElementById("projects-list");

// Loop through each project in the projectsData array
projectsData.forEach((project) => {
  // Create a list item element to serve as the project card
  const projectCard = document.createElement("li");
  projectCard.className = "project-card";

  // Create the project image and set its source and alternative text
  const projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectImage.alt = project.title;

  // Create a container for the project content (title, description, tags, and links)
  const projectContent = document.createElement("div");
  projectContent.className = "project-card-content";

  // Create the project title element
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  // Create the project description element
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectDescription.className = "description";

  // Create an unordered list for the project tags
  const tagsList = document.createElement("ul");
  tagsList.className = "tags";
  tagsList.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");

  // Create an unordered list for the project links (e.g., GitHub & Live Demo)
  const linksList = document.createElement("ul");
  linksList.className = "links";
  linksList.innerHTML = `
    <li>
      <a href="${project.links.github}">
        <img src="images/github.svg" alt="GitHub" class="icon"> Code
      </a>
    </li>
    <li>
      <a href="${project.links.demo}">
        <img src="images/external-link.svg" alt="Live Demo" class="icon"> Live Demo
      </a>
    </li>
  `;

  // Append the title, description, tags, and links to the project content container
  projectContent.append(projectTitle, projectDescription, tagsList, linksList);

  // Append the image and the project content container to the project card
  projectCard.append(projectImage, projectContent);

  // Append the project card to the projects list container in the DOM
  projectsList.appendChild(projectCard);
});

// Form validation and submission will be added later