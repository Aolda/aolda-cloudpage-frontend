import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 120px 60px;
  gap: 10px;
  position: relative;
  width: 1440px;
  height: 400px;
  margin-bottom: 4rem;
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
    background-size: contrain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(90deg) scaleX(2.0) scaleY(4.2);
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
  width: 1200px;
  height: 175px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  z-index: 2;
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: auto;
  height: 23px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 0;

  nav {
    gap: 8px;
    margin-bottom: 0;
    font-size: 16px;
  }

  span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

  a {
    color: #FFFFFF;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: auto;
    height: 23px;
  }

  /* Separator 스타일 */
  span[style*="margin"] {
    width: 16px;
    height: 16px;
    margin: 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: 35.94%;
      right: 35.94%;
      top: 21.88%;
      bottom: 21.88%;
      border: 2px solid #FFFFFF;
      transform: rotate(45deg);
      border-top: none;
      border-left: none;
    }
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 1200px;
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
  width: 1200px;
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
`;

