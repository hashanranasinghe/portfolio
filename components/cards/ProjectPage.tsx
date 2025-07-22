"use client";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Github, Rocket } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const ProjectPageCard: React.FC<ProjectPageProps> = ({
  project,
  nextProject,
  prevProject,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/#projects">
          <motion.div
            variants={itemVariants}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
            <span>Back to Projects</span>
          </motion.div>
        </Link>
        {/* Project Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {project.name}
            </span>
          </motion.h1>

          {project.short && (
            <motion.div className="mb-8" variants={itemVariants}>
              <p className="text-xl text-gray-300 font-medium italic">
                {project.short}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Image */}
          <motion.div variants={itemVariants} className="relative group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.img
              src={project.img}
              alt={project.name}
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10 group-hover:border-purple-400/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Project Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-orange-400" />
                About This Project
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            {project.link && (
              <motion.div className="flex gap-4" variants={itemVariants}>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </motion.a>
                )}
              </motion.div>
            )}
            {/* Action Buttons */}
            {project.launch && (
              <motion.div className="flex gap-4" variants={itemVariants}>
                {project.launch && (
                  <motion.a
                    href={project.launch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Rocket className="w-5 h-5" />
                    Launch
                  </motion.a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom Navigation */}

        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center pt-8 border-t border-white/10"
        >
          {prevProject && (
            <Link href={`/project-page/${prevProject.id}`}>
              <motion.div
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Project
              </motion.div>
            </Link>
          )}
          {nextProject && (
            <Link href={`/project-page/${nextProject.id}`}>
              <motion.div
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                Next Project
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </motion.div>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default ProjectPageCard;