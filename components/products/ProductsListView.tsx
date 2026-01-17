'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import SectionReveal from '../motion/SectionReveal';

export default function ProductsListView() {
  const { locale, content } = useLanguage();

  return (
    <main className="bg-white">
      <section className="section-padding">
        <SectionReveal className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-sm font-medium text-neutral-700 mb-6">
              {content.products.badge}
            </div>
            <h1 className="heading-xl mb-6">{content.products.title}</h1>
            <p className="body-base">{content.products.description}</p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                href={`/products/${product.slug}`}
                title={product.title[locale]}
                description={product.shortDescription[locale]}
                image={product.images[0]}
                index={index}
              />
            ))}
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
