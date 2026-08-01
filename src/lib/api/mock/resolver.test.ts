import { describe, expect, it } from 'vitest';
import { getMockApiResponse } from './resolver';
import {
  MOCK_BRIEF,
  MOCK_FAQ_LIST,
  MOCK_NOTICE_LIST,
  MOCK_PRODUCT_LIST,
  getMockNoticeDetail,
} from './data';

describe('getMockApiResponse', () => {
  it('returns brief mock for /cloud/brief', () => {
    expect(getMockApiResponse('/cloud/brief')).toEqual(MOCK_BRIEF);
  });

  it('returns notice detail mock for dynamic notice id', () => {
    expect(getMockApiResponse('/cloud/notice/2')).toEqual(getMockNoticeDetail(2));
  });

  it('returns product list mock for /cloud/product', () => {
    expect(getMockApiResponse('/cloud/product')).toEqual(MOCK_PRODUCT_LIST);
  });

  it('returns enough notice/faq/product items for list UIs', () => {
    expect(MOCK_NOTICE_LIST.data.length).toBeGreaterThan(10);
    expect(MOCK_NOTICE_LIST.total).toBe(MOCK_NOTICE_LIST.data.length);
    expect(MOCK_FAQ_LIST.questions.data.length).toBeGreaterThan(10);
    expect(MOCK_FAQ_LIST.questions.total).toBe(MOCK_FAQ_LIST.questions.data.length);
    expect(Object.keys(MOCK_PRODUCT_LIST.categories).length).toBeGreaterThanOrEqual(5);
    expect(Object.values(MOCK_PRODUCT_LIST.products).flat().length).toBeGreaterThan(10);
  });

  it('throws for unknown routes', () => {
    expect(() => getMockApiResponse('/cloud/unknown')).toThrow(
      'Mock API route not found',
    );
  });
});
