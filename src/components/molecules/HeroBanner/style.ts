import styled, { css } from 'styled-components';

type TextPosition = 'left-top' | 'left-center' | 'left-bottom' | 'center' | 'right-top' | 'right-center' | 'right-bottom';

export const HeroContainer = styled.div`
  position: relative;
  width: 793px;
  height: 452px;
  overflow: hidden;
  border-radius: 1rem;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  object-fit: cover;
  display: block;
  min-width: 100%;
`;

export const Overlay = styled.div<{ $opacity: number }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, ${({ $opacity }) => $opacity * 0.6}) 0%, rgba(0, 0, 0, ${({ $opacity }) => $opacity * 0.3}) 100%);
  z-index: 1;
`;

export const ContentContainer = styled.div<{ $position: TextPosition }>`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  ${({ $position }) => {
    switch ($position) {
      case 'left-top':
        return css`
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;
        `;
      case 'left-center':
        return css`
          justify-content: center;
          align-items: flex-start;
          text-align: left;
        `;
      case 'left-bottom':
        return css`
          justify-content: flex-end;
          align-items: flex-start;
          text-align: left;
        `;
      case 'center':
        return css`
          justify-content: center;
          align-items: center;
          text-align: center;
        `;
      case 'right-top':
        return css`
          justify-content: flex-start;
          align-items: flex-end;
          text-align: right;
        `;
      case 'right-center':
        return css`
          justify-content: center;
          align-items: flex-end;
          text-align: right;
        `;
      case 'right-bottom':
        return css`
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
        `;
      default:
        return css`
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;
        `;
    }
  }}
`;

export const Title = styled.h2<{ $color: string }>`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  line-height: 1.4;
  white-space: pre-line;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`;

export const Description = styled.p<{ $color: string }>`
  margin: 1.2rem 0 0 0;
  font-size: 1.8rem;
  color: ${({ $color }) => $color};
  line-height: 1.6;
  white-space: pre-line;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  opacity: 0.95;
`;

