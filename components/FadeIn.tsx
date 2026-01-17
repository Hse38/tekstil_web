'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

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
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {}
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
