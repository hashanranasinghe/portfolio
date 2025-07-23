"use client";
import { BlogCard } from "@/components/cards/BlogCard";
import blogData from "@/data/blogData";
import { motion as m, motion } from "framer-motion";
import React, { useState } from "react";

const BlogSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const blogssPerPage = 3;

  const showMoreBlogs = () => {
    setVisibleCount((prev) => prev + blogssPerPage);
  };

  const hasMoreBlogs = visibleCount < blogData.length;
  const posts = [...blogData].slice(0, visibleCount);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className="bg-[url('/portfolio/images/sec2.png')] bg-cover bg-center w-full rounded-4xl py-16 px-6 relative overflow-hidden"
      id="#blog"
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 rounded-4xl" />

      <div className="relative flex flex-col items-center max-w-7xl mx-auto">
        {/* Header Section */}
        <m.div
          className="text-center mb-12 pt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <m.h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-realWhite">My</span>{" "}
            <span className="bg-clip-text text-orange font-extrabold">
              Blog
            </span>
          </m.h2>
          <m.p
            className="text-realWhite/80 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover insights, tutorials, and thoughts on development, design,
            and technology
          </m.p>
        </m.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.length > 0 ? (
            posts.map((post, index) => <BlogCard post={post} key={index}/>)
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-gray-500 text-lg">
                  No blog posts available.
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Load More Button - Keeping your original design */}
        {hasMoreBlogs && (
          <motion.button
            onClick={showMoreBlogs}
            className="mt-12 group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button content */}
            <span className="relative flex items-center gap-2">
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
      </div>
    </section>
  );
};

export default BlogSection;
