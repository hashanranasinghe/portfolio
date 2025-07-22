"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ProjectCard from "../../components/cards/ProjectCard";
import ProjectData from "../../data/projectData";
import Link from "next/link";
const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const projectsPerPage = 3;

  const showMoreProjects = () => {
    setVisibleCount((prev) => prev + projectsPerPage);
  };

  const hasMoreProjects = visibleCount < ProjectData.length;
  const visibleProjects = [...ProjectData].reverse().slice(0, visibleCount);

  return (
    <section className="bg-[url('/images/sec2.png')] bg-cover bg-center w-full rounded-4xl" id="#projects">
    <div className="flex pt-10 flex-col items-center">
      <motion.div
        className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between items-start px-20 mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            My
          </span>{" "}
          <span className="text-orange-500 font-semibold">Projects</span>
        </motion.div>

        <div className="w-64 lg:h-0.5 md:h-0.5 sm:h-10 h-10 bg-gray-300lg:self-center"></div>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-md lg:text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Explore my projects to see my skills in action. Each project
          represents unique challenges I've tackled. Feel free to reach out if
          you'd like to discuss any of them in detail.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              layout
            >
              <Link href={`/project-page/${project.id}`}>
                <ProjectCard
                  title={project.name}
                  image={project.img}
                  onClick={() => {}}
                  short={project.short}
                  key={index}
                />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMoreProjects && (
        <motion.button
          onClick={showMoreProjects}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            View More Projects
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </span>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
        </motion.button>
      )}
      <div className="h-5"></div>
    </div>
    </section>
  );
};

export default ProjectsSection;
