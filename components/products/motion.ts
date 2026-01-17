import type { Variants } from 'framer-motion';

export const productGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const productCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }
  }
};
