import { describe, expect, it } from 'vitest';
import {
  mapProductDetailToRecord,
  mapProductListToViewModel,
} from './product';
import type {
  ProductDetailResponse,
  ProductListResponse,
} from '../types/cloud';

describe('mapProductListToViewModel', () => {
  it('maps product list API to categories and services', () => {
    const response: ProductListResponse = {
      categories: {
        CAT_PLATFORM: {
          categoryImg: { url: 'https://cdn.aolda.io/products/platform.png' },
          categoryTitle: '플랫폼',
        },
      },
      products: {
        CAT_PLATFORM: [
          {
            productId: 1,
            productIcon: { url: 'https://cdn.aolda.io/products/p1.png' },
            productName: 'Aolda Console',
            description: '클라우드 자원과 프로젝트를 통합 관리하는 콘솔입니다.',
          },
        ],
      },
    };

    const viewModel = mapProductListToViewModel(response);

    expect(viewModel.categories).toEqual([
      { id: 'CAT_PLATFORM', label: '플랫폼' },
    ]);
    expect(viewModel.services[0]).toEqual({
      icon: 'https://cdn.aolda.io/products/p1.png',
      title: 'Aolda Console',
      description: '클라우드 자원과 프로젝트를 통합 관리하는 콘솔입니다.',
      href: '/product/1',
      category: 'CAT_PLATFORM',
    });
  });
});

describe('mapProductDetailToRecord', () => {
  it('maps product detail API to product detail record', () => {
    const response: ProductDetailResponse = {
      productId: 1,
      productIcon: { url: 'https://cdn.aolda.io/products/p1.png' },
      productName: 'Aolda Console',
      description: '클라우드 자원과 프로젝트를 통합 관리하는 콘솔입니다.',
      cloudLink: 'https://cloud.aolda.io/products/console',
      projectLink: 'https://aolda.io/projects/console',
      content: '# Aolda Console',
      participants: [
        {
          crewId: 15,
          profile: { url: 'https://cdn.aolda.io/profiles/crew-15.jpg' },
          crewName: '김서현',
          univDepartment: '소프트웨어학과',
          univJoinedYear: '20',
        },
      ],
      relateServices: [
        {
          pageTitle: 'Aolda Monitor',
          thumbnailImg: { url: 'https://cdn.aolda.io/services/monitor.png' },
          serviceLink: 'https://aolda.io/services/monitor',
        },
      ],
    };

    const record = mapProductDetailToRecord(response);

    expect(record.name).toBe('Aolda Console');
    expect(record.applicationLink).toBe('https://cloud.aolda.io/products/console');
    expect(record.developers[0]).toMatchObject({
      name: '김서현',
      info: '소프트웨어학과 20',
    });
    expect(record.similarServices[0].href).toBe('https://aolda.io/services/monitor');
  });
});
