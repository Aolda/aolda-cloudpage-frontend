import Link from 'next/link';
import { ReactNode } from 'react';
import * as S from './style';

export interface MenuCardProps {
  /** 카드 제목 (줄바꿈은 \n으로 표시 또는 ReactNode) */
  title: string | ReactNode;
  /** 링크 경로 */
  href: string;
  /** 링크 버튼 텍스트 */
  actionLabel: string;
}

/**
 * 메뉴 카드 컴포넌트
 * 
 * 제목과 액션 링크를 포함한 카드 형태의 메뉴 아이템입니다.
 * 
 * @param {MenuCardProps} props - 카드 props
 * @param {string} props.title - 카드 제목 (줄바꿈은 \n으로 표시)
 * @param {string} props.href - 링크 경로
 * @param {string} props.actionLabel - 링크 버튼 텍스트
 * 
 * @example
 * <MenuCard
 *   title="아올다,\n처음이신가요?"
 *   actionLabel="사용 가이드"
 *   href="/useinfo"
 * />
 * 
 * @returns {JSX.Element} 메뉴 카드 요소
 */
const MenuCard = ({ title, href, actionLabel }: MenuCardProps) => {
  return (
    <S.MenuCardLink as={Link} href={href}>
      <S.MenuCard>
        <S.Title>
          {title}
        </S.Title>
        <S.ActionLabel>
          <S.ActionLabelText>{actionLabel}</S.ActionLabelText>
          <S.ArrowIcon>
            <S.ArrowVector
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* 왼쪽 chevron: 오른쪽 꼭짓점 → 왼쪽 위, 오른쪽 꼭짓점 → 왼쪽 아래 */}
              <path d="M 18 12 L 6 6 M 18 12 L 6 18" />
            </S.ArrowVector>
          </S.ArrowIcon>
        </S.ActionLabel>
      </S.MenuCard>
    </S.MenuCardLink>
  );
};

export default MenuCard;
