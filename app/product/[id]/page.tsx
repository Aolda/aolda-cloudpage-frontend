import ProductDetailPageTemplate from '@/components/templates/ProductDetailPageTemplate';
import { getProductById } from '@/lib/data/products';

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
  const productData = getProductById(id);

  return (
    <ProductDetailPageTemplate
      name={productData.name}
      description={productData.description}
      breadcrumbItems={[
        { label: '홈', href: '/' },
        { label: '제품소개', href: '/product' },
        { label: productData.name },
      ]}
      applicationLink={productData.applicationLink}
      projectLink={productData.projectLink}
      overview={productData.overview}
      problems={productData.problems}
      solutions={productData.solutions}
      developers={productData.developers}
      similarServices={productData.similarServices}
    />
  );
}
