import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/components/sections/Projects/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col focus-within:outline focus-within:outline-blue-500"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1 min-h-0">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-shrink-0 h-[4.5rem]">
          {project.description}
        </p>

        {/* Technologies */}
        <div
          aria-label="Technologies used in this project"
          className="flex flex-wrap gap-2 mb-4 flex-shrink-0 min-h-[2rem]"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            aria-label={`View source code for ${project.title}`}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
}
