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
  padding: 0rem;
  gap: 0.75rem;
  max-width: 75rem;
  width: 100%;
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

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 0.75rem;
  max-width: 75rem;
  width: 100%;
  height: 2.875rem;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ServiceIcon = styled.img`
  width: 2rem;
  height: 2rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ServiceName = styled.h1`
  width: 5.8125rem;
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
  flex-grow: 0;
`;

export const ServiceDescription = styled.p`
  max-width: 75rem;
  width: 100%;
  height: 1.4375rem;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
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
  padding: 0rem;
  gap: 0.75rem;
  width: 17.375rem;
  height: 2.9375rem;
  flex: none;
  order: 3;
  flex-grow: 0;
  
  > * {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 2.25rem;
    gap: 0.5rem;
    height: 2.9375rem;
    background: #FFFFFF;
    border: 1px solid #BFBFBF;
    border-radius: 1.875rem;
    flex: none;
    flex-grow: 0;
    
    &:nth-child(1) {
      width: 8.4375rem;
      order: 0;
    }
    
    &:nth-child(2) {
      width: 8.1875rem;
      order: 1;
    }
  }

  a span,
  button span {
    color: #000000 !important;
  }
`;

