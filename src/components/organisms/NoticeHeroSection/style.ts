import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 120px 60px;
  gap: 365px;
  position: absolute;
  width: 1440px;
  height: 400px;
  left: calc(50% - 1440px / 2);
  top: 0px;
  background: url('/notice/notice_introheader.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 0;
  }
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
  height: 187px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 349px;
  height: 127px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BreadcrumbWrapper = styled.div`
  width: 200px;
  height: 23px;
  flex: none;
  order: 0;
  flex-grow: 0;
  
  nav {
    color: #777777;
    
    a, span {
      color: #777777;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
    
    span > span {
      color: #777777;
      
      &::before {
        border-color: #777777;
      }
    }
  }
`;

export const Title = styled.h1`
  width: 358px;
  height: 92px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.8rem;
  color: #232527;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const HighlightedText = styled.span`
  color: #1A8EE5;
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
    font-size: 1.6rem;
    line-height: 1.9rem;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px;
  flex: none;
  order: 1;
  flex-grow: 0;
  height: 100%;
`;

export const IconWrapper = styled.div`
  width: 280.5px;
  height: 187px;
  position: relative;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;


