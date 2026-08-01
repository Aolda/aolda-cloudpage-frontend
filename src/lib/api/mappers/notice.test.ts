import { describe, expect, it } from 'vitest';
import {
  formatNoticeDate,
  mapNoticeDetailToViewModel,
  mapNoticeListToItems,
  mapNoticeTypeToLabel,
} from './notice';
import type { NoticeDetailResponse, NoticeListResponse } from '../types/cloud';

describe('mapNoticeTypeToLabel', () => {
  it('maps backend notice types to UI labels', () => {
    expect(mapNoticeTypeToLabel('NOTICE_TYPE/SERVICE')).toBe('공지');
    expect(mapNoticeTypeToLabel('NOTICE_TYPE/USAGE')).toBe('운영');
  });
});

describe('formatNoticeDate', () => {
  it('formats createdAt to dotted date', () => {
    expect(formatNoticeDate('2025-01-15 09:30:00')).toBe('2025.01.15');
  });
});

describe('mapNoticeListToItems', () => {
  it('maps notice list API to notice items', () => {
    const response: NoticeListResponse = {
      paginate: { from: 1, to: 10, curr: 1 },
      total: 1,
      data: [
        {
          noticeId: 1,
          noticeType: 'NOTICE_TYPE/SERVICE',
          noticeTitle: '정기 점검 안내',
          createdAt: '2025-02-01 18:00:00',
        },
      ],
    };

    expect(mapNoticeListToItems(response)).toEqual([
      {
        number: 1,
        category: '공지',
        title: '정기 점검 안내',
        date: '2025.02.01',
        href: '/notice/1',
      },
    ]);
  });
});

describe('mapNoticeDetailToViewModel', () => {
  it('maps notice detail API including attachments and neighbors', () => {
    const response: NoticeDetailResponse = {
      data: {
        noticeId: 1,
        noticeType: 'NOTICE_TYPE/USAGE',
        noticeTitle: '클라우드 사용 가이드 업데이트',
        createdAt: '2025-01-15 09:30:00',
        createdBy: { userId: 1, userName: '관리자' },
        readCount: 128,
        attatchments: [
          {
            attatchmentId: 1,
            file: { url: 'https://cdn.aolda.io/notices/guide.pdf' },
          },
        ],
        content: '# 업데이트 안내',
      },
      neighbors: { prev: 0, next: 2 },
    };

    expect(mapNoticeDetailToViewModel(response)).toMatchObject({
      number: 1,
      title: '클라우드 사용 가이드 업데이트',
      author: '관리자',
      date: '2025.01.15',
      views: 128,
      content: '# 업데이트 안내',
      nextHref: '/notice/2',
    });
  });
});
