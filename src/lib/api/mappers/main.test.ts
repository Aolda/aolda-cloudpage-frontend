import { describe, expect, it } from 'vitest';
import {
  formatUseProjectPeriod,
  mapBriefToStats,
  mapUseProjectsToPartners,
  padPartnersForDisplay,
} from './main';
import type { BriefResponse, UseProjectResponse } from '../types/cloud';

describe('mapBriefToStats', () => {
  it('maps backend brief response to stat cards', () => {
    const brief: BriefResponse = {
      userCount: { value: 12540, unit: '명' },
      projectCount: { value: 312, unit: '개' },
      __________: { value: 48, unit: '개' },
    };

    expect(mapBriefToStats(brief)).toEqual([
      { title: '누적 사용자', value: 12540, unit: '명' },
      { title: '누적 프로젝트 수', value: 312, unit: '개' },
      { title: '누적 블로그', value: 48, unit: '개' },
    ]);
  });
});

describe('formatUseProjectPeriod', () => {
  it('formats from-to semester range', () => {
    expect(
      formatUseProjectPeriod({
        from: { year: 2024, semester: 2 },
        to: { year: 2025, semester: 1 },
      }),
    ).toBe('2024-2 ~ 2025-1');
  });

  it('formats from-only semester', () => {
    expect(
      formatUseProjectPeriod({
        from: { year: 2023, semester: 1 },
      }),
    ).toBe('2023-1');
  });
});

describe('mapUseProjectsToPartners', () => {
  it('maps use_project API to partner cards', () => {
    const response: UseProjectResponse = {
      total: 1,
      data: [
        {
          teamName: 'Aolda Research Lab',
          description: '대학 연구과제 데이터 파이프라인을 운영합니다.',
          duration: {
            from: { year: 2024, semester: 2 },
            to: { year: 2025, semester: 1 },
          },
          projectImage: { url: 'https://cdn.aolda.io/cloud/use-1.jpg' },
        },
      ],
    };

    expect(mapUseProjectsToPartners(response)).toEqual([
      {
        name: 'Aolda Research Lab',
        description: '대학 연구과제 데이터 파이프라인을 운영합니다.',
        period: '2024-2 ~ 2025-1',
        image: 'https://cdn.aolda.io/cloud/use-1.jpg',
      },
    ]);
  });
});

describe('padPartnersForDisplay', () => {
  it('pads partners to minimum count for marquee layout', () => {
    const partners = [
      {
        name: 'A',
        description: 'desc',
        image: '/intro/intro_used.png',
      },
    ];

    const padded = padPartnersForDisplay(partners, 3);
    expect(padded).toHaveLength(3);
    expect(padded[2].name).toBe('A');
  });
});
