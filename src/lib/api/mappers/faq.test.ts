import { describe, expect, it } from 'vitest';
import { mapFaqListToViewModel } from './faq';
import type { FaqListResponse } from '../types/cloud';

describe('mapFaqListToViewModel', () => {
  it('maps FAQ API to category options and accordion items', () => {
    const response: FaqListResponse = {
      categories: {
        CAT_GENERAL: {
          categoryImg: { url: 'https://cdn.aolda.io/faq/general.png' },
          categoryTitle: '일반',
        },
      },
      questions: {
        paginate: { from: 1, to: 10, curr: 1 },
        total: 1,
        data: [
          {
            faqId: 1,
            faqTitle: '서비스 가입은 어떻게 하나요?',
            faqAnswer: '홈페이지에서 신청서를 제출하시면 담당자가 안내드립니다.',
          },
        ],
      },
    };

    const viewModel = mapFaqListToViewModel(response);

    expect(viewModel.categoryOptions[0]).toEqual({ id: 'all', label: '전체' });
    expect(viewModel.categoryOptions[1]).toEqual({
      id: 'CAT_GENERAL',
      label: '일반',
    });
    expect(viewModel.faqs[0].title).toBe('서비스 가입은 어떻게 하나요?');
    expect(viewModel.totalCount).toBe(1);
  });
});
