import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <div
      className={`group relative flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div className="relative w-full h-44 bg-background flex items-center justify-center overflow-hidden border-b border-border">
        <img
          src={project.img}
          alt={project.name}
          className="max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-foreground mb-2">
          {project.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 rounded-full border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-3 border-t border-border">
          <p className="text-xs text-foreground/80 leading-snug">
            {project.impact}
          </p>
          <span
            className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange text-realWhite transition-transform duration-300 group-hover:rotate-45"
            aria-hidden
          >
            <HiArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
