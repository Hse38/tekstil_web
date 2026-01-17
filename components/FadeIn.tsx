'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { motionTokens } from './motion/tokens';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const { durations, distances, scales, easeOut } = motionTokens;
  const directions = {
    up: { y: distances.md },
    down: { y: -distances.md },
    left: { x: distances.md },
    right: { x: -distances.md },
    none: {}
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: reduceMotion ? 1 : scales.subtle,
        ...(reduceMotion ? {} : directions[direction])
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: durations.slow,
        delay,
        ease: easeOut
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
