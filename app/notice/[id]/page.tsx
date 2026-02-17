'use client';

import NoticeDetailPageTemplate from '@/components/templates/NoticeDetailPageTemplate';
import type { NoticeDetailData } from '@/components/organisms/NoticeDetailContent';

// 임시 데이터 - 실제로는 API나 데이터베이스에서 가져와야 합니다
const getNoticeData = (id: string): NoticeDetailData | null => {
  const notices: Record<string, NoticeDetailData> = {
    '24': {
      number: 24,
      title: '문의요청과 관련된 공지사항 타이틀이에요',
      author: '관리자',
      date: '2001.01.28',
      views: 128,
      content: `
        <p>이것은 공지사항의 본문 내용입니다.</p>
        <p>여러 줄의 내용을 작성할 수 있으며, HTML 태그를 사용할 수 있습니다.</p>
        <p>공지사항의 상세 내용이 여기에 표시됩니다.</p>
      `,
      prevTitle: '이전 공지사항 제목',
      prevHref: '/notice/23',
      nextTitle: '다음 공지사항 제목',
      nextHref: '/notice/25',
    },
    '23': {
      number: 23,
      title: '공지와 관련된 공지사항 타이틀이에요',
      author: '관리자',
      date: '2001.01.27',
      views: 95,
      content: `
        <p>이것은 공지사항의 본문 내용입니다.</p>
        <p>여러 줄의 내용을 작성할 수 있으며, HTML 태그를 사용할 수 있습니다.</p>
      `,
      prevTitle: '이전 공지사항 제목',
      prevHref: '/notice/22',
      nextTitle: '문의요청과 관련된 공지사항 타이틀이에요',
      nextHref: '/notice/24',
    },
    '22': {
      number: 22,
      title: '운영과 관련된 공지사항 타이틀이에요',
      author: '관리자',
      date: '2001.01.26',
      views: 76,
      content: `
        <p>이것은 공지사항의 본문 내용입니다.</p>
        <p>여러 줄의 내용을 작성할 수 있으며, HTML 태그를 사용할 수 있습니다.</p>
      `,
      prevTitle: '이전 공지사항 제목',
      prevHref: '/notice/21',
      nextTitle: '공지와 관련된 공지사항 타이틀이에요',
      nextHref: '/notice/23',
    },
  };

  return notices[id] || null;
};

interface NoticeDetailPageProps {
  params: {
    id: string;
  };
}

export default function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const noticeData = getNoticeData(params.id);

  if (!noticeData) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>공지사항을 찾을 수 없습니다</h1>
        <p>요청하신 공지사항이 존재하지 않습니다.</p>
      </div>
    );
  }

  return <NoticeDetailPageTemplate data={noticeData} />;
}

