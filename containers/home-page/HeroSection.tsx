"use client";
import { motion as m } from "framer-motion";
import React from "react";
import Navbar from "../../components/nav/NavBar";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-realWhite" id="#hero">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Top Section: Hello bubble and Headlines */}
        <div className="flex flex-col items-center pt-16 sm:pt-20 lg:pt-28">
          {/* Hello bubble */}
          <m.div
            className="relative mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center bg-transparent border-2 border-orange-200 rounded-full px-4 py-2 shadow-sm">
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Hello!
              </span>
            </div>
            {/* Arrow decoration */}
            <div className="absolute -bottom-2 left-6 sm:left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 sm:border-l-8 sm:border-r-8 sm:border-t-8 border-l-transparent border-r-transparent border-t-orange-200"></div>
          </m.div>

          {/* Centered headline */}
          <m.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              I'm <span className="text-orange-500">Hashan Ranasinghe</span>,
            </h1>
            <m.h2
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Flutter Mobile Application Developer
            </m.h2>
          </m.div>
        </div>

        {/* Bottom Section: Testimonial, Buttons, Image, and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-center lg:text-left">
          {/* Left: Testimonial */}
          <m.div
            className="lg:col-span-4 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-4 lg:space-y-6 p-4 sm:p-6">
              <m.div
                className="text-gray-600 text-2xl sm:text-3xl lg:text-4xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                "
              </m.div>
              <div className="space-y-1 sm:space-y-2">
                <m.p
                  className="text-gray-700 font-medium text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  A skilled Flutter developer known for clear communication and
                  delivering on-time, on-budget mobile apps. Visit my portfolio
                  and reach out to bring your app ideas to life. Let's create
                  something amazing together!
                </m.p>
              </div>
            </div>
          </m.div>

          {/* Center: Image and Buttons */}
          <m.div
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main image container */}
            <div className="relative flex justify-center">
              <m.img
                src="/portfolio/images/my.png"
                alt="Hashan Ranasinghe - Flutter Developer"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* CTA Buttons positioned absolutely at bottom of image */}
              <m.div
                className="absolute lg:bottom-6 md:bottom-4 sm:bottom-2 bottom-5 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 shadow-lg">
                  <div className="flex sm:flex-row gap-3 sm:gap-4 w-full justify-center">
                    <m.a
                      href="https://drive.google.com/file/d/1P1kGij6HMHNVvlLYQ53g1HJzewR7cKyM/view?usp=drive_link"
                      className="bg-orange-500 hover:bg-orange-600 text-realWhite px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-colors flex items-center justify-center space-x-2 text-xs sm:text-sm lg:text-lg whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Resume</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </m.a>
                    <m.a
                      href="mailto:hashan.ranasinghe98@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:border-orange-500 text-realWhite hover:text-orange-500 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-colors text-md sm:text-sm lg:text-lg whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      Hire me
                    </m.a>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Right: Stats */}
          <m.div
            className="lg:col-span-3 order-3 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="rounded-lg p-4 sm:p-6 shadow-lg">
              <m.div
                className="flex items-center space-x-1 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {[...Array(5)].map((_, i) => (
                  <m.svg
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </m.svg>
                ))}
              </m.div>
              <m.div
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                5 Years
              </m.div>
              <m.div
                className="text-gray-600 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                Experience
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
