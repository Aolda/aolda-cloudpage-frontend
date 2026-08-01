import { describe, expect, it } from 'vitest';
import { getNoticeById } from './notices';
import { getProductById } from './products';

describe('getNoticeById', () => {
  it('returns notice for known id', () => {
    const n = getNoticeById('24');
    expect(n).toBeDefined();
    expect(n?.number).toBe(24);
  });

  it('returns undefined for unknown id', () => {
    expect(getNoticeById('999')).toBeUndefined();
  });
});

describe('getProductById', () => {
  it('returns AMDB payload for amdb slug', () => {
    const p = getProductById('amdb');
    expect(p.name).toBe('AMDB');
    expect(p.problems.length).toBeGreaterThan(0);
  });

  it('returns placeholder for unknown slug', () => {
    const p = getProductById('unknown-service');
    expect(p.name).toBe('UNKNOWN-SERVICE');
    expect(p.problems).toEqual([]);
  });
});
