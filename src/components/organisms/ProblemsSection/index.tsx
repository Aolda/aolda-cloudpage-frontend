import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import ProblemItem from '../../molecules/ProblemItem';
import * as S from './style';

export interface Problem {
  /** 문제점 제목 */
  title: string;
  /** 문제점 설명 목록 */
  descriptions: string[];
}

export interface ProblemsSectionProps {
  /** 문제점 목록 */
  problems: Problem[];
}

/**
 * 문제점 섹션 컴포넌트
 * 
 * 제품 상세 페이지의 문제점 섹션입니다.
 *
 * @param {ProblemsSectionProps} props - 문제점 섹션 props
 * @param {Problem[]} props.problems - 문제점 목록
 * 
 * @example
 * <ProblemsSection
 *   problems={[
 *     {
 *       title: "학생 프로젝트의 특징들",
 *       descriptions: [
 *         "DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.",
 *         "자원 낭비 심각: 실제 사용 시간은 짧지만 서버가 24시간 가동되어 심각한 클라우드 자원 낭비 발생함."
 *       ]
 *     }
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 문제점 섹션 요소
 */
const ProblemsSection = ({ problems }: ProblemsSectionProps) => {
  return (
    <S.ProblemsSection>
      <IntroSectionTitle
        title={
          <>
            <S.ProblemIcon viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
              <path d="M12 8v4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 16h.01" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            </S.ProblemIcon>
            문제점
          </>
        }
        align="left"
      />
      <S.ProblemsList>
        {problems.map((problem, index) => (
          <ProblemItem
            key={index}
            title={problem.title}
            descriptions={problem.descriptions}
          />
        ))}
      </S.ProblemsList>
    </S.ProblemsSection>
  );
};

export default ProblemsSection;

