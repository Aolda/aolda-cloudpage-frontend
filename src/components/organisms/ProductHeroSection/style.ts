import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 7.5rem 5rem;
  gap: 0.625rem;
  position: relative;
  width: 100%;
  height: 25rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
                url('/product/product_herosection.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(90deg) scaleX(2) scaleY(3.6);
    z-index: 0;

  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.75rem;
  max-width: 75rem;
  width: 100%;
  height: 9.4375rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  z-index: 1;
`;

export const BreadcrumbWrapper = styled.div`
  width: auto;
  min-width: 6.875rem;
  height: 1.4375rem;
  
  nav {
    color: #FFFFFF;
    
    a, span {
      color: #FFFFFF;
    }
    
    span > span {
      color: #FFFFFF;
      
      &::before {
        border-color: #FFFFFF;
      }
    }
  }
`;

export const Title = styled.h1`
  max-width: 75rem;
  width: 100%;
  height: 2.875rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const Description = styled.p`
  max-width: 75rem;
  width: 100%;
  height: 3.625rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

