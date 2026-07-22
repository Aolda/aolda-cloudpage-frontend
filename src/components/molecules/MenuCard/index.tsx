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
          <S.ArrowIcon aria-hidden>
            <S.ArrowVector viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* Vector inset: left/right 35.94%, top/bottom 21.88% */}
              <path d="M7.188 4.376L12.812 10L7.188 15.624" />
            </S.ArrowVector>
          </S.ArrowIcon>
        </S.ActionLabel>
      </S.MenuCard>
    </S.MenuCardLink>
  );
};

export default MenuCard;
