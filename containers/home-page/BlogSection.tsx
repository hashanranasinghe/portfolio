"use client";
import { BlogCard } from "@/components/cards/BlogCard";
import blogData from "@/data/blogData";
import { motion } from "framer-motion";
import React from "react";

const BlogSection: React.FC = () => {
  if (blogData.length === 0) return null;

  return (
    <section className="bg-background py-14 sm:py-20 px-6" id="writing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-orange mb-3">Writing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Recent writing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
