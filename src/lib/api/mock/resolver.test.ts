import { describe, expect, it } from 'vitest';
import { getMockApiResponse } from './resolver';
import { MOCK_BRIEF, MOCK_NOTICE_DETAIL, MOCK_PRODUCT_LIST } from './data';

describe('getMockApiResponse', () => {
  it('returns brief mock for /cloud/brief', () => {
    expect(getMockApiResponse('/cloud/brief')).toEqual(MOCK_BRIEF);
  });

  it('returns notice detail mock for dynamic notice id', () => {
    expect(getMockApiResponse('/cloud/notice/2')).toEqual(MOCK_NOTICE_DETAIL);
  });

  it('returns product list mock for /cloud/product', () => {
    expect(getMockApiResponse('/cloud/product')).toEqual(MOCK_PRODUCT_LIST);
  });

  it('throws for unknown routes', () => {
    expect(() => getMockApiResponse('/cloud/unknown')).toThrow(
      'Mock API route not found',
    );
  });
});
