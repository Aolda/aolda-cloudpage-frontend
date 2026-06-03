import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0rem 7.5rem 3.75rem;
  gap: 22.8125rem;
  position: absolute;
  width: 90rem;
  height: 25rem;
  left: calc(50% - 90rem / 2);
  top: 0rem;
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
  padding: 0rem;
  gap: 13.4375rem;
  width: 75rem;
  height: 11.6875rem;
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
  padding: 0rem;
  gap: 0.75rem;
  width: 29.6875rem;
  height: 11.6875rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.75rem;
  width: 21.8125rem;
  height: 7.9375rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BreadcrumbWrapper = styled.div`
  width: 12.5rem;
  height: 1.4375rem;
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
      font-size: 1rem;
      line-height: 1.1875rem;
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
  width: 22.375rem;
  height: 5.75rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
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
  padding: 0.75rem 1rem;
  gap: 5.625rem;
  width: 29.6875rem;
  height: 3rem;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 0.5rem;
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
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #777777;
    width: 10.875rem;
    height: 1.4375rem;
    
    &:focus {
      outline: none;
      border: none;
      border-bottom: none;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
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
  padding: 0rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  height: 100%;
`;

export const IconWrapper = styled.div`
  width: 17.53125rem;
  height: 11.6875rem;
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


