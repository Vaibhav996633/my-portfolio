import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../utils/animations';

const FLOATING_TAGS = [
  'Creative Thinker',
  'Problem Solver',
  'Team Player',
  'Quick Learner',
  'Tech Enthusiast',
];

export const About = () => {
  const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="My Journey"
          description="Discover who I am and what drives my passion for technology"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left - Avatar and Effects */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-96 flex items-center justify-center"
          >
            {/* Rotating circle background */}
            <motion.div
              className="absolute w-72 h-72 border-2 border-neon-blue rounded-full opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Avatar container */}
            <div className="relative z-10">
              <div className="w-64 h-64 rounded-full glass border-2 border-neon-purple p-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-8xl">
                  📚
                </div>
              </div>

              {/* Floating tags that appear on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0"
              >
                {FLOATING_TAGS.map((tag, index) => (
                  <motion.div
                    key={tag}
                    className="absolute text-sm px-3 py-1 glass rounded-full border border-neon-cyan/30 text-neon-cyan whitespace-nowrap cursor-pointer"
                    style={{
                      left: `${50 + 35 * Math.cos((index / FLOATING_TAGS.length) * Math.PI * 2)}%`,
                      top: `${50 + 35 * Math.sin((index / FLOATING_TAGS.length) * Math.PI * 2)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: hoveredTag === tag ? 1.2 : 1,
                      boxShadow:
                        hoveredTag === tag
                          ? '0 0 20px rgba(0, 255, 255, 0.6)'
                          : '0 0 10px rgba(0, 255, 255, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredTag(tag)}
                    onHoverEnd={() => setHoveredTag(null)}
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={staggerContainer}
              className="glass p-8 rounded-xl border border-white/10"
            >
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-neon-purple mb-4">
                Who I Am
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                I'm an MCA student at Indira College of Engineering and Management, passionate about merging creativity with code. My focus lies in building clean, functional, and visually engaging software solutions using Java, React.js, and Spring Boot.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                With a strong foundation in both frontend and backend development, I believe in creating holistic digital experiences that not only look stunning but also perform flawlessly. I'm an independent and self-motivated individual dedicated towards achieving goals.
              </motion.p>

              {/* Timeline highlight */}
              <motion.div
                variants={fadeInUp}
                className="space-y-3 pt-6 border-t border-white/10"
              >
                {/* <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full" />
                  <span className="text-foreground">
                    <span className="font-semibold text-neon-blue">2023-2025:</span> MCA at Indira College of Engineering and Management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full" />
                  <span className="text-foreground">
                    <span className="font-semibold text-neon-blue">2020-2023:</span> BA Economics at Appasaheb Jedhe College
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full" />
                  <span className="text-foreground">
                    <span className="font-semibold text-neon-blue">2024:</span> Multiple certifications in core technologies
                  </span>
                </div> */}

               <div className="flex flex-col gap-4">
  {/* Section Title */}
  <h3 className="text-xl font-bold text-neon-blue">Hobbies</h3>

  {/* Hobby 1 */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-neon-green rounded-full" />
    <span className="text-foreground">
      Gaming <span className="text-muted-foreground">(strategy, open-world, competitive)</span>
    </span>
  </div>

  {/* Hobby 2 */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-neon-green rounded-full" />
    <span className="text-foreground">
      Watching movies <span className="text-muted-foreground">(sci-fi & thrillers)</span>
    </span>
  </div>

  {/* Hobby 3 */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-neon-green rounded-full" />
    <span className="text-foreground">
      Listening to music <span className="text-muted-foreground">(for creativity & relaxation)</span>
    </span>
  </div>
</div>


              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
