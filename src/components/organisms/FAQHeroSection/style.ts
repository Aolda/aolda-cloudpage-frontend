import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a3a5c 0%, #2d5a8a 100%);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='rgba(255,255,255,0.1)' fill='none' stroke-width='2'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

export const HeroContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const BreadcrumbWrapper = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 1rem;

  /* Breadcrumb 텍스트를 흰색으로 */
  a, span {
    color: rgba(255, 255, 255, 0.9) !important;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
`;

export const SearchWrapper = styled.div`
  max-width: 600px;
  margin-top: 2rem;
`;

export const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  min-height: 300px;
  padding: 2rem;
`;

export const FAQText = styled.div`
  font-size: 12rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.15);
  letter-spacing: -0.02em;
  line-height: 1;
  user-select: none;
`;

