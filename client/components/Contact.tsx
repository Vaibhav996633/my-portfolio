import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { NeonButton } from './NeonButton';
import { SOCIAL_LINKS } from '@/utils/constants';
import {
  FADE_IN_UP,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from '@/utils/animations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Let's Connect"
          subtitle="Get in Touch"
          description="Have a project in mind or just want to chat? Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={STAGGER_ITEM}>
              <h3 className="text-2xl font-bold text-neon-cyan mb-8">Contact Info</h3>
            </motion.div>

            {/* Email */}
            <motion.a
              href={`mailto:${SOCIAL_LINKS.email}`}
              variants={STAGGER_ITEM}
              whileHover={{ x: 10 }}
              className="group flex items-start gap-4 p-4 rounded-lg hover:glass transition-all"
            >
              <div className="w-12 h-12 rounded-lg glass border border-neon-blue/30 flex items-center justify-center flex-shrink-0 group-hover:border-neon-blue group-hover:shadow-neon transition-all">
                <Mail className="text-neon-blue" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm break-all group-hover:text-neon-blue transition-colors">
                  {SOCIAL_LINKS.email}
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${SOCIAL_LINKS.phone}`}
              variants={STAGGER_ITEM}
              whileHover={{ x: 10 }}
              className="group flex items-start gap-4 p-4 rounded-lg hover:glass transition-all"
            >
              <div className="w-12 h-12 rounded-lg glass border border-neon-purple/30 flex items-center justify-center flex-shrink-0 group-hover:border-neon-purple group-hover:shadow-neon-purple transition-all">
                <Phone className="text-neon-purple" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm group-hover:text-neon-purple transition-colors">
                  {SOCIAL_LINKS.phone}
                </p>
              </div>
            </motion.a>

            {/* Social Links */}
            <motion.div variants={STAGGER_ITEM}>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: Linkedin,
                    href: SOCIAL_LINKS.linkedin,
                    label: 'LinkedIn',
                    color: 'neon-blue',
                  },
                  {
                    icon: Github,
                    href: SOCIAL_LINKS.github,
                    label: 'GitHub',
                    color: 'neon-purple',
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-lg glass border border-${social.color}/30 flex items-center justify-center hover:shadow-neon transition-all`}
                  >
                    <social.icon className={`text-${social.color}`} size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <motion.div variants={STAGGER_ITEM}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-cyan/50 focus:shadow-neon transition-all"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={STAGGER_ITEM}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-cyan/50 focus:shadow-neon transition-all"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={STAGGER_ITEM}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-cyan/50 focus:shadow-neon transition-all"
                  placeholder="Project Collaboration"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={STAGGER_ITEM}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-cyan/50 focus:shadow-neon transition-all resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={STAGGER_ITEM}>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-background font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-neon transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? (
                    <>
                      <span>Message Sent!</span>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        ✓
                      </motion.span>
                    </>
                  ) : isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Success message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg text-neon-green text-center text-sm"
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Import AnimatePresence
import { AnimatePresence } from 'framer-motion';
