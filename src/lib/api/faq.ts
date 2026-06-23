import type { AccordionProps } from '@/components/molecules/Accordion';
import type { FilterItem } from '@/components/molecules/TagFilter';
import { getCloudFaqList } from './cloud';
import {
  FALLBACK_FAQ_CATEGORIES,
  FALLBACK_FAQS,
} from './fallbacks';
import { mapFaqListToViewModel } from './mappers/faq';

export interface FaqPageData {
  categoryOptions: FilterItem[];
  faqs: AccordionProps[];
  totalCount: number;
}

export async function getFaqPageData(): Promise<FaqPageData> {
  try {
    const response = await getCloudFaqList();
    return mapFaqListToViewModel(response);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[faq] GET /cloud/qna failed, using fallback:', error);
    }

    return {
      categoryOptions: FALLBACK_FAQ_CATEGORIES,
      faqs: FALLBACK_FAQS,
      totalCount: FALLBACK_FAQS.length,
    };
  }
}
