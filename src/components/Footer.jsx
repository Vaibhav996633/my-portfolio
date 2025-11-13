import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const [showHiddenMessage, setShowHiddenMessage] = useState(false);

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <h3 className="font-orbitron font-bold text-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
              Vaibhav Katkar
            </h3>
            <p className="text-sm text-muted-foreground">Building the future, one line of code at a time</p>
          </motion.div>

          {/* Center - Animated line */}
          <motion.div
            className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Right - Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            {/* <p className="text-sm text-muted-foreground">
              Built with <span className="text-neon-blue">💙</span> using{' '}
              <span className="text-neon-purple">React.js</span>
            </p> */}
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Vaibhav Katkar. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Hidden Easter Egg */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: showHiddenMessage ? 1 : 0, y: showHiddenMessage ? 0 : 10 }}
          transition={{ duration: 0.5 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-neon-green font-semibold">
            {showHiddenMessage && '🚀 Keep coding, keep evolving! The future is built by creators like you.'}
          </p>
        </motion.div>

        {/* Interactive element to reveal message */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => setShowHiddenMessage(!showHiddenMessage)}
            onHoverStart={() => setShowHiddenMessage(true)}
            onHoverEnd={() => setShowHiddenMessage(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs text-muted-foreground hover:text-neon-cyan transition-colors"
          >
            ✨ Hover here for a surprise ✨
          </motion.button>
        </div>
      </div>

      {/* Glowing line sweep effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </footer>
  );
};
