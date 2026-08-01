import type { FilterItem } from '@/components/molecules/CheckboxFilter';
import type { Developer } from '@/components/organisms/DevelopersSection';
import type { SimilarService } from '@/components/organisms/SimilarServicesSection';
import type { ProductDetailRecord } from '@/lib/data/products';
import type {
  ProductDetailResponse,
  ProductListResponse,
} from '../types/cloud';

export interface ProductListItemView {
  icon: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

export interface ProductPageViewModel {
  categories: FilterItem[];
  services: ProductListItemView[];
}

export const mapProductListToViewModel = (
  response: ProductListResponse,
): ProductPageViewModel => {
  const categories: FilterItem[] = Object.entries(response.categories).map(
    ([id, category]) => ({
      id,
      label: category.categoryTitle,
    }),
  );

  const services: ProductListItemView[] = Object.entries(response.products).flatMap(
    ([categoryId, products]) =>
      products.map((product) => ({
        icon: product.productIcon.url,
        title: product.productName,
        description: product.description,
        href: `/product/${product.productId}`,
        category: categoryId,
      })),
  );

  return { categories, services };
};

export const mapProductDetailToRecord = (
  response: ProductDetailResponse,
): ProductDetailRecord => {
  const developers: Developer[] = response.participants.map((participant) => ({
    name: participant.crewName,
    info: `${participant.univDepartment} ${participant.univJoinedYear}`,
    icon: participant.profile.url,
  }));

  const similarServices: SimilarService[] = response.relateServices.map(
    (service) => {
      let logo: string | undefined;
      try {
        const domain = new URL(service.serviceLink).hostname.replace(
          /^www\./,
          '',
        );
        logo = domain
          ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
          : undefined;
      } catch {
        logo = undefined;
      }

      return {
        title: service.pageTitle,
        // API에 요약 필드가 없어 title과 동일 — enrich가 리치 폴백으로 보정
        description: service.pageTitle,
        href: service.serviceLink,
        bannerImage: service.thumbnailImg.url,
        logo,
      };
    },
  );

  return {
    name: response.productName,
    description: response.description,
    logo: response.productIcon.url,
    applicationLink: response.cloudLink,
    projectLink: response.projectLink,
    overview: response.content,
    problems: [],
    solutions: [],
    developers,
    similarServices,
  };
};
