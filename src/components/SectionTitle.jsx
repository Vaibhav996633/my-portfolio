import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const SectionTitle = ({
  title,
  subtitle,
  description,
  variant = 'primary',
  className,
}) => {
  const variantStyles = {
    primary: 'text-neon-blue',
    secondary: 'text-neon-purple',
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn('space-y-4 text-center mb-12', className)}
    >
      {subtitle && (
        <motion.div variants={fadeInUp} className="text-neon-green text-sm font-semibold tracking-widest">
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold',
          'relative inline-block',
          variantStyles[variant]
        )}
      >
        <span className="relative">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-full opacity-50" />
        </span>
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
