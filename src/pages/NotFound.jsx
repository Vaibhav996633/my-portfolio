import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NeonButton } from '../components/NeonButton';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center overflow-hidden relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue blur-3xl rounded-full opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple blur-3xl rounded-full opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center space-y-8 px-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-8xl md:text-9xl font-orbitron font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-neon-blue">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Oops! Looks like you've wandered into the digital void. Let's get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <NeonButton
            variant="primary"
            size="lg"
            onClick={() => navigate('/')}
          >
            Back to Home
          </NeonButton>
          <NeonButton
            variant="secondary"
            size="lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </NeonButton>
        </motion.div>

        {/* Floating elements */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
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
  );
}
