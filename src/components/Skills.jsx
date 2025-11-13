import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { SKILLS } from '../utils/data';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../utils/animations';

const SkillItem = ({ name, proficiency, icon }) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-3 p-4"
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Circular progress background */}
        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle with animation */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * proficiency) / 100}
            initial={{ strokeDashoffset: 283 }}
            whileInView={{ strokeDashoffset: 283 - (283 * proficiency) / 100 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#C77DFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon in center */}
        <div className="text-2xl z-10">{icon}</div>
      </div>

      {/* Skill name and proficiency */}
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-neon-cyan">{proficiency}%</p>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const allSkills = Object.entries(SKILLS).flatMap(([_, skills]) => skills);

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="My Tech Universe"
          subtitle="Technical Arsenal"
          description="A comprehensive overview of my technical skills and proficiencies"
          variant="secondary"
        />

        {/* Orbiting visualization (optional cosmic view) */}
        <div className="relative h-full mt-16">
          {/* Central glowing orb */}
          <div className="flex justify-center mb-20">
            <motion.div
              className="relative w-24 h-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-50 blur-xl" />
              <div className="absolute inset-3 rounded-full border-2 border-neon-cyan" />
              <div className="absolute inset-0 flex items-center justify-center text-2xl">⚡</div>
            </motion.div>
          </div>

          {/* Skills grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          >
            {allSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                icon={skill.icon}
              />
            ))}
          </motion.div>
        </div>

        {/* Skills by category */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={staggerItem}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
              }}
              className="glass p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-lg font-bold text-neon-purple mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    className="flex items-center gap-2 text-sm text-foreground group cursor-default"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-neon-cyan group-hover:text-neon-green transition-colors">
                      ▸
                    </span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
