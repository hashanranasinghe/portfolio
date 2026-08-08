"use client";
import React from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { label: "Mobile", tags: ["Flutter", "Dart"] },
  { label: "Web", tags: ["Next.js", "Tailwind CSS"] },
  { label: "Backend", tags: ["Node.js", "NestJS", "Express"] },
  {
    label: "Data / Infra",
    tags: ["Kafka", "Airflow", "Grafana", "PostgreSQL", "MongoDB", "Firebase"],
  },
  { label: "Languages", tags: ["Python", "Java", "C#", "PHP", "C"] },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-background py-14 sm:py-20 px-6" id="stack">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-orange mb-3">Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I build with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-mono text-xs tracking-widest text-muted mb-4 uppercase">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
