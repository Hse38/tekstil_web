'use client';

import FadeIn from '../FadeIn';
import { useLanguage } from '../LanguageProvider';

const certifications = [
  'OEKO-TEX Standard 100',
  'GOTS Certified',
  'ISO 9001:2015',
  'ISO 14001:2015',
  'BSCI Compliance',
  'Sedex Member',
];

export default function Sustainability() {
  const { content } = useLanguage();
  return (
    <section id="sustainability" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn>
            <div>
              <div className="inline-block px-4 py-2 bg-neutral-100 text-sm font-medium text-neutral-700 mb-6">
                {content.sustainability.badge}
              </div>
              <h2 className="heading-xl mb-8">
                {content.sustainability.titleLine1}
                <br />
                {content.sustainability.titleLine2}
              </h2>
              <p className="body-base mb-8">
                {content.sustainability.description}
              </p>

              <div className="space-y-6">
                {content.sustainability.pillars.map((pillar, index) => (
                  <FadeIn key={pillar.title} delay={index * 0.1}>
                    <div className="border-l-2 border-accent-stone pl-6">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-neutral-600">
                        {pillar.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="lg:sticky lg:top-32">
              <div className="bg-neutral-50 p-12">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
                  {content.sustainability.certificationsTitle}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert}
                      className="bg-white p-6 text-center border border-neutral-200 hover:border-neutral-300 transition-colors"
                    >
                      <div className="text-4xl mb-3">✓</div>
                      <div className="text-sm font-medium text-neutral-700">
                        {cert}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {content.sustainability.certificationsNote}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
