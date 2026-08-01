import NoticePageTemplate from '@/components/templates/NoticePageTemplate';
import { getNoticePageData } from '@/lib/api/notice';

export default async function NoticePage() {
  const { notices, totalCount } = await getNoticePageData();

  return (
    <NoticePageTemplate
      notices={notices}
      totalCount={totalCount}
    />
  );
}
