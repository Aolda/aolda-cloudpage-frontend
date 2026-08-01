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
          <span key={index}>
            {desc}
            {index < descriptions.length - 1 ? ' ' : ''}
          </span>
        ))}
      </S.ProblemBody>
    </S.ProblemItem>
  );
};

export default ProblemItem;
