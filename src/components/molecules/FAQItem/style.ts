import styled from 'styled-components';

export const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1.2rem;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
  }
`;

export const QuestionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex: 1;
`;

export const QuestionIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const QuestionLetter = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
`;

export const QuestionText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;
`;

export const Answer = styled.div`
  padding: 0 2rem 2rem 2rem;
  padding-left: calc(2rem + 4rem + 1.6rem); /* padding + icon width + gap */
`;

export const AnswerText = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-wrap;
  word-break: break-word;

  p {
    margin: 1rem 0;
    line-height: 1.8;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin: 0.5rem 0;
  }
`;

