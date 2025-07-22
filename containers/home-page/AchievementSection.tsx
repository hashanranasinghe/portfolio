"use client";
import React, { useState } from "react";
import { motion as m, cubicBezier } from "framer-motion";
import { FiExternalLink, FiAward, FiStar } from "react-icons/fi";
import { HiTrophy } from "react-icons/hi2";
import achivementData from "@/data/achivementData";

const AchievementsSection: React.FC = () => {
  const achievements = achivementData;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const getIconForIndex = (index: number) => {
    const icons = [HiTrophy, FiAward, FiStar];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <section
      id="#achievements"
      className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-10 px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Heading */}
        <div className="text-center mb-10">
          <m.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl backdrop-blur-sm border border-purple-200/50 shadow-lg">
              <HiTrophy className="w-8 h-8 text-purple-600" />
            </div>
          </m.div>

          <m.h2
            className="text-xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Achievements
          </m.h2>

          <m.p
            className="text-gray-600 text-md max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Celebrating milestones and recognitions that mark my journey of
            growth and excellence
          </m.p>
        </div>

        {/* Enhanced Cards Grid */}
        <m.div
          className="grid gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((ach, index) => (
            <m.div
              key={ach.id}
              variants={card}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(ach.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/60 via-pink-200/60 to-indigo-200/60 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-purple-200/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 h-full flex flex-col md:flex-row md:items-center">
                {/* Left Section - Icon, Badge, and Content */}
                <div className="flex-grow">
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-6 md:mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border border-purple-200/50 shadow-sm">
                      <div className="text-purple-600">
                        {getIconForIndex(index)}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {ach.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Right Section - Action Button */}
                <div className="md:ml-8 flex flex-col items-end flex-shrink-0">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500/90 to-pink-500/90 rounded-full border border-purple-300/50 shadow-sm">
                    <span className="text-xs font-medium text-realWhite">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {ach.link && (
                    <m.a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn mt-5 inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium text-realWhite transition-colors">
                        View Details
                      </span>
                      <FiExternalLink className="w-4 h-4 text-realWhite group-hover/btn:translate-x-1 transition-all duration-300" />
                    </m.a>
                  )}
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="w-16 h-16 border border-purple-300/40 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-12 h-12 border border-pink-300/40 rounded-full"></div>
                </div>

                {/* Hover Particle Effect */}
                {hoveredCard === ach.id && (
                  <m.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <m.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-500 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </m.div>
                )}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
