import type { FilterItem } from '@/components/molecules/CheckboxFilter';
import type { ProductDetailRecord } from '@/lib/data/products';
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
    return mapProductDetailToRecord(response);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `[product] GET /cloud/product/${id} failed, using fallback:`,
        error,
      );
    }

    return getFallbackProductDetail(id);
  }
}
