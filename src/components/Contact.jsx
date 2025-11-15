import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { SOCIAL_LINKS } from "../utils/constants";
import { staggerContainer, staggerItem } from "../utils/animations";
import { MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden bg-transparent"
    >
      {/* Background Neon Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionTitle
          title="Let's Connect"
          subtitle="Stay in Touch"
          description="Reach out on any of my social platforms or drop a message directly!"
        />

        {/* Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          {/* Email and Phone */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center"
          >
            <motion.a
              href={`mailto:${SOCIAL_LINKS.email}`}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl glass border border-neon-blue/30 hover:border-neon-blue hover:shadow-neon transition-all"
            >
              <Mail className="text-neon-blue" size={24} />
              <span className="text-foreground text-base group-hover:text-neon-blue transition-colors">
                {SOCIAL_LINKS.email}
              </span>
            </motion.a>

            <motion.a
              href={`https://wa.me/${SOCIAL_LINKS.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl glass border border-neon-green/30 hover:border-neon-green hover:shadow-neon-green transition-all"
            >
              <Phone className="text-neon-green" size={24} />
              <span className="text-foreground text-base group-hover:text-neon-green transition-colors">
                {SOCIAL_LINKS.phone}
              </span>
            </motion.a>
          </motion.div>

          {/* 🌐 Social Media Icons Section */}
          <motion.div
            variants={staggerItem}
            className="mt-12 flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-16 lg:gap-20"
          >
            {[
              {
                icon: Linkedin,
                href: SOCIAL_LINKS.linkedin,
                label: "LinkedIn",
                color: "neon-blue",
              },
              {
                icon: Github,
                href: SOCIAL_LINKS.github,
                label: "GitHub",
                color: "neon-purple",
              },
              {
                icon: Instagram,
                href: SOCIAL_LINKS.instagram,
                label: "Instagram",
                color: "neon-pink",
              },
              {
                icon: MessageCircle,
  href: `https://wa.me/${SOCIAL_LINKS.phone.replace("+", "")}`,
  label: "WhatsApp",
  color: "neon-green",
              },
              {
                icon: Mail,
                href: `mailto:${SOCIAL_LINKS.email}`,
                label: "Email",
                color: "neon-cyan",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl glass border border-${social.color}/40 hover:border-${social.color} hover:shadow-${social.color} transition-all duration-300 group`}
                title={social.label}
              >
                <social.icon
                  className={`text-${social.color} group-hover:drop-shadow-[0_0_10px_var(--${social.color})] transition-all duration-300`}
                  size={42}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
