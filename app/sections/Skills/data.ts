export interface Skills {
  name: string;
  src: string;
}

export const skills: Skills[] = [
  { name: "HTML5", src: "/icons/html-logo.svg" },
  { name: "CSS3", src: "/icons/css-logo.svg" },
  { name: "JavaScript", src: "/icons/javascript-logo.svg" },
  { name: "React", src: "/icons/react-logo.svg" },
  { name: "Next.js", src: "/icons/nextjs-logo.svg" },
  { name: "Tailwind CSS", src: "/icons/tailwind-css-logo.svg" },
  { name: "TypeScript", src: "/icons/typescript-logo.svg" },
  { name: "PHP", src: "/icons/php-logo.svg" },
  { name: "Python", src: "/icons/python-logo.svg" },
  { name: "Git", src: "/icons/git-logo.svg" },
  { name: "GitHub", src: "/icons/github-logo.svg" },
  { name: "VS Code", src: "/icons/vscode-logo.svg" },
] as const;
