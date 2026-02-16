import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: auto;
  min-width: 110px;
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

  /* Separator 스타일 - chevron 아이콘 */
  nav > span > span {
    width: 16px;
    height: 16px;
    margin: 0;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: transparent !important;
    font-size: 0;
    
    &::before {
      content: '';
      position: absolute;
      left: 35.94%;
      right: 35.94%;
      top: 21.88%;
      bottom: 21.88%;
      border: 2px solid #FFFFFF;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
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
  font-size: 32px;
  line-height: 38px;
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
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

