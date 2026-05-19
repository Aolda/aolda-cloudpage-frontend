import * as S from './style';

export interface ProblemItemProps {
  /** 문제점 그룹 제목 (예: 1. 학생 프로젝트의 특징들) */
  title: string;
  /** 문제점 설명 목록 — "소제목: 설명" 형식 */
  descriptions: string[];
}

const splitDescription = (desc: string) => {
  const colonIndex = desc.indexOf(':');
  if (colonIndex === -1) {
    return { subTitle: '', body: desc };
  }
  return {
    subTitle: desc.slice(0, colonIndex).trim(),
    body: desc.slice(colonIndex + 1).trim(),
  };
};

const ProblemItem = ({ title, descriptions }: ProblemItemProps) => {
  return (
    <S.ProblemItem>
      <S.ProblemContent>
        <S.ProblemGroupTitle>{title}</S.ProblemGroupTitle>
        <S.MobileProblemBody>{descriptions.join(' ')}</S.MobileProblemBody>
        <S.ProblemList>
          {descriptions.map((desc, index) => {
            const { subTitle, body } = splitDescription(desc);
            return (
              <S.ProblemListItem key={index}>
                {subTitle ? (
                  <>
                    <S.Label>{subTitle}:</S.Label> {body}
                  </>
                ) : (
                  desc
                )}
              </S.ProblemListItem>
            );
          })}
        </S.ProblemList>
      </S.ProblemContent>
    </S.ProblemItem>
  );
};

export default ProblemItem;
