// ==========================================
// EmailJS Configuration
// ==========================================

const EMAIL_CONFIG = {
  PUBLIC_KEY: "HYJ9rNlhhrXT4tlMY",
  SERVICE_ID: "service_tjk4vcw",
  TEMPLATE_ID: "template_76cpx2c",
};

// ==========================================
// Skills & Projects Data
// ==========================================

const SKILLS = [
  { name: "HTML", image: "images/html-logo.webp" },
  { name: "CSS", image: "images/css-logo.webp" },
  { name: "JavaScript", image: "images/javascript-logo.webp" },
  { name: "Node.js", image: "images/node-logo.webp" },
  { name: "React.js", image: "images/react-logo.webp" },
  { name: "Python", image: "images/python-logo.svg" },
];

const PROJECTS = [
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
      demo: "https://www.mediafire.com/file/5u4fsgqcp79njpj/Snake+Game.exe/file",
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

// ==========================================
// Phone Input Setup
// ==========================================

let globalIti = null;

const PHONE_CONFIG = {
  initialCountry: "lb",
  preferredCountries: ["lb", "us", "ca"],
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  strictMode: true,
  separateDialCode: true,
  allowDropdown: true,
};

// ==========================================
// DOM Event Listeners
// ==========================================

const EVENT_LISTENERS = {
  onDOMLoad: () => {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
    initializePhoneInput();
    handlePhoneValidation(globalIti);
    initializeAnimations();
    displaySkills();
    displayProjects();
    initializeForm();
  },

  onFormSubmit: (form) => {
    form.addEventListener("submit", validateForm);
  },

  onPhoneValidation: (contactForm, iti) => {
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!iti.isValidNumber()) {
        alert("Please enter a valid phone number.");
      }
    });
  },

  onWordCount: (textarea, limit) => {
    textarea.addEventListener("input", () => {
      FORM.checkWordLimit(textarea, limit);
    });
  },
};

// ==========================================
// Animation Handlers
// ==========================================

const ANIMATION = {
  init: () => {
    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left");
    const observer = new IntersectionObserver(ANIMATION.handleIntersection, {
      threshold: 0.1,
    });
    elements.forEach((element) => observer.observe(element));
  },

  handleIntersection: (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
};

// ==========================================
// Skills Display
// ==========================================

const SKILLS_DISPLAY = {
  render: () => {
    const skillsList = document.getElementById("skills-list");
    if (!skillsList) return;

    SKILLS.forEach((skill) => {
      const li = SKILLS_DISPLAY.createSkillElement(skill);
      skillsList.appendChild(li);
    });
  },

  createSkillElement: (skill) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");

    img.src = skill.image;
    img.alt = skill.name;
    span.textContent = skill.name;

    li.append(img, span);
    return li;
  },
};

// ==========================================
// Projects Display
// ==========================================

const PROJECTS_DISPLAY = {
  render: () => {
    const projectsList = document.getElementById("projects-list");
    if (!projectsList) return;

    PROJECTS.forEach((project) => {
      const card = PROJECTS_DISPLAY.createProjectCard(project);
      projectsList.appendChild(card);
    });
  },

  createProjectCard: (project) => {
    const card = document.createElement("li");
    card.className = "project-card";

    const image = PROJECTS_DISPLAY.createImage(project);
    const content = PROJECTS_DISPLAY.createContent(project);

    card.append(image, content);
    return card;
  },

  createImage: (project) => {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    return img;
  },

  createContent: (project) => {
    const content = document.createElement("div");
    content.className = "project-card-content";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;
    description.className = "description";

    const tags = PROJECTS_DISPLAY.createTags(project.tags);
    const links = PROJECTS_DISPLAY.createLinks(project.links);

    content.append(title, description, tags, links);
    return content;
  },

  createTags: (tags) => {
    const ul = document.createElement("ul");
    ul.className = "tags";
    ul.innerHTML = tags.map((tag) => `<li>${tag}</li>`).join("");
    return ul;
  },

  createLinks: (links) => {
    const ul = document.createElement("ul");
    ul.className = "links";
    ul.innerHTML = `
      <li>
        <a href="${links.github}" target="_blank" rel="noopener noreferrer">
          <img src="images/github.svg" alt="GitHub" class="icon" /> Code
        </a>
      </li>
      <li>
        <a href="${links.demo}" target="_blank" rel="noopener noreferrer">
          <img src="images/external-link.svg" alt="Live Demo" class="icon" /> Live Demo
        </a>
      </li>
    `;
    return ul;
  },
};

// ==========================================
// Form Handling
// ==========================================

const FORM = {
  validate: () => {
    const fields = {
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      phone: document.getElementById("phone"),
      message: document.getElementById("message"),
    };

    const validations = {
      name: (value) => value.trim() !== "",
      email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      phone: () => globalIti.isValidNumber(),
      message: (value) => value.trim() !== "",
    };

    let isValid = true;

    Object.entries(fields).forEach(([field, element]) => {
      if (!FORM.validateField(element, validations[field])) {
        isValid = false;
      }
    });

    if (isValid) {
      FORM.send();
    } else {
      FORM.handleInvalidPhone(fields.phone);
    }
  },

  validateField: (element, validationFn) => {
    const isValid = validationFn(element.value);
    element.style.borderColor = isValid ? "var(--primary-color)" : "red";
    return isValid;
  },

  handleInvalidPhone: (phoneElement) => {
    const countryData = globalIti.getSelectedCountryData();
    if (!phoneElement.value.includes("+" + countryData.dialCode)) {
      phoneElement.value = "+" + countryData.dialCode + phoneElement.value;
    }
  },

  send: () => {
    const formData = {
      from_name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, formData)
      .then(
        () => {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
          document.getElementById("phone").value = "";
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  },

  checkWordLimit: (textarea, limit) => {
    let words = textarea.value.trim().match(/\S+/g) || [];

    if (words.length > limit) {
      textarea.value = words.slice(0, limit).join(" ");
      words = words.slice(0, limit);
    }

    document.getElementById(
      "count-words"
    ).textContent = `${words.length}/${limit} words`;
  },
};

// ==========================================
// Initialize Application
// ==========================================

function initializePhoneInput() {
  const phoneInput = document.querySelector("#phone");
  if (!phoneInput) return;
  globalIti = window.intlTelInput(phoneInput, PHONE_CONFIG);
}

function handlePhoneValidation(iti) {
  const contactForm = document.querySelector("#contact-form");
  EVENT_LISTENERS.onPhoneValidation(contactForm, iti);
}

function initializeAnimations() {
  ANIMATION.init();
}

function displaySkills() {
  SKILLS_DISPLAY.render();
}

function displayProjects() {
  PROJECTS_DISPLAY.render();
}

function initializeForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  EVENT_LISTENERS.onFormSubmit(form);

  const messageTextarea = document.getElementById("message");
  if (messageTextarea) {
    EVENT_LISTENERS.onWordCount(messageTextarea, 300);
  }
}

function validateForm() {
  FORM.validate();
}

document.addEventListener("DOMContentLoaded", EVENT_LISTENERS.onDOMLoad);
