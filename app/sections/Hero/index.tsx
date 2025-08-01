// app/sections/Hero/index.tsx
import Image from "next/image";
import { Code2 as Code, PenLine, Mail } from "lucide-react";
import HeroLink from "./HeroLink";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center gap-5"
    >
      {/* text column with fade-in-left animation */}
      <AnimateOnScroll direction="left">
        <div className="space-y-2">
          <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold">
            Hi, I&apos;m Omar
            <Image
              src="/icons/waving-hand.svg"
              alt="Waving hand"
              width={32}
              height={32}
              className="inline-block animate-bounce transform rotate-12 hover:rotate-0 transition-transform duration-300"
            />
          </h1>

          {/* description */}
          <p className="text-sm text-gray-800 leading-relaxed mb-5">
            I am a Computer Science student and aspiring software engineer with a strong foundation in modern web development. My expertise includes HTML5, CSS3, JavaScript, and practical experience with React, Next.js, and Tailwind CSS to build fast, scalable applications. I also have working knowledge of TypeScript, PHP, and Python, alongside solid version control skills with Git and GitHub. Certified twice by NavyBits, including recognition for building this portfolio and delivering real-world projects, I am passionate about continuous learning and aim to grow as a software engineer creating innovative solutions at a leading tech company.
          </p>

          <nav aria-label="Hero shortcuts">
            <ul className="flex flex-wrap gap-4">
              <li>
                <HeroLink
                  href="#skills"
                  text="Skills"
                  icon={<Code className="w-4 h-4" />}
                />
              </li>
              <li>
                <HeroLink
                  href="#testimony"
                  text="Testimony"
                  icon={<PenLine className="w-4 h-4" />}
                />
              </li>
              <li>
                <HeroLink
                  href="#contact"
                  text="Contact"
                  icon={<Mail className="w-4 h-4" />}
                />
              </li>
            </ul>
          </nav>
        </div>
      </AnimateOnScroll>

      {/* image column with fade-in-up animation */}
      <AnimateOnScroll direction="up" delay={200}>
        <figure className="shrink-0 self-center w-[300px] h-[300px]">
          <Image
            src="/images/profile.jpg"
            alt="Omar Najjar wearing a graduation cap and gown"
            width={300}
            height={300}
            priority
            className="w-full h-full rounded-full object-cover transition-all duration-300 hover:scale-110"
          />
        </figure>
      </AnimateOnScroll>
    </section>
  );
}
