import { useState } from 'react';
import * as S from './style';

export interface AccordionProps {
  /** 아코디언 제목 */
  title: string;
  /** 아코디언 내용 */
  content: string;
  /** 초기 확장 상태 */
  defaultExpanded?: boolean;
  /** 아이콘 이미지 경로 (`qBadge`가 아닐 때) */
  icon?: string;
  /** FAQ용 Q 원형 배지 */
  qBadge?: boolean;
}

/**
 * 아코디언 컴포넌트
 *
 * 제목을 클릭하면 내용이 펼쳐지거나 접히는 아코디언 형태의 컴포넌트입니다.
 *
 * @returns {JSX.Element} 아코디언 요소
 */
const Accordion = ({
  title,
  content,
  defaultExpanded = false,
  icon,
  qBadge = false,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.Accordion>
      <S.TitleButton type="button" onClick={handleToggle} aria-expanded={isExpanded}>
        <S.TitleContent>
          <S.TitleIcon>
            {qBadge ? (
              <S.QBadge aria-hidden>Q</S.QBadge>
            ) : icon ? (
              <S.IconImage src={icon} alt="" />
            ) : null}
          </S.TitleIcon>
          <S.TitleText>{title}</S.TitleText>
        </S.TitleContent>
        <S.ChevronIcon $expanded={isExpanded} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.ChevronIcon>
      </S.TitleButton>
      {isExpanded && (
        <S.Content>
          <S.ContentText dangerouslySetInnerHTML={{ __html: content }} />
        </S.Content>
      )}
    </S.Accordion>
  );
};

export default Accordion;
