'use client';

import { useState } from 'react';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    console.log('검색:', value);
  };

  return (
    <ProductPageTemplate
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      onSearch={handleSearch}
    />
  );
}

