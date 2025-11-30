import { useState } from 'react';
import * as S from './style';

export interface FAQItemProps {
  /** FAQ 질문 */
  question: string;
  /** FAQ 답변 */
  answer: string;
  /** 초기 확장 상태 */
  defaultExpanded?: boolean;
}

/**
 * FAQ 아이템 컴포넌트
 * 
 * 아코디언 형태로 질문과 답변을 표시하는 FAQ 아이템입니다.
 * 
 * @param {FAQItemProps} props - FAQ 아이템 props
 * @param {string} props.question - FAQ 질문
 * @param {string} props.answer - FAQ 답변
 * @param {boolean} [props.defaultExpanded] - 초기 확장 상태
 * 
 * @example
 * <FAQItem
 *   question="FAQ Question"
 *   answer="This is the answer to the FAQ question."
 *   defaultExpanded={false}
 * />
 * 
 * @returns {JSX.Element} FAQ 아이템 요소
 */
const FAQItem = ({
  question,
  answer,
  defaultExpanded = false,
}: FAQItemProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.FAQItem>
      <S.QuestionButton onClick={handleToggle} aria-expanded={isExpanded}>
        <S.QuestionContent>
          <S.QuestionIcon>
            <S.QuestionLetter>Q</S.QuestionLetter>
          </S.QuestionIcon>
          <S.QuestionText>{question}</S.QuestionText>
        </S.QuestionContent>
        <S.ChevronIcon $expanded={isExpanded} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.ChevronIcon>
      </S.QuestionButton>
      {isExpanded && (
        <S.Answer>
          <S.AnswerText dangerouslySetInnerHTML={{ __html: answer }} />
        </S.Answer>
      )}
    </S.FAQItem>
  );
};

export default FAQItem;

