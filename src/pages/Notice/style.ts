import styled from 'styled-components';

export const ContentSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  box-sizing: border-box;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

