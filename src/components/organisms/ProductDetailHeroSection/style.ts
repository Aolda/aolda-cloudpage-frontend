import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  border-radius: 1.6rem;
  overflow: hidden;
  margin-bottom: 4rem;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  overflow: hidden;
`;

export const BackgroundPattern = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.03) 4px
      );
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const ServiceLogo = styled.img`
  max-width: 200px;
  height: auto;
  filter: brightness(0) invert(1);
`;

export const ServiceName = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.1em;
`;

export const ServiceDescription = styled.p`
  margin: 0;
  font-size: 1.8rem;
  color: #ffffff;
  line-height: 1.6;
  opacity: 0.95;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

