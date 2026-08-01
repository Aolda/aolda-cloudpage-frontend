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

  ${media.tablet} {
    height: 72px;
    min-height: 72px;
  }

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

  ${media.tablet} {
    width: 64px;
    height: 72px;
    padding: 20px 16px;
  }

  ${media.mobile} {
    width: 40px;
    height: 54px;
    padding: 16px 8px;
  }
`;

export const QBadge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 0;
  aspect-ratio: 1 / 1;
  border-radius: 200px;
  background: transparent;
  overflow: hidden;

  ${media.tablet} {
    width: 32px;
    height: 32px;
  }

  ${media.mobile} {
    width: 24px;
    height: 24px;
  }
`;

export const QBadgeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

  ${media.tablet} {
    width: 32px;
    height: 32px;
    padding: 6px;
  }

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

  ${media.tablet} {
    padding: 20px 16px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  }

  ${media.mobile} {
    padding: 20px 8px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    color: #232527;
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

  ${media.tablet} {
    box-sizing: content-box;
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 20px 16px;
    color: #777777;
  }

  ${media.mobile} {
    box-sizing: border-box;
    width: 32px;
    height: 54px;
    margin: 0;
    padding: 19px 8px;
    color: #777777;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

  /* Frame 137 — tablet FAQ content panel */
  ${media.tablet} {
    padding: 0;
    background: #efefef;
    border-bottom: 1px solid #efefef;
  }

  ${media.mobile} {
    padding: 0;
    background: #efefef;
    border-bottom: 1px solid #efefef;
  }
`;

export const ContentText = styled.div`
  flex-grow: 1;
  padding: 20px 32px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
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

  /* Frame 123 / Content-C6 — tablet */
  ${media.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 20px 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #232527;
  }

  ${media.mobile} {
    display: block;
    padding: 16px 24px;
    font-size: 10px;
    line-height: 150%;
    color: #232527;
  }
`;
