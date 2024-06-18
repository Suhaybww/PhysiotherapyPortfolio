import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/background-beams';

export function HeroSection() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const spanVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          Welcome to{' '}
          <motion.span className="text-accent" variants={spanVariants}>
            Abdullahi's
          </motion.span>{' '}
          Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          Discover the healing power of{' '}
          <motion.span className="text-accent" variants={spanVariants}>
            physiotherapy
          </motion.span>{' '}
          and experience the benefits of personalized care. Trust in{' '}
          <motion.span className="text-accent" variants={spanVariants}>
            Abdullahi's
          </motion.span>{' '}
          expertise to guide you on your path to recovery and wellness.
        </motion.p>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0" />
    </section>
  );
}