import { notFound } from 'next/navigation';
import ProductDetailView from '@/components/products/ProductDetailView';
import { getProductBySlug, products } from '@/data/products';

type ProductDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
