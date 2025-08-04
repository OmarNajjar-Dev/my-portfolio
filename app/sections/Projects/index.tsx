import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "./data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-4 md:py-6 lg:py-8"
    >
      <header className="mb-6 md:mb-8 lg:mb-10">
        <h2
          id="projects-title"
          className="text-3xl text-center md:text-4xl font-semibold mb-3"
        >
          {projectsData.title}
        </h2>
        <p className="text-sm text-center text-gray-800 leading-relaxed max-w-3xl mx-auto">
          {projectsData.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
        {projectsData.projects.map((project, index) => (
          <AnimateOnScroll key={project.id} direction="up" delay={index * 150}>
            <ProjectCard project={project} index={index} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
