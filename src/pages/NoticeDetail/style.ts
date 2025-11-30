import styled from 'styled-components';

export const ContentSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  box-sizing: border-box;
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 6rem 2rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 6rem 2rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

