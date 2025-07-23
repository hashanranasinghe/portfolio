"use client";
import React from "react";
import { motion as m } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-20 px-6 relative overflow-hidden"
      id="#about"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated floating orbs */}
        <m.div
          className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute bottom-1/3 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <m.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Geometric patterns */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" />
        <div
          className="absolute bottom-40 right-32 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-60 right-60 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <m.h2
            className="text-3xl md:text-5xl font-bold mb-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-slate-800">About</span>{" "}
            <span className="bg-clip-text text-orange font-extrabold relative">
              Me
            </span>
          </m.h2>
        </m.div>

        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <m.div
            className="relative group"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-100 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500 delay-100" />

              <m.img
                src="/portfolio/images/my2.png"
                alt="Hashan Ranasinghe - Flutter Developer"
                className="w-full h-auto object-cover  relative z-10 group-hover:scale-105 transition-transform duration-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </m.div>

          {/* Text Content */}
          <m.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Content Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-tr-3xl" />

              <m.p
                className="text-slate-700 text-lg leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                I'm a versatile Flutter developer with a solid background in
                software engineering and a passion for building impactful mobile
                apps. With a BSc (Hons) in Computing & Information Systems from
                Sabaragamuwa University, I've gained hands-on experience through
                internships, freelance projects, and a role at hSenid Mobile,
                where I worked on backend automation using Python, Docker,
                Firebase, and Airflow. I specialize in Flutter, utilizing MVVM
                architecture and state management tools such as Provider,
                Stacked, and BLoC. My work focuses on creating user-friendly,
                scalable solutions that solve real-world problems. I'm always
                learning—currently diving into Machine Learning and backend
                development with NestJS and Python. Whether solo or on a team, I
                bring clean code and clear results.
              </m.p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
