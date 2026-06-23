import type { AccordionProps } from '@/components/molecules/Accordion';
import type { FilterItem } from '@/components/molecules/TagFilter';
import type { FaqListResponse } from '../types/cloud';

export interface FaqPageViewModel {
  categoryOptions: FilterItem[];
  faqs: AccordionProps[];
  totalCount: number;
}

export const mapFaqListToViewModel = (
  response: FaqListResponse,
): FaqPageViewModel => {
  const categoryOptions: FilterItem[] = [
    { id: 'all', label: '전체' },
    ...Object.entries(response.categories).map(([id, category]) => ({
      id,
      label: category.categoryTitle,
    })),
  ];

  const faqs: AccordionProps[] = response.questions.data.map((item) => ({
    title: item.faqTitle,
    content: item.faqAnswer,
    defaultExpanded: false,
  }));

  return {
    categoryOptions,
    faqs,
    totalCount: response.questions.total,
  };
};
