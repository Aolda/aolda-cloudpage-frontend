import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

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
  padding: 1.6rem 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;
  box-sizing: border-box;

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
          border-bottom: 1px solid ${theme.colors.border};

          &:hover {
            background-color: ${theme.colors.surfaceMuted};
          }

          &:focus {
            outline: 2px solid ${theme.colors.primary};
            outline-offset: -2px;
          }
        `}

  ${media.tablet} {
    height: 72px;
    padding: 0;

    &:hover {
      background-color: transparent;
    }
  }

  ${media.mobile} {
    height: 54px;
    min-height: 54px;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex: 1;
  min-width: 0;

  ${media.tablet} {
    gap: 0;
    height: 100%;
    align-items: stretch;
  }
`;

export const TitleIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${media.tablet} {
    width: 64px;
    height: 72px;
    padding: 20px 16px;
    box-sizing: border-box;
    border-radius: 0;
    background: transparent;
  }

  ${media.mobile} {
    width: 40px;
    height: 54px;
    padding: 16px 8px;
  }
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
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;

  ${media.tablet} {
    width: 32px;
    height: 32px;
    padding: 6px;
    background: ${({ theme }) =>
      theme.mode === 'dark' ? theme.colors.widgetBorder : '#444444'};
    border-radius: 200px;
    box-sizing: border-box;
    object-fit: contain;
  }

  ${media.mobile} {
    width: 24px;
    height: 24px;
    padding: 6px;
  }
`;

export const TitleText = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};

  ${media.tablet} {
    flex: 1;
    min-width: 0;
    padding: 20px 16px;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};
    display: flex;
    align-items: center;
  }

  ${media.mobile} {
    padding: 20px 8px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.textMuted)};
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;

  ${media.tablet} {
    flex-shrink: 0;
    width: 56px;
    min-width: 56px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray600};
    padding: 0;
    box-sizing: border-box;
  }

  ${media.mobile} {
    width: 32px;
    min-width: 32px;
    height: 54px;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  padding-left: calc(2rem + 4rem + 1.6rem);
  box-sizing: border-box;
  width: 100%;

  ${({ theme }) =>
    theme.mode === 'dark'
      ? css`
          background: ${theme.colors.widgetBorder};
          border-bottom: 1px solid ${theme.colors.widgetBorder};
        `
      : css`
          background: ${theme.colors.surfaceMuted};
          border-bottom: 1px solid ${theme.colors.border};
        `}

  ${media.tablet} {
    padding: 16px 16px 16px 64px;
  }

  ${media.mobile} {
    padding: 16px 24px;
    background: #efefef;
    border-bottom: 1px solid #efefef;
  }
`;

export const ContentText = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.text)};
  white-space: pre-wrap;
  word-break: break-word;

  p {
    margin: 1rem 0;
    line-height: 1.8;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 150%;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : theme.colors.gray600)};
  }

  ${media.mobile} {
    font-size: 10px;
    line-height: 150%;
    color: #232527;
  }
`;
