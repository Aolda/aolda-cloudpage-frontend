import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: 1.6rem;
  padding: 2rem 0 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Visual = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 240px;
  
  > div {
    border-radius: 10px;
    height: auto;
    min-height: 240px;
    
    img {
      height: 76%;
      border-radius: 10px;
    }
    
    > div {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 20px 24px;
      
      h2 {
        font-size: 4rem;
        font-weight: 600;
        line-height: 1.4;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
      }
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


