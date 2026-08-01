import styled, { css } from 'styled-components';
import { media } from '@/styles/theme';

type CardTone = 'blue' | 'red';

export const ImageCard = styled.div<{
  $tone: CardTone;
  $isBackground?: boolean;
  $solidThumbnail?: boolean;
  $compact?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};
  padding: ${({ $isBackground }) => ($isBackground ? '48px' : '2rem')};
  gap: ${({ $isBackground }) => ($isBackground ? '10px' : '2rem')};
  width: ${({ $isBackground }) => ($isBackground ? '100%' : '400px')};
  max-width: ${({ $isBackground }) => ($isBackground ? '792px' : 'none')};
  min-height: ${({ $isBackground }) => ($isBackground ? '452px' : 'auto')};
  height: ${({ $isBackground }) => ($isBackground ? '452px' : '120px')};
  background: ${({ $isBackground, theme }) =>
    $isBackground
      ? 'transparent'
      : theme.mode === 'dark'
        ? theme.colors.surface
        : theme.colors.surface};
  border: ${({ $isBackground, theme, $solidThumbnail }) =>
    $isBackground
      ? 'none'
      : $solidThumbnail
        ? '1px solid transparent'
        : theme.mode === 'dark'
          ? `1px solid ${theme.colors.widgetBorder}`
          : `1px solid ${theme.colors.border}`};
  border-radius: ${({ $isBackground }) => ($isBackground ? '12px' : '8px')};
  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
  position: relative;

  ${({ $isBackground }) =>
    $isBackground &&
    css`
      box-shadow: none;
    `}

  /* Frame 22 — Partner card desktop */
  ${({ $solidThumbnail, $isBackground }) =>
    $solidThumbnail &&
    !$isBackground &&
    css`
      align-items: flex-start;
      padding: 0;
      gap: 24px;
      width: 400px;
      height: 120px;
      background: transparent;
      border: none;
      border-radius: 0;
      overflow: visible;
    `}

  ${media.tablet} {
    width: 100%;
    max-width: ${({ $isBackground }) => ($isBackground ? '680px' : '330px')};
    min-height: ${({ $isBackground }) => ($isBackground ? '320px' : 'auto')};
    height: ${({ $isBackground }) => ($isBackground ? '320px' : '104px')};
    padding: ${({ $isBackground }) => ($isBackground ? '32px' : '12px')};
    gap: ${({ $isBackground }) => ($isBackground ? '10px' : '12px')};
    border-radius: ${({ $isBackground }) => ($isBackground ? '12px' : '12px')};
    border: ${({ $isBackground, theme, $solidThumbnail }) =>
      $isBackground
        ? 'none'
        : $solidThumbnail
          ? '1px solid #efefef'
          : theme.mode === 'dark'
            ? `1px solid ${theme.colors.widgetBorder}`
            : '1px solid #efefef'};
    background: ${({ $isBackground, theme }) =>
      $isBackground
        ? 'transparent'
        : theme.mode === 'dark'
          ? theme.colors.surface
          : '#fefefe'};
    align-items: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};
    overflow: hidden;

    ${({ $solidThumbnail, $isBackground }) =>
      $solidThumbnail &&
      !$isBackground &&
      css`
        align-items: flex-start;
        background: #fefefe;
        border: 1px solid #efefef;
        border-radius: 12px;
        overflow: hidden;
      `}
  }

  ${media.mobile} {
    width: 100%;
    max-width: ${({ $isBackground }) => ($isBackground ? '100%' : '100%')};
    min-height: ${({ $isBackground }) => ($isBackground ? '161.41px' : 'auto')};
    height: ${({ $isBackground }) => ($isBackground ? '161.41px' : '64px')};
    padding: ${({ $isBackground }) => ($isBackground ? '16px' : '8px 12px')};
    gap: ${({ $isBackground }) => ($isBackground ? '10px' : '2rem')};
    flex-grow: ${({ $isBackground }) => ($isBackground ? '0' : '1')};
    align-items: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};
    border-radius: 8px;
    opacity: ${({ $isBackground }) => ($isBackground ? 0.8 : 1)};
    border: ${({ $isBackground, $solidThumbnail, theme }) =>
      $isBackground
        ? 'none'
        : $solidThumbnail || true
          ? '1px solid #efefef'
          : `1px solid ${theme.colors.border}`};
    background: ${({ $isBackground, theme }) =>
      $isBackground
        ? 'transparent'
        : theme.mode === 'dark'
          ? theme.colors.surface
          : '#fefefe'};
  }

  ${({ $compact }) =>
    $compact &&
    css`
      /* Frame 146 CrewProfile_Card — 167.5×83, text-only */
      ${media.mobile} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        max-width: none;
        height: 83px;
        min-height: 83px;
        padding: 12px;
        gap: 4px;
        border-radius: 8px;
        border: 1px solid #efefef;
        background: #fefefe;
        opacity: 1;
        flex-grow: 0;
        overflow: hidden;
      }
    `}
`;

export const Overlay = styled.div<{ $isBackground?: boolean }>`
  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
      z-index: 1;
      border-radius: 12px;

      ${media.mobile} {
        border-radius: 8px;
      }
    `}
`;

export const ImageContainer = styled.div<{ $compact?: boolean }>`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }

  ${({ $compact }) =>
    $compact &&
    css`
      ${media.mobile} {
        display: none;
      }
    `}
`;

/** Rectangle 7 — 120×120, radius 12, #232527 */
export const SolidThumbnail = styled.div`
  width: 120px;
  height: 120px;
  flex: none;
  border-radius: 12px;
  background: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#232527')};

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }
`;

export const Image = styled.img<{ $isBackground?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $isBackground }) => ($isBackground ? '12px' : '12px')};
  background: ${({ $isBackground, theme }) =>
    $isBackground ? 'transparent' : theme.mode === 'dark' ? '#FAFAFA' : theme.colors.surface};

  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      max-height: none;
    `}
`;

/** Frame 33 — text column */
export const TextContainer = styled.div<{ $compact?: boolean; $solidThumbnail?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  justify-content: flex-start;
  min-height: 80px;

  ${({ $solidThumbnail }) =>
    $solidThumbnail &&
    css`
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;
      padding: 0;
      gap: 16px;
      width: 256px;
      height: 120px;
      flex-grow: 1;
      min-height: 120px;
      box-sizing: border-box;
    `}

  ${media.tablet} {
    gap: 4px;
    min-height: 80px;
    height: 80px;
    width: auto;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    padding: 0;
  }

  ${({ $compact }) =>
    $compact &&
    css`
      ${media.mobile} {
        min-height: 0;
        height: auto;
        width: 100%;
        gap: 4px;
        justify-content: flex-start;
      }
    `}
`;

/** Frame 138 — title + description group */
export const TextGroup = styled.div<{ $compact?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4px;
  width: 100%;
  box-sizing: border-box;

  ${({ $compact }) =>
    $compact &&
    css`
      /* title / period / description 순서를 TextContainer flex order로 제어 */
      ${media.mobile} {
        display: contents;
      }
    `}
`;

/** Frame 137 — period row */
export const PeriodRow = styled.div<{ $compact?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  padding: 0;
  gap: 8px;
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  flex: none;
  margin-top: auto;

  ${media.tablet} {
    justify-content: flex-start;
    height: auto;
  }

  ${({ $compact }) =>
    $compact &&
    css`
      ${media.mobile} {
        order: 1;
        margin-top: 0;
        justify-content: flex-start;
        height: auto;
        width: 100%;
      }
    `}
`;
export const ImageTitle = styled.h3<{
  $isBackground?: boolean;
  $compact?: boolean;
  $solidThumbnail?: boolean;
}>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${({ $isBackground }) => ($isBackground ? '24px' : '24px')};
  font-weight: 700;
  line-height: 29px;
  text-align: left;
  color: ${({ $isBackground, theme }) =>
    $isBackground ? '#ffffff' : theme.mode === 'dark' ? theme.colors.text : theme.colors.text};
  white-space: pre-line;

  ${({ $solidThumbnail, $isBackground }) =>
    $solidThumbnail &&
    !$isBackground &&
    css`
      color: ${({ theme }) => (theme.mode === 'dark' ? '#FAFAFA' : '#232527')};
    `}

  ${({ $isBackground }) =>
    $isBackground &&
    css`
      position: relative;
      z-index: 2;
      line-height: 29px;
      padding: 48px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100%;

      > span {
        display: block;
      }
    `}

  ${media.tablet} {
    font-size: ${({ $isBackground }) => ($isBackground ? '24px' : '16px')};
    line-height: ${({ $isBackground }) => ($isBackground ? '29px' : '19px')};
    padding: 0;
    color: ${({ $isBackground, theme }) =>
      $isBackground ? '#ffffff' : theme.mode === 'dark' ? theme.colors.text : '#181818'};

    ${({ $isBackground }) =>
      $isBackground &&
      css`
        box-sizing: border-box;
        width: 210px;
        max-width: 210px;
        height: 70px;
        align-items: flex-start;
        justify-content: flex-start;
      `}
  }

  ${media.mobile} {
    font-size: ${({ $isBackground }) => ($isBackground ? '16px' : '10px')};
    line-height: ${({ $isBackground }) => ($isBackground ? '19px' : '12px')};
    padding: 0;
    height: auto;
    align-items: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};
    justify-content: ${({ $isBackground }) => ($isBackground ? 'flex-start' : 'center')};

    ${({ $isBackground }) =>
      $isBackground &&
      css`
        /* Frame 143 title — min 140×46; widen for nowrap second line */
        box-sizing: border-box;
        width: max-content;
        min-width: 140px;
        max-width: none;
        height: 46px;
        padding: 0;
        font-weight: 700;
        color: #ffffff;
        white-space: normal;
        overflow: visible;

        > span {
          white-space: nowrap;
        }
      `}
  }

  ${({ $compact }) =>
    $compact &&
    css`
      ${media.mobile} {
        order: 0;
        font-size: 12px;
        line-height: 14px;
        color: #232527;
        text-align: left;
        padding: 0;
      }
    `}
`;

export const ImageDescription = styled.p<{ $compact?: boolean; $solidThumbnail?: boolean }>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.gray600 : '#777777')};
  line-height: 150%;
  text-align: left;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
  }

  ${({ $compact }) =>
    $compact &&
    css`
      ${media.mobile} {
        order: 2;
        font-size: 10px;
        line-height: 150%;
        color: #777777;
      }
    `}
`;

export const ImagePeriod = styled.p<{ $compact?: boolean; $solidThumbnail?: boolean }>`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.gray600 : '#777777')};
  line-height: 150%;
  text-align: left;

  ${({ $solidThumbnail }) =>
    !$solidThumbnail &&
    css`
      margin-top: auto;
      text-align: left;
      font-weight: 400;
    `}

  ${media.tablet} {
    font-size: 12px;
    line-height: 150%;
    text-align: left;
    font-weight: 400;
  }

  ${({ $compact }) =>
    $compact &&
    css`
      ${media.mobile} {
        order: 1;
        margin-top: 0;
        font-size: 10px;
        line-height: 150%;
        color: #777777;
        text-align: left;
      }
    `}
`;
