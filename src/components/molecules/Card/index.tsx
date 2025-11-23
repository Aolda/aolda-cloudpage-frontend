import type { ReactNode } from 'react';
import * as S from './style';

export interface CardProps {
  /** 카드 내용 */
  children: ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

/**
 * 공통 카드 베이스 컴포넌트
 * 
 * 모든 카드 타입의 공통 스타일과 구조를 제공하는 베이스 컴포넌트입니다.
 * 각 카드 타입(StatCard, ItemCard, ImageCard, MenuCard)이 이 컴포넌트를 사용합니다.
 * 
 * @param {CardProps} props - 카드 props
 * @param {ReactNode} props.children - 카드 내용
 * @param {string} [props.className] - 추가 CSS 클래스
 * 
 * @example
 * // 직접 사용하지 않고, 각 카드 타입 컴포넌트를 사용하세요
 * <StatCard title="누적 사용자" value="30+ 명" />
 * <ItemCard title="제목" description="설명" icon="free" />
 * 
 * @returns {JSX.Element} 카드 컨테이너 요소
 */
const Card = ({ children, className }: CardProps) => {
  return <S.Card className={className}>{children}</S.Card>;
};

export default Card;
