import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Hero } from './Hero';
import { About } from './About';

interface FrameSequenceHUDProps {
  scrollYProgress: MotionValue<number>;
}

export const FrameSequenceHUD = ({ scrollYProgress }: FrameSequenceHUDProps) => {
  // Phase 1: Hero (0% to 25%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Phase 2: About (30% to 60%)
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const aboutScale = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0.8, 1, 1, 0.8]);

  // Phase 3: Identity (70% to 95%)
  const identityOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [0, 1, 1, 0]);
  const identityY = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [100, 0, 0, -100]);

  return (
    <div className="relative z-10 h-full w-full px-2 pointer-events-none">
      {/* 3-Phase HUD Layers */}
      
      {/* Phase 1 Overlay */}
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 flex items-start justify-start px-2 pt-[15vh]"
      >
        <Hero isScrollIntegrated={true} />
      </motion.div>

      <motion.div 
        style={{ opacity: aboutOpacity, scale: aboutScale }}
        className="absolute inset-x-0 md:inset-x-auto md:left-20 top-[40%] md:top-[32%] -translate-y-1/2 flex justify-center md:justify-start"
      >
        <About section="left-circle" />
      </motion.div>

      {/* Phase 3 Overlay */}
      <motion.div 
        style={{ opacity: identityOpacity, y: identityY }}
        className="absolute right-2 md:right-10 lg:right-20 top-[32%] -translate-y-1/2 max-w-lg"
      >
        <About section="right-content" />
      </motion.div>
    </div>
  );
};
