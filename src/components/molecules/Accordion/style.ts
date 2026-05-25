import styled, { css } from 'styled-components';

export const Accordion = styled.div`
  background: transparent;
  margin-bottom: 0;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.5rem;
  padding: 1.25rem 1rem;
  box-sizing: border-box;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;

  ${({ theme }) =>
    theme.mode === 'dark'
      ? css`
          border-bottom: 1px solid ${theme.colors.widgetBorder};

          &:hover {
            background-color: rgba(255, 255, 255, 0.04);
          }

          &:focus {
            outline: 0.125rem solid ${theme.colors.primary500};
            outline-offset: -0.125rem;
          }
        `
      : css`
          border-bottom: 1px solid #e0e0e0;

          &:hover {
            background-color: #f5f5f5;
          }

          &:focus {
            outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
            outline-offset: -0.125rem;
          }
        `}
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
  min-width: 0;
`;

export const TitleIcon = styled.div`
  width: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 12.5rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.widgetBorder : '#444444'};
  font-family: 'Gmarket Sans', 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.125rem;
  color: #fefefe;
`;

export const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  display: block;
`;

export const TitleText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};
  flex: 1;
  min-width: 0;
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.textMuted)};
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const contentPadding = css`
  padding: 1.25rem 1rem 1.25rem calc(1rem + 4rem + 0.625rem);
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  ${contentPadding}

  ${({ theme }) =>
    theme.mode === 'dark'
      ? css`
          background: #444444;
          border-bottom: 1px solid #444444;
        `
      : css`
          background: #f5f5f5;
          border-bottom: 1px solid #e0e0e0;
        `}
`;

export const ContentText = styled.div`
  box-sizing: border-box;
  white-space: pre-wrap;
  word-break: break-word;
  flex: 1;
  min-width: 0;
  font-size: 0.9375rem;
  line-height: 1.8;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};

  p {
    margin: 0.625rem 0;
    line-height: 1.8;
    font-size: inherit;
    color: inherit;
  }

  ul,
  ol {
    margin: 0.625rem 0;
    padding-left: 1.25rem;
    line-height: 1.8;
  }

  li {
    margin: 0.3125rem 0;
    line-height: 1.8;
  }
`;
