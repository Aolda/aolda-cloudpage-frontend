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
  min-height: 72px;
  padding: 20px 16px;
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
            outline: 2px solid ${theme.colors.primary500};
            outline-offset: -2px;
          }
        `
      : css`
          border-bottom: 1px solid #e0e0e0;

          &:hover {
            background-color: #f5f5f5;
          }

          &:focus {
            outline: 2px solid ${({ theme }) => theme.colors.primary};
            outline-offset: -2px;
          }
        `}
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
`;

export const TitleIcon = styled.div`
  width: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 200px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.widgetBorder : '#444444'};
  font-family: 'Gmarket Sans', 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: #fefefe;
`;

export const IconImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  display: block;
`;

export const TitleText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};
  flex: 1;
  min-width: 0;
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.textMuted)};
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const contentPadding = css`
  padding: 20px 16px 20px calc(16px + 64px + 10px);
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
  font-size: 1.5rem;
  line-height: 1.8;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};

  p {
    margin: 1rem 0;
    line-height: 1.8;
    font-size: inherit;
    color: inherit;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 2rem;
    line-height: 1.8;
  }

  li {
    margin: 0.5rem 0;
    line-height: 1.8;
  }
`;
