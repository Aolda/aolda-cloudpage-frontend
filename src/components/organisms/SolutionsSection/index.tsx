import SectionTitle from '../../molecules/SectionTitle';
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
      <SectionTitle
        title={
          <>
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
            해결책
          </>
        }
        align="left"
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

