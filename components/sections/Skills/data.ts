export interface Skills {
  name: string;
  src: string;
}

export interface SkillsSectionData {
  title: string;
  description: string;
  skills: Skills[];
}

export const skillsData: SkillsSectionData = {
  title: "Skills",
  description:
    "I have strong skills in HTML5, CSS3, and JavaScript, with hands-on experience in React, Next.js, and Tailwind CSS for building modern, responsive web applications. I also have working knowledge of TypeScript, PHP, and Python, along with version control using Git and GitHub, and I develop primarily using VS Code.",
  skills: [
    { name: "HTML5", src: "/icons/html-logo.svg" },
    { name: "CSS3", src: "/icons/css-logo.svg" },
    { name: "JavaScript", src: "/icons/javascript-logo.svg" },
    { name: "TypeScript", src: "/icons/typescript-logo.svg" },
    { name: "React", src: "/icons/react-logo.svg" },
    { name: "Next.js", src: "/icons/nextjs-logo.svg" },
    { name: "Tailwind CSS", src: "/icons/tailwind-css-logo.svg" },
    { name: "PHP", src: "/icons/php-logo.svg" },
    { name: "MySQL", src: "/icons/mysql-logo.svg" },
    { name: "Python", src: "/icons/python-logo.svg" },
    { name: "Git", src: "/icons/git-logo.svg" },
    { name: "GitHub", src: "/icons/github-logo.svg" },
  ],
} as const;

// Legacy export for backward compatibility
export const skills = skillsData.skills;
