import IconTitle from '../../molecules/IconTitle';
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
 */
const ProblemsSection = ({ problems }: ProblemsSectionProps) => {
  return (
    <S.ProblemsSection>
      <IconTitle
        icon="/product/product_detail/title_icon1.png"
        title="문제점"
        alt="문제점"
        align="left"
        iconSize={24}
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
