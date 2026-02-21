'use client';

import { useState } from 'react';
import BaseTemplate from '../BaseTemplate';
import ProductHeroSection from '../../organisms/ProductHeroSection';
import SideNavigation from '../../organisms/SideNavigation';
import ProductList from '../../organisms/ProductList';
import Search from '../../molecules/Search';
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
    category?: string;
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
      href: "/product/amdb",
      category: "server"
    },{
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.",
      href: "/product/amdb",
      category: "server"
    },{
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.",
      href: "/product/amdb",
      category: "server"
    },{
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.",
      href: "/product/amdb",
      category: "server"
    },{
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.",
      href: "/product/amdb",
      category: "server"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMMS",
      description: "1줄일때",
      href: "/product/amms",
      category: "instance"
    }, 
    {
      icon: "/product/product_serviceCard.png",
      title: "AMMS",
      description: "1줄일때",
      href: "/product/amms",
      category: "instance"
    }, 
    {
      icon: "/product/product_serviceCard.png",
      title: "AMMS",
      description: "1줄일때",
      href: "/product/amms",
      category: "instance"
    }, 
    {
      icon: "/product/product_serviceCard.png",
      title: "AMMS",
      description: "1줄일때",
      href: "/product/amms",
      category: "instance"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "ARISE",
      description: "2줄일 때 2줄일 때",
      href: "/product/arise",
      category: "storage"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "1줄일때",
      href: "/product/service4",
      category: "networking"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "1줄일때",
      href: "/product/service4",
      category: "networking"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "1줄일때",
      href: "/product/service4",
      category: "networking"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "2줄일 때 2줄일 때",
      href: "/product/service5",
      category: "server"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "1줄일때",
      href: "/product/service6",
      category: "instance"
    },
    {
      icon: "/product/product_serviceCard.png",
      title: "AMDB",
      description: "2줄일 때 2줄일 때",
      href: "/product/service7",
      category: "storage"
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
            <S.SearchSection>
              <Search
                placeholder="제품/서비스를 검색해 보세요"
                value={searchTerm}
                onChange={onSearchChange}
                onSearch={handleSearch}
              />
            </S.SearchSection>
            {categories.map((category) => {
              // 선택된 카테고리만 표시
              if (selectedCategories.length > 0 && !selectedCategories.includes(category.id)) {
                return null;
              }
              
              // 해당 카테고리의 서비스만 필터링
              const allServices = services.length > 0 ? services : defaultServices;
              const filteredServices = allServices.filter(
                (service) => service.category === category.id
              );
              
              // 즐겨찾기는 카테고리가 없는 서비스도 포함
              const categoryServices = category.id === 'favorites' 
                ? allServices.filter((service) => !service.category || service.category === 'favorites')
                : filteredServices;
              
              // 서비스가 없으면 섹션을 표시하지 않음
              if (categoryServices.length === 0) {
                return null;
              }
              
              return (
                <ProductList
                  key={category.id}
                  searchTerm={searchTerm}
                  onSearchChange={onSearchChange}
                  onSearch={handleSearch}
                  services={categoryServices}
                  sectionTitle={category.label}
                  showSearch={false}
                />
              );
            })}
          </S.MainContent>
        </S.ContentWrapper>
      </S.TemplateContainer>
    </BaseTemplate>
  );
};

export default ProductPageTemplate;

