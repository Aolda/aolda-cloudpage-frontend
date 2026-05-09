import styled, { css } from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 120px 60px;
  gap: 365px;
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
  max-width: 1200px;
  margin: 0 auto;
  min-height: 0;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 475px;
  max-width: 100%;
  flex-shrink: 0;
  z-index: 2;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const BreadcrumbWrapper = styled.div`
  min-height: 19px;

  nav {
    color: #fefefe;

    a,
    span {
      color: #fefefe;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #fefefe;
  margin: 0;
`;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  width: 475px;
  max-width: 100%;
  height: 48px;
  border-radius: 8px;
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
  width: min(629px, 50vw);
  max-width: 629px;
  height: 426px;
  right: 120px;
  bottom: 0;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1100px) {
    right: 40px;
    opacity: 0.85;
    width: 45vw;
    height: auto;
    max-height: 320px;
  }
`;
