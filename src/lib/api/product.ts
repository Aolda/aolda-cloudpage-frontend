import type { FilterItem } from '@/components/molecules/CheckboxFilter';
import type { ProductDetailRecord } from '@/lib/data/products';
import {
  DEFAULT_SIMILAR_SERVICES,
  getProductById,
  needsSimilarServicesFallback,
} from '@/lib/data/products';
import { getCloudProductDetail, getCloudProductList } from './cloud';
import {
  FALLBACK_PRODUCT_CATEGORIES,
  FALLBACK_PRODUCT_SERVICES,
  getFallbackProductDetail,
} from './fallbacks';
import {
  mapProductDetailToRecord,
  mapProductListToViewModel,
  type ProductListItemView,
} from './mappers/product';

function withRichSimilarServices(
  record: ProductDetailRecord,
): ProductDetailRecord {
  if (!needsSimilarServicesFallback(record.similarServices)) {
    return record;
  }

  return {
    ...record,
    similarServices: DEFAULT_SIMILAR_SERVICES,
  };
}

/**
 * API에 문제점/해결책 필드가 없을 때, AMDB 등 데모 제품은
 * 로컬 구조화 섹션으로 상세 UI(Figma)를 채웁니다.
 * 유사 서비스는 제품과 무관하게 리치 프리뷰 카드로 보장합니다.
 */
function enrichStructuredDetailSections(
  record: ProductDetailRecord,
  id: string,
): ProductDetailRecord {
  const withSimilar = withRichSimilarServices(record);

  if (withSimilar.problems.length > 0 || withSimilar.solutions.length > 0) {
    return withSimilar;
  }

  const demoKey =
    withSimilar.name.toLowerCase() === 'amdb' ||
    id.toLowerCase().startsWith('amdb')
      ? 'amdb'
      : id;
  const demo = getProductById(demoKey);

  if (demo.problems.length === 0 && demo.solutions.length === 0) {
    return withSimilar;
  }

  return {
    ...withSimilar,
    // Figma 제품 개요는 타이틀만 — flat markdown overview는 숨김
    overview: demo.overview,
    problems: demo.problems,
    solutions: demo.solutions,
    developers:
      withSimilar.developers.length > 0
        ? withSimilar.developers
        : demo.developers,
    // 유사 서비스는 위에서 이미 리치 폴백 보장
    similarServices: withSimilar.similarServices,
  };
}

export interface ProductPageData {
  categories: FilterItem[];
  services: ProductListItemView[];
}

export async function getProductPageData(): Promise<ProductPageData> {
  try {
    const response = await getCloudProductList();
    return mapProductListToViewModel(response);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[product] GET /cloud/product failed, using fallback:', error);
    }

    return {
      categories: FALLBACK_PRODUCT_CATEGORIES,
      services: FALLBACK_PRODUCT_SERVICES,
    };
  }
}

export async function getProductDetailData(
  id: string,
): Promise<ProductDetailRecord> {
  try {
    const response = await getCloudProductDetail(id);
    return enrichStructuredDetailSections(
      mapProductDetailToRecord(response),
      id,
    );
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `[product] GET /cloud/product/${id} failed, using fallback:`,
        error,
      );
    }

    return withRichSimilarServices(getFallbackProductDetail(id));
  }
}
