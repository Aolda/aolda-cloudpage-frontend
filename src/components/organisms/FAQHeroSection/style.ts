import styled, { css } from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  height: 25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 7.5rem 3.75rem;
  gap: 22.8125rem;
  isolation: isolate;
  background: ${({ theme }) => theme.colors.primary300};
  overflow: hidden;
  box-sizing: border-box;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  min-height: 0;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: 29.6875rem;
  max-width: 100%;
  flex-shrink: 0;
  z-index: 2;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const BreadcrumbWrapper = styled.div`
  min-height: 1.1875rem;

  nav {
    color: #fefefe;

    a,
    span {
      color: #fefefe;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #fefefe;
  margin: 0;
`;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  width: 29.6875rem;
  max-width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  flex: none;
  align-self: stretch;

  ${({ theme }) =>
    theme.mode === 'dark'
      ? css`
          background: #2a2a2a;
          border: 1px solid ${theme.colors.widgetBorder};
        `
      : css`
          background: #ffffff;
          border: 1px solid #e2e2e2;
        `}

  form {
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: min(39.3125rem, 50vw);
  max-width: 39.3125rem;
  height: 26.625rem;
  right: 7.5rem;
  bottom: 0;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 68.75rem) {
    right: 2.5rem;
    opacity: 0.85;
    width: 45vw;
    height: auto;
    max-height: 20rem;
  }
`;
