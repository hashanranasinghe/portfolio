"use client";
import ExperienceCard from "@/components/cards/ExperienceCard";
import workData from "@/data/workData";
import achivementData from "@/data/achivementData";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Trophy } from "lucide-react";
import { useState } from "react";

const WorkSection = () => {
  const [visibleItems, setVisibleItems] = useState(2);
  const itemsToShow = 2;

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + itemsToShow, workData.length));
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-background py-14 sm:py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-orange mb-3"
        >
          Experience
        </motion.p>

        {/* Desktop timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 -translate-x-1/2 w-px bg-border h-full" />
          <div className="space-y-12">
            <AnimatePresence>
              {workData.slice(0, visibleItems).map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  exit="hidden"
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 w-2.5 h-2.5 rounded-full bg-orange" />
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile column */}
        <div className="block md:hidden space-y-6">
          <AnimatePresence>
            {workData.slice(0, visibleItems).map((exp) => (
              <motion.div
                key={exp.id}
                variants={mobileItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="hidden"
                className="w-full"
              >
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleItems < workData.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMoreItems}
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-orange transition-colors"
            >
              View more
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Highlights */}
        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
            Highlights
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achivementData.map((ach) => {
              const content = (
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 h-full hover:border-orange transition-colors duration-300">
                  <Trophy className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {ach.title}
                    </p>
                    <p className="text-xs text-muted mt-1">{ach.description}</p>
                  </div>
                  {ach.link && (
                    <ExternalLink className="w-3.5 h-3.5 text-muted flex-shrink-0 ml-auto" />
                  )}
                </div>
              );
              return ach.link ? (
                <a
                  key={ach.id}
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={ach.id}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
