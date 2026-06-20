import { notFound } from 'next/navigation';
import NoticeDetailPageTemplate from '@/components/templates/NoticeDetailPageTemplate';
import { getNoticeDetailData } from '@/lib/api/notice';

interface NoticeDetailPageProps {
  params: { id: string };
}

export default async function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const noticeData = await getNoticeDetailData(params.id);

  if (!noticeData) {
    notFound();
  }

  return <NoticeDetailPageTemplate data={noticeData} />;
}
