'use client';

import FadeIn from '../FadeIn';
import { useLanguage } from '../LanguageProvider';

export default function About() {
  const { content } = useLanguage();
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-neutral-100 text-sm font-medium text-neutral-700 mb-4">
                {content.about.badge}
              </div>
              <h2 className="heading-xl">
                {content.about.titleLine1}
                <br />
                {content.about.titleLine2}
              </h2>
              <p className="body-base">
                {content.about.description1}
              </p>
              <p className="body-base">
                {content.about.description2}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-neutral-50 p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      {content.about.stats[0].value}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {content.about.stats[0].label}
                    </div>
                  </div>
                </div>
                <div className="bg-accent-beige/20 p-8 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      {content.about.stats[1].value}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {content.about.stats[1].label}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-accent-softblue/20 p-8 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      {content.about.stats[2].value}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {content.about.stats[2].label}
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      {content.about.stats[3].value}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {content.about.stats[3].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
