"use client";
import { motion as m } from "framer-motion";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/nav/NavBar";

const line = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" as const },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <section className="bg-background" id="hero">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-14 sm:pt-36 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <m.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={line}
              className="font-mono text-sm text-orange mb-4"
            >
              Hashan Ranasinghe
            </m.p>

            <m.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={line}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Full-stack engineer building web and mobile products end-to-end.
            </m.h1>

            <m.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={line}
              className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
            >
              4 years shipping production apps across the stack, Next.js on
              the web, Flutter on mobile, Node/Nest and event-driven data
              pipelines underneath. I like turning ambiguous problems into
              shipped software fast.
            </m.p>

            <m.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={line}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-realWhite px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                View Work
                <svg
                  className="w-4 h-4"
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
              </a>
              <a
                href="https://drive.google.com/file/d/1P1kGij6HMHNVvlLYQ53g1HJzewR7cKyM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border hover:border-orange px-6 py-3 rounded-full text-sm font-medium text-foreground transition-colors"
              >
                Download Résumé
              </a>
            </m.div>

            <m.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={line}
              className="mt-8 font-mono text-xs text-muted tracking-wide"
            >
              Kandy, Sri Lanka · Available for freelance / full-time
            </m.p>
          </div>

          <m.div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-56 sm:w-72 lg:w-80">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-full bg-orange" />
              <m.span
                className="absolute -top-3 -right-2 w-4 h-4 rounded-full bg-orange z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <m.span
                className="absolute bottom-10 -left-5 w-3 h-3 rounded-full bg-foreground/40 z-20"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
              <Image
                src="/portfolio/images/my.png"
                alt="Hashan Ranasinghe"
                width={360}
                height={360}
                className="relative z-10 w-full aspect-square object-cover rounded-full border border-border"
                priority
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
