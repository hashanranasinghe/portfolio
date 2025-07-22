"use client";
import React from "react";
import { motion as m, cubicBezier } from "framer-motion";
import { FiSend } from "react-icons/fi";
import contactData from "@/data/contactData";
import { ContactCard } from "@/components/cards/ContactCard";

const ContactMe = () => {
  const contacts = contactData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  return (
    <section
      id="#contact"
      className="relative py-20 px-6 overflow-hidden bg-realWhite"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <m.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/10 backdrop-blur-sm rounded-full text-slate-700 text-sm font-medium mb-6 border border-slate-200/60"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FiSend className="w-4 h-4" />
            Let's Connect
          </m.div>

          <m.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-slate-900">Get In</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Touch
            </span>
          </m.h2>

          <m.p
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </m.p>
        </m.div>

        {/* Contact Cards */}
        <m.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contacts.map((contact, idx) => (
            <m.div key={idx} className="group relative" variants={cardVariants}>
              {contact.href ? (
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto:") ||
                    contact.href.startsWith("tel:")
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ContactCard contact={contact} />
                </a>
              ) : (
                <ContactCard contact={contact} />
              )}
            </m.div>
          ))}
        </m.div>

        {/* Bottom CTA */}
        <m.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-slate-500 text-lg mb-6">
            Available for freelance opportunities and collaborations
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default ContactMe;
