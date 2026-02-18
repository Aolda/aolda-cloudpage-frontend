import styled from 'styled-components';

export const ServiceLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const ServiceCardWrapper = styled.div`
  display: block;
`;

export const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 1px solid #e1e6f5;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  height: 240px;
  min-width: 231px;
  width: 231px;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const AMDBIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  position: relative;
`;

export const DatabaseIcon = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: -0.2rem;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  color: #5b6275;
  line-height: 1.6;
  margin: 0;
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

