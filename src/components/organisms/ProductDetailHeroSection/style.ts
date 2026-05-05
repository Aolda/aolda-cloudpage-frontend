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
                url('/product/product_detail/product_detail_herosection.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(90deg) scaleX(2.4) scaleY(3.6);
    z-index: 0;
  }
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
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
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

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  height: 46px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ServiceIcon = styled.img`
  width: 32px;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ServiceName = styled.h1`
  width: 93px;
  height: 46px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ServiceDescription = styled.p`
  max-width: 1200px;
  width: 100%;
  height: 23px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 278px;
  height: 47px;
  flex: none;
  order: 3;
  flex-grow: 0;
  
  > * {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 36px;
    gap: 8px;
    height: 47px;
    background: #FFFFFF;
    border: 1px solid #BFBFBF;
    border-radius: 30px;
    flex: none;
    flex-grow: 0;
    
    &:nth-child(1) {
      width: 135px;
      order: 0;
    }
    
    &:nth-child(2) {
      width: 131px;
      order: 1;
    }
  }

  a span,
  button span {
    color: #000000 !important;
  }
`;

