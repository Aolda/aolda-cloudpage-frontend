import styled from 'styled-components';

export const Section = styled.section`
  max-width: 75rem;
  width: 100%;
  min-height: 29.625rem;
  padding-top: 10rem;
  padding-bottom: 4.5rem;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Divider = styled.span`
  width: 1.5rem;
  height: 0.125rem;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.text : theme.colors.border};
  border-radius: 0.125rem;
`;

/* Frame 149 */
export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1.5rem;
  width: 26.5rem;
  height: 6.625rem;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

/* Frame 147 / Frame 148 */
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 0.75rem;
  width: 12.5rem;
  height: 6.625rem;
  flex: none;
  flex-grow: 0;

  &:first-of-type {
    order: 0;
  }
  &:last-of-type {
    order: 1;
  }

  /* Button - Frame 149 첫 번째: Primary/600 */
  &:first-of-type a,
  &:first-of-type button {
    width: 12.5rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    background: #1572b8;
    border: none;
    border-radius: 0.5rem;
    color: #ffffff;
  }

  /* Button - Frame 148: White + border (팀 아올다 합류) */
  &:last-of-type a,
  &:last-of-type button {
    width: 12.5rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    background: #ffffff;
    border: 1px solid #bfbfbf;
    border-radius: 0.5rem;
    color: #000000;

    span {
      color: #000000;
    }
  }

  /* Button 내부 아이콘 24x24 */
  a img,
  button img {
    width: 1.5rem;
    height: 1.5rem;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

/* Content-C4 */
export const Caption = styled.p`
  width: 120%;
  max-width: 10.125rem;
  height: 3rem;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

