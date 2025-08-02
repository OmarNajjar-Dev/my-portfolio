export type HeroIcon = "Code2" | "PenLine" | "Mail";

export interface HeroLink {
  href: string;
  text: string;
  icon: HeroIcon;
}

export interface Hero {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  wavingHandIcon?: string;
  links?: HeroLink[];
}

export const heroData: Hero = {
  title: "Hi, I'm Omar",
  description:
    "I am a Computer Science student and aspiring software engineer with a strong foundation in modern web development. My expertise includes HTML5, CSS3, JavaScript, and practical experience with React, Next.js, and Tailwind CSS to build fast, scalable applications. I also have working knowledge of TypeScript, PHP, and Python, alongside solid version control skills with Git and GitHub. Certified twice by NavyBits, including recognition for building this portfolio and delivering real-world projects, I am passionate about continuous learning and aim to grow as a software engineer creating innovative solutions at a leading tech company.",
  image: {
    src: "/images/profile.png",
    alt: "Omar Najjar wearing a graduation cap and gown",
  },
  wavingHandIcon: "/icons/waving-hand.svg",
  links: [
    {
      href: "#skills",
      text: "Skills",
      icon: "Code2",
    },
    {
      href: "#testimony",
      text: "Testimony",
      icon: "PenLine",
    },
    {
      href: "#contact",
      text: "Contact",
      icon: "Mail",
    },
  ],
} as const;
