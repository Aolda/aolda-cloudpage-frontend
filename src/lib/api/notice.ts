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
} from './mappers/notice';

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

export async function getNoticeDetailData(
  id: string,
): Promise<NoticeDetailData | undefined> {
  try {
    const response = await getCloudNoticeDetail(id);
    return mapNoticeDetailToViewModel(response);
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
