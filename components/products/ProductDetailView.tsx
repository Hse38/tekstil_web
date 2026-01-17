'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import type { Product } from '@/data/products';
import SectionReveal from '../motion/SectionReveal';

type ProductDetailViewProps = {
  product: Product;
};

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const { locale, content } = useLanguage();

  return (
    <main className="bg-white">
      <section className="section-padding pt-28">
        <SectionReveal className="container-custom">
          <Link
            href="/products"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            {content.products.back}
          </Link>

          <div className="mt-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="relative overflow-hidden rounded-lg border border-neutral-200">
              <div className="relative aspect-[16/9]">
                <Image
                  src={product.images[0]}
                  alt={product.title[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-sm font-medium text-neutral-700 mb-6">
                {content.productDetail.badge}
              </div>
              <h1 className="heading-xl mb-6">{product.title[locale]}</h1>
              <p className="body-base">{product.description[locale]}</p>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="section-padding pt-0">
        <SectionReveal className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  {content.productDetail.fabricType}
                </h2>
                <p className="text-lg text-neutral-900">{product.fabricType[locale]}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  {content.productDetail.usageAreas}
                </h2>
                <ul className="space-y-2 text-neutral-700">
                  {product.usageAreas[locale].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  {content.productDetail.productionOptions}
                </h2>
                <ul className="space-y-2 text-neutral-700">
                  {product.productionOptions[locale].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  {content.productDetail.customization}
                </h2>
                <p className="text-lg text-neutral-900">{product.customization[locale]}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-sm font-medium text-neutral-700 mb-6">
                {content.productDetail.gallery}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.images.map((image, index) => (
                  <motion.div
                    key={image}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative overflow-hidden rounded-lg border border-neutral-200"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`${product.title[locale]} ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
