'use client';

import FadeIn from '../FadeIn';
import Link from 'next/link';
import { useLanguage } from '../LanguageProvider';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '../motion/tokens';
import SectionReveal from '../motion/SectionReveal';

export default function Hero() {
  const { content } = useLanguage();
  const reduceMotion = useReducedMotion();
  const { durations, distances, easeOut, stagger } = motionTokens;

  const headingVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger.base,
        delayChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : distances.sm },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.base, ease: easeOut }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-50">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"
        initial={{ scale: 1 }}
        animate={{ scale: reduceMotion ? 1 : 1.05 }}
        transition={{ duration: durations.hero, ease: easeOut }}
      ></motion.div>
      
      <SectionReveal className="relative container-custom section-padding">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="heading-display mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.span className="block" variants={lineVariants}>
              {content.hero.titleLine1}
            </motion.span>
            <motion.span className="block text-accent-stone" variants={lineVariants}>
              {content.hero.titleLine2}
            </motion.span>
          </motion.h1>
          
          <FadeIn delay={0.4}>
            <p className="body-lg max-w-3xl mx-auto mb-12">
              {content.hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="button-primary">
                {content.hero.primaryCta}
              </Link>
              <Link href="#contact" className="button-secondary">
                {content.hero.secondaryCta}
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-200">
              {content.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionReveal>
    </section>
  );
}
