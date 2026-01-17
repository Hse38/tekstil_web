'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productCardVariants } from './motion';
import { motionTokens } from '../motion/tokens';

type ProductCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  index: number;
};

export default function ProductCard({ href, title, description, image, index }: ProductCardProps) {
  return (
    <motion.div
      variants={productCardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * motionTokens.cardStagger }}
      className="h-full"
    >
      <Link
        href={href}
        className="group flex h-full flex-col border border-neutral-200 bg-white p-6 transition-shadow transition-transform hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
      >
        <div className="relative mb-6 overflow-hidden rounded-md">
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
