'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { FilterItem } from '@/components/molecules/CheckboxFilter';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import type { ProductPageTemplateProps } from '@/components/templates/ProductPageTemplate';

type ProductPageClientProps = Pick<ProductPageTemplateProps, 'categories' | 'services'>;

function ProductPageInner({ categories, services }: ProductPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = searchParams.get('search');
    if (q) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  const handleSearch = (value: string) => {
    router.push(`/product?search=${encodeURIComponent(value)}`);
  };

  return (
    <ProductPageTemplate
      categories={categories}
      services={services}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      onSearch={handleSearch}
    />
  );
}

export default function ProductPageClient(props: ProductPageClientProps) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            padding: '3rem',
            textAlign: 'center',
            color: '#666',
            fontFamily: 'system-ui, sans-serif',
          }}
          aria-busy="true"
          aria-live="polite"
        >
          로딩 중...
        </div>
      }
    >
      <ProductPageInner {...props} />
    </Suspense>
  );
}
