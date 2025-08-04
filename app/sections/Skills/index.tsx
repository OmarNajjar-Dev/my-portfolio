import SkillCard from "@/components/ui/SkillCard";
import { skills } from "./data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-4 md:py-6 lg:py-8"
    >
      {/* Section Header with animation */}
      <AnimateOnScroll direction="left">
        <header className="mb-6 md:mb-8 lg:mb-10">
          <h2
            id="skills-title"
            className="text-3xl text-center md:text-4xl font-semibold mb-3"
          >
            Skills
          </h2>

          <p className="text-sm text-gray-800 text-center leading-relaxed max-w-5xl mx-auto">
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
        className="skills-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
      >
        {skills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} direction="up" delay={index * 100}>
            <SkillCard skill={skill} index={index} />
          </AnimateOnScroll>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;
