import styled from 'styled-components';

export const Section = styled.section`
  width: 1200px;
  height: 796px;
  padding-top: 160px;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Divider = styled.span`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 2px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(0, 1fr));
  gap: 3.2rem;
  width: 100%;
  max-width: 680px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Caption = styled.p`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;

