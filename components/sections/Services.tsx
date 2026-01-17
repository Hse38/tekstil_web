'use client';

import FadeIn from '../FadeIn';
import { useLanguage } from '../LanguageProvider';
import SectionReveal from '../motion/SectionReveal';

export default function Services() {
  const { content } = useLanguage();
  return (
    <section id="services" className="section-padding bg-neutral-50">
      <SectionReveal className="container-custom">
        <FadeIn>
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-2 bg-white text-sm font-medium text-neutral-700 mb-6">
              {content.services.badge}
            </div>
            <h2 className="heading-xl mb-6">
              {content.services.titleLine1}
              <br />
              {content.services.titleLine2}
            </h2>
            <p className="body-base">
              {content.services.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group bg-white p-10 hover:shadow-xl transition-all duration-500 border border-neutral-200 hover:border-neutral-300 transform-gpu hover:-translate-y-0.5">
                <div className="text-5xl text-accent-stone mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
