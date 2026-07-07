import type { NoticeDetailData } from '@/components/organisms/NoticeDetailContent';

const notices: Record<string, NoticeDetailData> = {
  '24': {
    number: 24,
    title: '안녕하세요. 디자이너 이명건입니다.',
    author: '이명건',
    date: '2023.08.31',
    views: 128,
    content: `# 본문1 Text입니다. h1

## 본문2 Text입니다. h2

### 본문3 Text입니다. h3

본문텍스트입니다.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    prevTitle: '문의요청과 관련된 공지사항 타이틀이에요',
    prevHref: '/notice/23',
    nextTitle: '문의요청과 관련된 공지사항 타이틀이에요',
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

export function getNoticeById(id: string): NoticeDetailData | undefined {
  return notices[id];
}
