"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-background py-14 sm:py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-orange mb-3"
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <Image
                src="/portfolio/images/my2.png"
                alt="Hashan Ranasinghe"
                width={400}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xl text-foreground leading-relaxed">
              I&apos;m a software engineer who started in mobile (Flutter,
              MVVM, BLoC) and grew into full-stack — Next.js on the frontend,
              Node/Nest and event-driven pipelines (Kafka, Airflow)
              underneath.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              What I care about: shipping things that work, not just demos.
              On client work that means clear communication and hitting the
              date we agreed on. On engineering teams that means code someone
              else can read six months from now.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              BSc (Hons) Computing &amp; Information Systems, Sabaragamuwa
              University. Currently going deeper on backend architecture and
              machine learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
