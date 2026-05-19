import IconTitle from '../../molecules/IconTitle';
import SolutionCard from '../../molecules/SolutionCard';
import * as S from './style';

export interface Solution {
  /** 해결책 제목 */
  title: string;
  /** 해결책 설명 */
  description: string;
}

export interface SolutionsSectionProps {
  /** 해결책 목록 */
  solutions: Solution[];
}

/**
 * 해결책 섹션 컴포넌트
 * 
 * 제품 상세 페이지의 해결책 섹션입니다.
 *
 * @param {SolutionsSectionProps} props - 해결책 섹션 props
 * @param {Solution[]} props.solutions - 해결책 목록
 * 
 * @example
 * <SolutionsSection
 *   solutions={[
 *     { title: "접근성", description: "검수 과정 없이 즉시 사용 가능" },
 *     { title: "효율성", description: "사용하지 않을 때는 자동 정리로 자원 절약" }
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 해결책 섹션 요소
 */
const SolutionsSection = ({ solutions }: SolutionsSectionProps) => {
  return (
    <S.SolutionsSection>
      <IconTitle
        icon="/product/product_detail/title_icon2.png"
        title="해결책"
        alt="해결책"
        align="left"
        iconSize={24}
      />
      <S.SolutionsGrid>
        {Array.from({ length: Math.ceil(solutions.length / 3) }).map((_, rowIndex) => (
          <S.SolutionsRow key={rowIndex}>
            {solutions.slice(rowIndex * 3, rowIndex * 3 + 3).map((solution, cardIndex) => (
              <SolutionCard
                key={rowIndex * 3 + cardIndex}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </S.SolutionsRow>
        ))}
      </S.SolutionsGrid>
    </S.SolutionsSection>
  );
};

export default SolutionsSection;

