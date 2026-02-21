import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 120px 60px;
  gap: 365px;
  isolation: isolate;
  position: absolute;
  width: 1440px;
  height: 400px;
  left: calc(50% - 1440px / 2);
  top: 0px;
  background: #76BBEF;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  gap: 215px;
  width: 1200px;
  height: 187px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  z-index: 1;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 475px;
  height: 141px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 158px;
  height: 81px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BreadcrumbWrapper = styled.div`
  width: 77px;
  height: 23px;
  flex: none;
  order: 0;
  flex-grow: 0;
  
  nav {
    color: #FFFFFF;
    
    a, span {
      color: #FFFFFF;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    
    span > span {
      color: #FFFFFF;
      
      &::before {
        border-color: #FFFFFF;
        border-width: 2px;
      }
    }
  }
`;

export const Title = styled.h1`
  width: 200px;
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

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 90px;
  width: 475px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  
  form {
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
  
  input {
    padding: 0;
    border: none;
    border-radius: 0;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #777777;
    width: 174px;
    height: 23px;
    
    &:focus {
      outline: none;
      border: none;
      border-bottom: none;
    }
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: #76BBEF;
    position: relative;
    right: 0;
  }
`;

export const RightSection = styled.div`
  position: relative;
  width: 30%;
  height: 10%;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 629px;
  height: 426px;
  right: -20px;
  bottom: -80px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;

