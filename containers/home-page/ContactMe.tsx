"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaMedium,
  FaStackOverflow,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import contactData from "@/data/contactData";
import socialData from "@/data/socialData";
import { ContactCard } from "@/components/cards/ContactCard";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Medium: FaMedium,
  "Stack Overflow": FaStackOverflow,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Facebook: FaFacebook,
};

const ContactMe = () => {
  return (
    <section className="bg-background py-14 sm:py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-orange mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-lg text-muted max-w-xl">
            Open to freelance work and full-time roles. Fastest way to reach
            me is below.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {contactData.map((contact, idx) =>
            contact.href ? (
              <a
                key={idx}
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
              <ContactCard key={idx} contact={contact} />
            )
          )}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-5 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialData.map((link) => {
            const Icon = SOCIAL_ICONS[link.name];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {link.name}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
