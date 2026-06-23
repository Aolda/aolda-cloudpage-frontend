import ProductDetailPageTemplate from '@/components/templates/ProductDetailPageTemplate';
import { getProductDetailData } from '@/lib/api/product';

interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productData = await getProductDetailData(params.id);

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
