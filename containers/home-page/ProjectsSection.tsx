"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo, useState } from "react";
import ProjectCard from "../../components/cards/ProjectCard";
import ProjectData from "../../data/projectData";
import Link from "next/link";

const TOP_TAGS = 6;

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showArchive, setShowArchive] = useState(false);

  const featured = ProjectData.filter((p) => p.featured);
  const archive = ProjectData.filter((p) => !p.featured);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    ProjectData.forEach((p) =>
      p.techStack.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1))
    );
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, TOP_TAGS)
      .map(([tag]) => tag);
  }, []);

  const matches = (techStack: string[]) =>
    !activeTag || techStack.includes(activeTag);

  const visibleFeatured = featured.filter((p) => matches(p.techStack));
  const visibleArchive = archive.filter((p) => matches(p.techStack));

  return (
    <section className="bg-background py-14 sm:py-20 px-6" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-orange mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Selected projects
          </h2>
          <p className="text-muted max-w-xl">
            Each project below follows the same formula: the problem, what I
            built, the stack, and the result. Filter by stack to see what I've
            shipped with a given technology.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTag(null)}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
              activeTag === null
                ? "bg-orange text-realWhite border-orange"
                : "border-border text-muted hover:border-orange hover:text-orange"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeTag === tag
                  ? "bg-orange text-realWhite border-orange"
                  : "border-border text-muted hover:border-orange hover:text-orange"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleFeatured.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/project-page/${project.id}`} className="block h-full">
                  <ProjectCard project={project} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleFeatured.length === 0 && (
          <p className="text-sm text-muted mb-6">
            No featured projects use that stack — check the archive below.
          </p>
        )}

        <div className="mt-16">
          <button
            onClick={() => setShowArchive((v) => !v)}
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-orange transition-colors mb-6"
          >
            {showArchive ? "Hide" : "Show"} full archive ({visibleArchive.length})
            <svg
              className={`w-3.5 h-3.5 transition-transform ${
                showArchive ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleArchive.map((project) => (
                    <Link
                      key={project.id}
                      href={`/project-page/${project.id}`}
                      className="block h-full"
                    >
                      <ProjectCard project={project} />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
