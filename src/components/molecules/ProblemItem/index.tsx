import * as S from './style';

export interface ProblemItemProps {
  /** 문제점 제목 */
  title: string;
  /** 문제점 설명 목록 */
  descriptions: string[];
}

/**
 * 문제점 아이템 컴포넌트
 * 
 * 문제점 섹션에서 사용되는 개별 문제점 아이템입니다.
 * 
 * @param {ProblemItemProps} props - 문제점 아이템 props
 * @param {string} props.title - 문제점 제목
 * @param {string[]} props.descriptions - 문제점 설명 목록
 * 
 * @example
 * <ProblemItem
 *   title="학생 프로젝트의 특징들"
 *   descriptions={[
 *     "DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.",
 *     "자원 낭비 심각: 실제 사용 시간은 짧지만 서버가 24시간 가동되어 심각한 클라우드 자원 낭비 발생함."
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 문제점 아이템 요소
 */
const ProblemItem = ({ title, descriptions }: ProblemItemProps) => {
  return (
    <S.ProblemItem>
      <S.ProblemIcon viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
        <path d="M12 8v4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16h.01" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      </S.ProblemIcon>
      <S.ProblemContent>
        <S.ProblemTitle>{title}</S.ProblemTitle>
        <S.ProblemList>
          {descriptions.map((desc, index) => (
            <S.ProblemListItem key={index}>{desc}</S.ProblemListItem>
          ))}
        </S.ProblemList>
      </S.ProblemContent>
    </S.ProblemItem>
  );
};

export default ProblemItem;

