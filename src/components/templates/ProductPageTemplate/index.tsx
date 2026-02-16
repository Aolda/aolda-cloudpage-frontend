'use client';

import { useState } from 'react';
import BaseTemplate from '../BaseTemplate';
import ProductHeroSection from '../../organisms/ProductHeroSection';
import SideNavigation from '../../organisms/SideNavigation';
import ProductList from '../../organisms/ProductList';
import * as S from './style';

export interface ProductPageTemplateProps {
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
  /** 서비스 목록 */
  services?: Array<{
    icon: string;
    title: string;
    description: string;
    href: string;
  }>;
}

/**
 * 제품 페이지 템플릿 컴포넌트
 * 
 * 제품 소개 페이지를 구성하는 템플릿입니다.
 * ProductHeroSection, SideNavigation, ProductList를 포함합니다.
 * 
 * @returns {JSX.Element} 제품 페이지 템플릿 요소
 */
const ProductPageTemplate = ({
  searchTerm = '',
  onSearchChange,
  onSearch,
  services = [],
}: ProductPageTemplateProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['favorites']);

  const categories = [
    { id: 'favorites', label: '즐겨찾기' },
    { id: 'server', label: '서버' },
    { id: 'instance', label: '인스턴스' },
    { id: 'storage', label: '스토리지' },
    { id: 'networking', label: '네트워킹' },
  ];

  const defaultServices = [
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.",
      href: "/product/amdb"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMMS",
      description: "1줄일때",
      href: "/product/amms"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "ARISE",
      description: "2줄일 때 2줄일 때",
      href: "/product/arise"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 4",
      description: "1줄일때",
      href: "/product/service4"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 5",
      description: "2줄일 때 2줄일 때",
      href: "/product/service5"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 6",
      description: "1줄일때",
      href: "/product/service6"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 7",
      description: "2줄일 때 2줄일 때",
      href: "/product/service7"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 8",
      description: "1줄일때",
      href: "/product/service8"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 9",
      description: "2줄일 때 2줄일 때",
      href: "/product/service9"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 10",
      description: "1줄일때",
      href: "/product/service10"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 11",
      description: "2줄일 때 2줄일 때",
      href: "/product/service11"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 12",
      description: "1줄일때",
      href: "/product/service12"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 13",
      description: "2줄일 때 2줄일 때",
      href: "/product/service13"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 14",
      description: "1줄일때",
      href: "/product/service14"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "Service 15",
      description: "2줄일 때 2줄일 때",
      href: "/product/service15"
    },
  ];

  const handleSearch = (value: string) => {
    onSearch?.(value);
  };

  return (
    <BaseTemplate>
      <S.TemplateContainer>
        <ProductHeroSection
          title="아올다 Service"
          description="아올다에서 제품은 기획서에 따라 진행된 각 프로젝트의 최종 성과물을 의미합니다. 이는 사용자에게 제공되는 외부 서비스뿐만 아니라, 클라우드 환경 내에서 사용되는 모든 서비스 단위를 포괄합니다."
          breadcrumbItems={[
            { label: '홈', href: '/' },
            { label: '제품소개' },
          ]}
        />
        <S.ContentWrapper>
          <S.SidebarWrapper>
            <SideNavigation
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </S.SidebarWrapper>
          <S.MainContent>
            <ProductList
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
              onSearch={handleSearch}
              services={services.length > 0 ? services : defaultServices}
              sectionTitle="즐겨찾기"
            />
          </S.MainContent>
        </S.ContentWrapper>
      </S.TemplateContainer>
    </BaseTemplate>
  );
};

export default ProductPageTemplate;

