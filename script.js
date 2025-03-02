// ==========================================
// Constants and Configuration
// ==========================================

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "HYJ9rNlhhrXT4tlMY";
const EMAILJS_SERVICE_ID = "service_tjk4vcw";
const EMAILJS_TEMPLATE_ID = "template_76cpx2c";

// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);
});

// ==========================================
// Data Objects
// ==========================================

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
      "A simple portfolio project for beginners, featuring a single-page layout with placeholder information, focusing on basic web structure and styling.",
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
      "A user-friendly task manager with local storage, allowing task management with dark mode and smooth animations for a better experience.",
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
    description:
      "A simple and exciting Ping Pong game using OOP and Turtle, featuring smooth controls, responsive ball physics, and competitive score tracking.",
    tags: ["Python", "Turtle", "OOP"],
    links: {
      github: "",
      demo: "",
    },
  },
];

// Countries Code Data
const countryCodes = [
  { name: "Afghanistan", code: "AF", dialCode: "+93" },
  // ... (rest of country codes remain unchanged)
  { name: "Zimbabwe", code: "ZW", dialCode: "+263" },
];

// ==========================================
// Phone Input Initialization & Handling
// ==========================================

function initializePhoneInput() {
  const phoneInput = document.querySelector("#phone");
  if (!phoneInput) return;

  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "us",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });

  handlePhoneValidation(phoneInput, iti);
  handlePhoneCountryUpdate(phoneInput, iti);
}

function handlePhoneValidation(phoneInput, iti) {
  const contactForm = document.querySelector("#contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!iti.isValidNumber()) {
      alert("Please enter a valid phone number.");
    }
  });
}

function handlePhoneCountryUpdate(phoneInput, iti) {
  phoneInput.addEventListener("input", function () {
    const number = iti.getNumber();
    const countryData = iti.getSelectedCountryData();

    if (number) {
      const foundCountry = countryCodes.find((country) =>
        number.startsWith(country.dialCode.replace("+", ""))
      );

      if (foundCountry && foundCountry.code.toLowerCase() !== countryData.iso2) {
        iti.setCountry(foundCountry.code.toLowerCase());
      }
    }
  });
}

// ==========================================
// Animation Functions
// ==========================================

function initializeAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in-left");
  
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

  animatedElements.forEach((element) => observer.observe(element));
}

// ==========================================
// Skills Display Functions
// ==========================================

function displaySkills() {
  const skillsList = document.getElementById("skills-list");
  if (!skillsList) return;

  skillsData.forEach((skill) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");

    img.src = skill.image;
    img.alt = skill.name;
    span.textContent = skill.name;

    li.appendChild(img);
    li.appendChild(span);
    skillsList.appendChild(li);
  });
}

// ==========================================
// Projects Display Functions
// ==========================================

function displayProjects() {
  const projectsList = document.getElementById("projects-list");
  if (!projectsList) return;

  projectsData.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsList.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const projectCard = document.createElement("li");
  projectCard.className = "project-card";

  const projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectImage.alt = project.title;

  const projectContent = document.createElement("div");
  projectContent.className = "project-card-content";

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectDescription.className = "description";

  const tagsList = document.createElement("ul");
  tagsList.className = "tags";
  tagsList.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");

  const linksList = document.createElement("ul");
  linksList.className = "links";
  linksList.innerHTML = `
    <li>
      <a href="${project.links.github}" target="_blank" rel="noopener noreferrer">
        <img src="images/github.svg" alt="GitHub" class="icon" /> Code
      </a>
    </li>
    <li>
      <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">
        <img src="images/external-link.svg" alt="Live Demo" class="icon" /> Live Demo
      </a>
    </li>
  `;

  projectContent.append(projectTitle, projectDescription, tagsList, linksList);
  projectCard.append(projectImage, projectContent);

  return projectCard;
}

// ==========================================
// Form Handling Functions
// ==========================================

function initializeForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
  });
}

function checkWordLimit(textarea, limit) {
  const words = textarea.value.trim().split(/\s+/);
  if (words.length > limit) {
    textarea.value = words.slice(0, limit).join(" ");
  }
  document.getElementById("count-words").textContent = `${words.length}/300 words`;
}

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  let isValid = true;

  // Validation checks
  if (!validateField(name, (value) => value.trim() !== "")) isValid = false;
  if (!validateField(email, (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) isValid = false;
  if (!validateField(phone, (value) => window.intlTelInput(phone).isValidNumber())) isValid = false;
  if (!validateField(message, (value) => value.trim() !== "")) isValid = false;

  if (isValid) {
    sendMail();
  }
}

function validateField(element, validationFn) {
  const isValid = validationFn(element.value);
  element.style.borderColor = isValid ? "var(--primary-color)" : "red";
  return isValid;
}

function sendMail() {
  const formData = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
    .then(
      function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function(error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      }
    );
}

// ==========================================
// Initialize Everything
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
  initializePhoneInput();
  initializeAnimations();
  displaySkills();
  displayProjects();
  initializeForm();
});