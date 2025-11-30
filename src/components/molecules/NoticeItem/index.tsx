import * as S from './style';

export interface NoticeItemProps {
  /** 공지사항 번호 */
  number: number;
  /** 카테고리 */
  category: string;
  /** 제목 */
  title: string;
  /** 날짜 */
  date: string;
  /** 링크 경로 */
  href?: string;
}

/**
 * 공지사항 아이템 컴포넌트
 * 
 * 공지사항 목록의 개별 항목을 표시합니다.
 * 
 * @param {NoticeItemProps} props - 공지사항 아이템 props
 * @param {number} props.number - 공지사항 번호
 * @param {string} props.category - 카테고리
 * @param {string} props.title - 제목
 * @param {string} props.date - 날짜
 * @param {string} [props.href] - 링크 경로
 * 
 * @example
 * <NoticeItem
 *   number={24}
 *   category="문의요청"
 *   title="문의요청과 관련된 공지사항 타이틀이에요"
 *   date="2001.01.28"
 *   href="/notice/1"
 * />
 * 
 * @returns {JSX.Element} 공지사항 아이템 요소
 */
const NoticeItem = ({
  number,
  category,
  title,
  date,
  href,
}: NoticeItemProps) => {
  const content = (
    <S.NoticeRow>
      <S.Number>{number}</S.Number>
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.NoticeRow>
  );

  if (href) {
    return (
      <S.NoticeLink href={href}>
        {content}
      </S.NoticeLink>
    );
  }

  return <S.NoticeItem>{content}</S.NoticeItem>;
};

export default NoticeItem;

