'use client';

import FadeIn from '../FadeIn';
import Link from 'next/link';
import { useLanguage } from '../LanguageProvider';

export default function Hero() {
  const { content } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      <div className="relative container-custom section-padding">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <h1 className="heading-display mb-8">
              {content.hero.titleLine1}
              <br />
              <span className="text-accent-stone">{content.hero.titleLine2}</span>
            </h1>
          </FadeIn>
          
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
      </div>
    </section>
  );
}
