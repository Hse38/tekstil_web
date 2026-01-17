'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from './tokens';

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionReveal({ children, className }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const { durations, distances, scales, easeOut, stagger } = motionTokens;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : distances.md,
        scale: reduceMotion ? 1 : scales.subtle
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: durations.slow,
          ease: easeOut,
          staggerChildren: stagger.base
        }
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
