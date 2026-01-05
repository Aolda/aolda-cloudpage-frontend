import ImageTitle from '../../molecules/ImageTitle';
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
      <ImageTitle
        icon="/product/product_detail/title_icon2.png"
        title="해결책"
        alt="해결책 아이콘"
      />
      <S.SolutionsGrid>
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </S.SolutionsGrid>
    </S.SolutionsSection>
  );
};

export default SolutionsSection;

