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
    (service) => ({
      title: service.pageTitle,
      description: service.pageTitle,
      href: service.serviceLink,
      bannerImage: service.thumbnailImg.url,
      logo: service.thumbnailImg.url,
    }),
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
