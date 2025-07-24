"use client";
import ExperienceCard from "@/components/cards/ExperienceCard";
import workData from "@/data/workData";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const WorkSection = () => {
  const educationList = workData;
  const [visibleItems, setVisibleItems] = useState(2);
  const itemsToShow = 2;

  const showMoreItems = () => {
    setVisibleItems((prev) =>
      Math.min(prev + itemsToShow, educationList.length)
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: cubicBezier(0.42, 0, 0.58, 1), // matches "easeInOut"
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94), // matches "easeOut"
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.42, 0, 1, 1), // matches "easeIn"
      },
    },
  };

  return (
    <section className=" bg-realWhite py-5 px-6" id="#work">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-black bg-clip-text">My</span>{" "}
            <span className="text-orange font-semibold">Work Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline Container - Desktop View */}
        <motion.div
          className="relative hidden md:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 via-purple-400 to-blue-400 h-full origin-top"
            variants={timelineVariants}
            style={{ height: "100%" }}
          ></motion.div>

          {/* Experience Items - Desktop Timeline */}
          <div className="space-y-16">
            <AnimatePresence>
              {educationList.slice(0, visibleItems).map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-4  border-orange shadow-lg shadow-purple-500/30 relative`}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-realWhite"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile View - Column Layout */}
        <motion.div
          className="block md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <AnimatePresence>
              {educationList.slice(0, visibleItems).map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full"
                >
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* View More Button */}
        {visibleItems < educationList.length && (
          <motion.div
            className="flex justify-center mt-16"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={showMoreItems}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-realWhite font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

              {/* Button Content */}
              <div className="relative flex items-center gap-2">
                <span>View More</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
