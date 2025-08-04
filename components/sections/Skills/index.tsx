import SkillCard from "@/components/ui/SkillCard";
import { skillsData } from "./data";
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
            {skillsData.title}
          </h2>

          <p className="text-sm text-gray-800 text-center leading-relaxed max-w-5xl mx-auto">
            {skillsData.description}
          </p>
        </header>
      </AnimateOnScroll>

      {/* Skills Grid */}
      <ul
        aria-label="List of my skills"
        className="skills-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
      >
        {skillsData.skills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} direction="up" delay={index * 100}>
            <SkillCard skill={skill} index={index} />
          </AnimateOnScroll>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;
