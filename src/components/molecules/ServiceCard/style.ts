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
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #E2E2E2;
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

/* Frame 1261158722 - 아이콘 + 제목 블록 */
export const IconTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4px;
  width: 58px;
  max-width: 58px;
  height: 60px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 8px;
`;

/* tabler:database-heart - 32x32 */
export const Icon = styled.img`
  width: 32px;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
  object-fit: contain;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AMDBIconContainer = styled.div`
  width: 32px;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Text - Title-H3 */
export const Title = styled.h3`
  width: 58px;
  height: 24px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #232527;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #5b6275;
  font: noto sans kr;
  font-style: regular;
  line-height: 1.4;
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

