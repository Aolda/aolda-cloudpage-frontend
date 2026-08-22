import type { NoticeItemProps } from '@/components/molecules/NoticeItem';
import type { NoticeDetailData } from '@/components/organisms/NoticeDetailContent';
import { getCloudNoticeDetail, getCloudNoticeList } from './cloud';
import {
  FALLBACK_NOTICES,
  getFallbackNoticeDetail,
} from './fallbacks';
import {
  mapNoticeDetailToViewModel,
  mapNoticeListToItems,
  type NoticeNeighborTitles,
} from './mappers/notice';
import type { NoticeDetailResponse } from './types/cloud';

export interface NoticePageData {
  notices: NoticeItemProps[];
  totalCount: number;
}

export async function getNoticePageData(): Promise<NoticePageData> {
  try {
    const response = await getCloudNoticeList();
    const notices = mapNoticeListToItems(response);

    return {
      notices,
      totalCount: response.total,
    };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[notice] GET /cloud/notice failed, using fallback:', error);
    }

    return {
      notices: FALLBACK_NOTICES,
      totalCount: FALLBACK_NOTICES.length,
    };
  }
}

async function resolveNeighborTitles(
  neighbors: NoticeDetailResponse['neighbors'],
): Promise<NoticeNeighborTitles> {
  const titles: NoticeNeighborTitles = {};
  if (neighbors.prev <= 0 && neighbors.next <= 0) {
    return titles;
  }

  try {
    const listResponse = await getCloudNoticeList();
    const titleById = new Map(
      listResponse.data.map((item) => [item.noticeId, item.noticeTitle]),
    );

    if (neighbors.prev > 0) {
      titles.prev = titleById.get(neighbors.prev);
    }
    if (neighbors.next > 0) {
      titles.next = titleById.get(neighbors.next);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[notice] failed to resolve neighbor titles from list:',
        error,
      );
    }
  }

  // 목록에 없는 이웃은 개별 상세로 제목 보완
  const fillMissing = async (
    noticeId: number,
    key: keyof NoticeNeighborTitles,
  ) => {
    if (noticeId <= 0 || titles[key]) return;
    try {
      const detail = await getCloudNoticeDetail(String(noticeId));
      titles[key] = detail.data.noticeTitle;
    } catch {
      // mapper fallback title (`공지 #id`) 사용
    }
  };

  await Promise.all([
    fillMissing(neighbors.prev, 'prev'),
    fillMissing(neighbors.next, 'next'),
  ]);

  return titles;
}

export async function getNoticeDetailData(
  id: string,
): Promise<NoticeDetailData | undefined> {
  try {
    const response = await getCloudNoticeDetail(id);
    const neighborTitles = await resolveNeighborTitles(response.neighbors);
    return mapNoticeDetailToViewModel(response, neighborTitles);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `[notice] GET /cloud/notice/${id} failed, using fallback:`,
        error,
      );
    }

    return getFallbackNoticeDetail(id);
  }
}
