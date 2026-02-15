import type { ReactNode } from 'react';
import Icon, { type IconVariant } from '../../atoms/Icon';
import * as S from './style';

export type CardTone = 'blue' | 'red';

// 하위 호환성을 위한 타입 별칭
export type ValueIconVariant = IconVariant;

export interface ItemCardProps {
  /** 카드 제목 */
  title: string;
  /** 카드 설명 */
  description: string;
  /** 아이콘 (IconVariant, 이미지 경로, 또는 React 요소) */
  icon?: string | ReactNode | IconVariant;
  /** 카드 톤 (blue 또는 red) */
  tone?: CardTone;
}

/**
 * 아이템 카드 컴포넌트
 * 
 * 아이콘, 제목, 설명을 표시하는 카드입니다.
 * IconVariant 타입의 아이콘은 자동으로 파란색/빨간색이 결정됩니다.
 * 
 * @param {ItemCardProps} props - 카드 props
 * @param {string} props.title - 카드 제목
 * @param {string} props.description - 카드 설명
 * @param {string | ReactNode | IconVariant} [props.icon] - 아이콘
 * 
 * @example
 * <ItemCard
 *   title="유료과금 없음"
 *   description="서비스 내 결제가 필요한 부가서비스가 없어요"
 *   icon="free"
 * />
 * 
 * @returns {JSX.Element} 아이템 카드 요소
 */
const ItemCard = ({ title, description, icon, tone: propTone }: ItemCardProps) => {
  // IconVariant에 따른 tone 결정 함수
  const getToneFromIcon = (iconValue: string): CardTone => {
    const positiveIcons: IconVariant[] = ['free', 'instances', 'members'];
    if (positiveIcons.includes(iconValue as IconVariant)) {
      return 'blue';
    }
    return 'red';
  };

  // icon이 이미지 경로인지 확인
  const isImagePath = (val: unknown): boolean => {
    if (typeof val !== 'string') return false;
    return val.startsWith('/') || val.startsWith('./') || val.startsWith('http://') || val.startsWith('https://');
  };

  // icon이 IconVariant 타입인지 확인
  const iconVariants: IconVariant[] = ['free', 'instances', 'members', 'ban', 'account', 'wrench'];
  const isIconVariant = (val: unknown): val is IconVariant => {
    return typeof val === 'string' && iconVariants.includes(val as IconVariant);
  };

  const tone = propTone || (typeof icon === 'string' && isIconVariant(icon) ? getToneFromIcon(icon) : 'blue');

  return (
    <S.ItemCard $tone={tone}>
      {icon && (
        <S.Icon>
          {isIconVariant(icon) ? (
            <Icon variant={icon} tone={tone} />
          ) : isImagePath(icon) ? (
            <S.IconImage src={icon as string} alt={title} />
          ) : (
            icon
          )}
        </S.Icon>
      )}
      <S.ItemTitle $tone={tone}>{title}</S.ItemTitle>
      <S.ItemDescription>{description}</S.ItemDescription>
    </S.ItemCard>
  );
};

export default ItemCard;

