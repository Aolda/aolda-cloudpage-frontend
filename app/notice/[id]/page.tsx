import { notFound } from 'next/navigation';
import NoticeDetailPageTemplate from '@/components/templates/NoticeDetailPageTemplate';
import { getNoticeById } from '@/lib/data/notices';

interface NoticeDetailPageProps {
  params: { id: string };
}

export default function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const noticeData = getNoticeById(params.id);
  if (!noticeData) {
    notFound();
  }
  return <NoticeDetailPageTemplate data={noticeData} />;
}
