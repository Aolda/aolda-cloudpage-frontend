'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';

function ProductPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = searchParams.get('search');
    if (q) setSearchTerm(q);
  }, [searchParams]);

  const handleSearch = (value: string) => {
    router.push(`/product?search=${encodeURIComponent(value)}`);
  };

  return (
    <ProductPageTemplate
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      onSearch={handleSearch}
    />
  );
}

export default function ProductPage() {
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
      <ProductPageInner />
    </Suspense>
  );
}
