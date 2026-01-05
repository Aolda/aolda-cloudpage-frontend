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
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

