import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "./data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="space-y-2"
    >
      <header>
        <h2 id="projects-title" className="text-3xl md:text-4xl font-semibold">
          Projects
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed mb-5">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} direction="up" delay={index * 150}>
            <ProjectCard project={project} index={index} />
          </AnimateOnScroll>
        ))}
      </div>

      <footer className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-100">
        <p className="text-sm text-gray-600">
          These projects demonstrate my ability to work with various
          technologies and create functional, user-friendly applications.
        </p>
      </footer>
    </section>
  );
}
