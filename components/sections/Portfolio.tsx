'use client';

import FadeIn from '../FadeIn';
import { useLanguage } from '../LanguageProvider';

export default function Portfolio() {
  const { content } = useLanguage();
  return (
    <section id="portfolio" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <FadeIn>
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-2 bg-white text-sm font-medium text-neutral-700 mb-6">
              {content.portfolio.badge}
            </div>
            <h2 className="heading-xl mb-6">
              {content.portfolio.titleLine1}
              <br />
              {content.portfolio.titleLine2}
            </h2>
            <p className="body-base">
              {content.portfolio.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.portfolio.items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden bg-white">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 group-hover:scale-105 transition-transform duration-700"></div>
                
                <div className="p-8">
                  <div className="text-xs font-semibold text-accent-stone uppercase tracking-wider mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
