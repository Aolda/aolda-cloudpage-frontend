import { useState } from 'react';
import { sanitizeHtml } from '@/lib/sanitizeHtml';
import * as S from './style';

export interface AccordionProps {
  /** 아코디언 제목 */
  title: string;
  /** 아코디언 내용 */
  content: string;
  /** 초기 확장 상태 */
  defaultExpanded?: boolean;
  /** 아이콘 이미지 경로 */
  icon?: string;
}

/**
 * 아코디언 컴포넌트
 * 
 * 제목을 클릭하면 내용이 펼쳐지거나 접히는 아코디언 형태의 컴포넌트입니다.
 * 
 * @param {AccordionProps} props - 아코디언 props
 * @param {string} props.title - 아코디언 제목
 * @param {string} props.content - 아코디언 내용
 * @param {boolean} [props.defaultExpanded] - 초기 확장 상태
 * @param {string} [props.icon] - 아이콘 이미지 경로
 * 
 * @example
 * <Accordion
 *   title="FAQ Question"
 *   content="This is the answer to the FAQ question."
 *   defaultExpanded={false}
 *   icon="/FAQ/FAQ_accordion_icon.png"
 * />
 * 
 * @returns {JSX.Element} 아코디언 요소
 */
const Accordion = ({
  title,
  content,
  defaultExpanded = false,
  icon,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.Accordion>
      <S.TitleButton onClick={handleToggle} aria-expanded={isExpanded}>
        <S.TitleContent>
          <S.TitleIcon>
            <S.IconImage src={icon} alt={title} />
          </S.TitleIcon>
          <S.TitleText>{title}</S.TitleText>
        </S.TitleContent>
        <S.ChevronIcon $expanded={isExpanded} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.ChevronIcon>
      </S.TitleButton>
      {isExpanded && (
        <S.Content>
          <S.ContentText
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
          />
        </S.Content>
      )}
    </S.Accordion>
  );
};

export default Accordion;

