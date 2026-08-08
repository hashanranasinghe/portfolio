"use client";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Rocket, Target, Wrench } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const ProjectPageCard: React.FC<ProjectPageProps> = ({
  project,
  nextProject,
  prevProject,
}) => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <motion.div
        className="max-w-4xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/#work">
          <motion.div
            variants={itemVariants}
            className="group inline-flex items-center gap-2 text-muted hover:text-orange transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to work</span>
          </motion.div>
        </Link>

        <motion.div variants={itemVariants} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {project.name}
          </h1>
          {project.short && (
            <p className="text-lg text-muted">{project.short}</p>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-border bg-surface overflow-hidden mb-12 flex items-center justify-center py-10"
        >
          <img
            src={project.img}
            alt={project.name}
            className="max-h-64 w-auto object-contain"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <motion.div variants={itemVariants}>
            <h2 className="flex items-center gap-2 text-sm font-mono text-orange mb-3">
              <Target className="w-4 h-4" /> Problem
            </h2>
            <p className="text-foreground/90 leading-relaxed">{project.problem}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="flex items-center gap-2 text-sm font-mono text-orange mb-3">
              <Wrench className="w-4 h-4" /> Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-sm font-mono text-orange mb-3">How it's built</h2>
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-border bg-surface p-6 mb-12"
        >
          <h2 className="text-sm font-mono text-orange mb-2">Impact</h2>
          <p className="text-foreground text-lg font-medium">{project.impact}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-orange text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {project.launch && (
            <a
              href={project.launch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-realWhite hover:bg-orange/90 transition-colors"
            >
              <Rocket className="w-4 h-4" />
              Launch
            </a>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center pt-8 border-t border-border"
        >
          {prevProject ? (
            <Link
              href={`/project-page/${prevProject.id}`}
              className="flex items-center gap-2 text-muted hover:text-orange transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {prevProject.name}
            </Link>
          ) : (
            <span />
          )}
          {nextProject && (
            <Link
              href={`/project-page/${nextProject.id}`}
              className="flex items-center gap-2 text-muted hover:text-orange transition-colors text-sm"
            >
              {nextProject.name}
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default ProjectPageCard;
