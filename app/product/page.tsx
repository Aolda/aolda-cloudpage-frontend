import ProductPageClient from '@/components/pages/ProductPageClient';
import { getProductPageData } from '@/lib/api/product';

export default async function ProductPage() {
  const { categories, services } = await getProductPageData();

  return (
    <ProductPageClient
      categories={categories}
      services={services}
    />
  );
}
