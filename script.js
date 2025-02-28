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
    title: "Project One",
    image: "images/project1.webp",
    description: "Description of project one goes here.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/username/project1",
      demo: "https://demo-link.com",
    },
  },
  // Add more projects as needed
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

// Skills section
const skillsList = document.querySelector(".skills-list");

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

// Form validation and submission will be added later
