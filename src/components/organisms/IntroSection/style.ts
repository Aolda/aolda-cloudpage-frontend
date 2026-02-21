import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: 1.6rem;
  padding: 0 0 3rem;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Visual = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;
  display: flex;
  
  > div {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-height: 400px;
    padding: 0;
    overflow: hidden;
    display: flex;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      transform: scale(1.05);
    }
    
    > h3 {
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 24px;
      line-height: 1.4;
      letter-spacing: 0;
      color: #ffffff;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

