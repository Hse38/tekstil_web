import type { Variants } from 'framer-motion';
import { motionTokens } from '../motion/tokens';

export const productGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: motionTokens.stagger.base
    }
  }
};

export const productCardVariants: Variants = {
  hidden: { opacity: 0, y: motionTokens.distances.md },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.durations.base, ease: motionTokens.easeOut }
  }
};
