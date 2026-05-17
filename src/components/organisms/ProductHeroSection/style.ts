import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 120px 80px;
  gap: 10px;
  position: relative;
  width: 100%;
  height: 400px;
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
  padding: 0px;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  height: 151px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  z-index: 1;
`;

export const BreadcrumbWrapper = styled.div`
  width: auto;
  min-width: 110px;
  height: 23px;
  
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
  max-width: 1200px;
  width: 100%;
  height: 46px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.8rem;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const Description = styled.p`
  max-width: 1200px;
  width: 100%;
  height: 58px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

