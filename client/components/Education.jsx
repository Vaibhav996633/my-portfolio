import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { EDUCATION, CERTIFICATIONS, COURSES } from '@/utils/data';
import {
  FADE_IN_UP,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from '@/utils/animations';

export const Education = () => {
  return (
    <section id="education" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Education & Learning Path"
          subtitle="My Journey"
          description="A timeline of my academic and professional development"
          variant="secondary"
        />

        {/* Education Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neon-cyan mb-12">Academic Background</h3>

          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green opacity-30" />

            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={STAGGER_ITEM}
                className={`relative pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-3 w-4 h-4 bg-neon-blue rounded-full border-4 border-background z-10"
                  animate={{
                    boxShadow: ['0 0 0 4px rgba(0, 255, 255, 0.3)', '0 0 0 8px rgba(0, 255, 255, 0.1)'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
                  className="glass p-6 rounded-lg border border-white/10 group"
                >
                  <p className="text-sm text-neon-green font-semibold mb-2">{edu.year}</p>
                  <h4 className="text-lg font-bold text-neon-blue mb-2 group-hover:text-neon-cyan transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-foreground font-semibold mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-neon-cyan mb-12">Certifications</h3>

          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                variants={STAGGER_ITEM}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(199, 125, 255, 0.4)',
                }}
                className="glass p-6 rounded-lg border border-white/10 flex flex-col items-center text-center space-y-3 group cursor-default"
              >
                {/* Certificate icon */}
                <motion.div
                  className="text-4xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: cert.id * 0.2,
                  }}
                >
                  🎓
                </motion.div>

                <div>
                  <h4 className="font-bold text-foreground group-hover:text-neon-purple transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-neon-cyan font-semibold">{cert.date}</p>
                </div>

                {/* Flip effect on hover - visual indicator */}
                <motion.div
                  className="w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Relevant Courses */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 p-8 glass rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold text-neon-green mb-6">Relevant Coursework</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {COURSES.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                <p className="text-foreground">{course}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
