import * as S from './style';

export interface ProblemItemProps {
  title: string;
  descriptions: string[];
}

const ProblemItem = ({ title, descriptions }: ProblemItemProps) => {
  return (
    <S.ProblemItem>
      <S.ProblemGroupTitle>{title}</S.ProblemGroupTitle>
      <S.ProblemBody>
        {descriptions.map((desc, index) => (
          <S.ProblemListItem key={index}>
            {desc.split('\n').map((line, lineIndex) => (
              <S.ProblemLine key={lineIndex}>{line}</S.ProblemLine>
            ))}
          </S.ProblemListItem>
        ))}
      </S.ProblemBody>
    </S.ProblemItem>
  );
};

export default ProblemItem;
