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
  padding: 0;
  min-height: 72px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #efefef;
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
          &:hover {
            background-color: rgba(0, 0, 0, 0.02);
          }

          &:focus {
            outline: 2px solid ${theme.colors.primary500};
            outline-offset: -2px;
          }
        `}

  ${media.mobile} {
    height: 54px;
    min-height: 54px;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  flex: 1;
  min-width: 0;
  height: 100%;
`;

export const TitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 72px;
  padding: 20px 16px;
  box-sizing: border-box;
  flex-shrink: 0;
  background: transparent;
  border-radius: 0;

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
  width: 32px;
  height: 32px;
  border-radius: 200px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.widgetBorder : '#444444'};
  font-family: 'Gmarket Sans', 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #fefefe;
`;

export const IconImage = styled.img`
  width: 32px;
  height: 32px;
  padding: 6px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.widgetBorder : '#444444'};
  border-radius: 200px;
  box-sizing: border-box;
  object-fit: contain;
  display: block;

  ${media.mobile} {
    width: 24px;
    height: 24px;
    padding: 6px;
  }
`;

export const TitleText = styled.span`
  flex: 1;
  min-width: 0;
  padding: 20px 16px;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : '#232527')};
  display: flex;
  align-items: center;

  ${media.mobile} {
    padding: 20px 8px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 16px;
  color: #777777;
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};

  ${media.mobile} {
    margin: 0 8px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 16px 0;
  background: #efefef;
  border-bottom: 1px solid #efefef;

  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      background: ${theme.colors.widgetBorder};
      border-bottom: 1px solid ${theme.colors.widgetBorder};
    `}

  ${media.mobile} {
    padding: 0;
    background: #efefef;
    border-bottom: 1px solid #efefef;
  }
`;

export const ContentText = styled.div`
  padding: 20px 32px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fafafa' : '#232527')};
  white-space: pre-wrap;
  word-break: break-word;

  p {
    margin: 0 0 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 24px;
  }

  li {
    margin: 4px 0;
  }

  ${media.tablet} {
    padding: 20px 32px;
    font-size: 16px;
    line-height: 150%;
  }

  ${media.mobile} {
    padding: 16px 24px;
    font-size: 10px;
    line-height: 150%;
    color: #232527;
  }
`;
