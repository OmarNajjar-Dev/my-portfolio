import SkillCard from "@/components/ui/SkillCard";
import { skills } from "./data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="space-y-2">
      {/* Section Header with animation */}
      <AnimateOnScroll direction="left">
        <header>
          <h2 id="skills-title" className="text-3xl md:text-4xl font-semibold">
            Skills
          </h2>

          <p className="text-sm text-gray-800 leading-relaxed mb-5">
            I have strong skills in HTML5, CSS3, and JavaScript, with hands-on
            experience in React, Next.js, and Tailwind CSS for building modern,
            responsive web applications. I also have working knowledge of
            TypeScript, PHP, and Python, along with version control using Git
            and GitHub, and I develop primarily using VS Code.
          </p>
        </header>
      </AnimateOnScroll>

      {/* Skills Grid */}
      <ul
        aria-label="List of my skills"
        className="skills-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {skills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} direction="up" delay={index * 100}>
            <SkillCard skill={skill} index={index} />
          </AnimateOnScroll>
        ))}
      </ul>

      {/* Footer text */}
      <footer className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-100">
        <p className="text-sm text-gray-600">
          I&apos;m constantly expanding my skill set and staying up-to-date with
          the latest web technologies and best practices.
        </p>
      </footer>
    </section>
  );
}

export default SkillsSection;
