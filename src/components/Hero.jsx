import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { NeonButton } from './NeonButton';
import vaibhavImage from "@/assets/vaibhav_Image.jpg";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
} from '../utils/animations';

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Vaibhav Katkar 👋";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue blur-3xl rounded-full opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple blur-3xl rounded-full opacity-10" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-6">
            {/* Typing animation */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-neon-blue"
            >
              <span className="text-white">{displayedText}</span>
              <span className="animate-pulse">_</span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-purple">
                MCA Student | Java & React Developer | Innovator
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Building smart, immersive, and human-centered digital experiences through creative design and robust backend development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.div variants={fadeInUp}>
<a
  href="/Vaibhav_Katkar_Resume-2.pdf"
  download="Vaibhav_Katkar_Resume-2.pdf"
>
  <NeonButton
    size="lg"
    variant="primary"
    className="w-full sm:w-auto flex items-center justify-center gap-2"
  >
    <Download size={20} />
    Download Resume
  </NeonButton>
</a>


</motion.div>


              <motion.div variants={fadeInUp}>
                {/* <NeonButton
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Explore My Work
                  <ArrowRight size={20} />
                </NeonButton> */}
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Tech Skills', value: '10+' },
                // { label: 'Experience', value: '2y+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo and Effects */}
          <motion.div
            variants={scaleIn}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            {/* Glowing orbs background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-neon-blue rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-neon-purple rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Profile Photo */}
            <motion.div
  className="relative z-10"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
  <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
    {/* Neon Ring Behind Image (no blur on top) */}
    <div className="absolute inset-0 rounded-full border-4 border-neon-blue opacity-60 animate-pulse shadow-[0_0_40px_rgba(0,200,255,0.6)]"></div>

    {/* Photo Frame */}
    <div className="relative rounded-full p-2 bg-gradient-to-br from-neon-blue to-neon-purple shadow-[0_0_25px_rgba(0,200,255,0.6)]">
      <img
        src={vaibhavImage}
        alt="Vaibhav"
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-neon-blue shadow-[0_0_40px_rgba(0,200,255,0.8)] hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Reflection */}
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-gradient-to-b from-neon-cyan to-transparent opacity-20 blur-xl rounded-full"></div>
  </div>
</motion.div>

            {/* Floating elements around photo */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                style={{
                  left: `${50 + 30 * Math.cos((i / 5) * Math.PI * 2)}%`,
                  top: `${50 + 30 * Math.sin((i / 5) * Math.PI * 2)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-neon-blue">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-neon-blue rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
