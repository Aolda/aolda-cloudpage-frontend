import type { NoticeItemProps } from '@/components/molecules/NoticeItem';
import type { NoticeDetailData } from '@/components/organisms/NoticeDetailContent';
import type {
  NoticeDetailResponse,
  NoticeListResponse,
} from '../types/cloud';

const NOTICE_TYPE_LABELS: Record<string, string> = {
  'NOTICE_TYPE/SERVICE': '공지',
  'NOTICE_TYPE/USAGE': '운영',
  'NOTICE_TYPE/INQUIRY': '문의요청',
};

export const mapNoticeTypeToLabel = (noticeType: string): string =>
  NOTICE_TYPE_LABELS[noticeType] ?? '공지';

export const formatNoticeDate = (createdAt: string): string => {
  const [datePart] = createdAt.split(' ');
  return datePart.replace(/-/g, '.');
};

const fileNameFromUrl = (url: string): string => {
  try {
    const segment = url.split('/').pop() ?? '첨부파일';
    return decodeURIComponent(segment);
  } catch {
    return '첨부파일';
  }
};

export const mapNoticeListToItems = (
  response: NoticeListResponse,
): NoticeItemProps[] =>
  response.data.map((item) => ({
    number: item.noticeId,
    category: mapNoticeTypeToLabel(item.noticeType),
    title: item.noticeTitle,
    date: formatNoticeDate(item.createdAt),
    href: `/notice/${item.noticeId}`,
  }));

export const mapNoticeDetailToViewModel = (
  response: NoticeDetailResponse,
): NoticeDetailData => {
  const { data, neighbors } = response;

  return {
    number: data.noticeId,
    title: data.noticeTitle,
    author: data.createdBy.userName,
    date: formatNoticeDate(data.createdAt),
    views: data.readCount,
    attachments: data.attatchments.map((attachment) => ({
      name: fileNameFromUrl(attachment.file.url),
      url: attachment.file.url,
    })),
    content: data.content,
    prevHref: neighbors.prev > 0 ? `/notice/${neighbors.prev}` : undefined,
    nextHref: neighbors.next > 0 ? `/notice/${neighbors.next}` : undefined,
  };
};
