'use client';

import FadeIn from '../FadeIn';
import { useLanguage } from '../LanguageProvider';
import SectionReveal from '../motion/SectionReveal';

export default function Process() {
  const { content } = useLanguage();
  return (
    <section id="process" className="section-padding bg-white">
      <SectionReveal className="container-custom">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-block px-4 py-2 bg-neutral-100 text-sm font-medium text-neutral-700 mb-6">
              {content.process.badge}
            </div>
            <h2 className="heading-xl mb-6">
              {content.process.titleLine1}
              <br />
              {content.process.titleLine2}
            </h2>
            <p className="body-base">
              {content.process.description}
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-neutral-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {content.process.steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.15}>
                <div className="relative">
                  {/* Number Badge */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-neutral-900 text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.8}>
          <div className="mt-20 text-center">
            <p className="body-lg text-neutral-700 mb-8">
              {content.process.ctaLead}
            </p>
            <a 
              href="#contact" 
              className="button-primary"
            >
              {content.process.cta}
            </a>
          </div>
        </FadeIn>
      </SectionReveal>
    </section>
  );
}
