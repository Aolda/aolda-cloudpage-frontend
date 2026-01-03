import * as S from './style';

export interface SolutionCardProps {
  /** 해결책 제목 */
  title: string;
  /** 해결책 설명 */
  description: string;
}

/**
 * 해결책 카드 컴포넌트
 * 
 * 해결책 섹션에서 사용되는 개별 해결책 카드입니다.
 * 
 * @param {SolutionCardProps} props - 해결책 카드 props
 * @param {string} props.title - 해결책 제목
 * @param {string} props.description - 해결책 설명
 * 
 * @example
 * <SolutionCard
 *   title="접근성"
 *   description="검수 과정 없이 즉시 사용 가능"
 * />
 * 
 * @returns {JSX.Element} 해결책 카드 요소
 */
const SolutionCard = ({ title, description }: SolutionCardProps) => {
  return (
    <S.SolutionCard>
      <S.SolutionIcon viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z"
          stroke="#3D90D4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21H15"
          stroke="#3D90D4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 9H14"
          stroke="#3D90D4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </S.SolutionIcon>
      <S.SolutionTitle>{title}</S.SolutionTitle>
      <S.SolutionDescription>{description}</S.SolutionDescription>
    </S.SolutionCard>
  );
};

export default SolutionCard;

