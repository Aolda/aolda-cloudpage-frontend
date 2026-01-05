import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: 1.6rem;
  padding: 2rem 0 3rem;
  align-items: stretch;

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
    }

    > h3 {
      position: relative;
      z-index: 2;
      font-size: 4rem;
      font-weight: 600;
      line-height: 1.4;
      color: #ffffff;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      padding: 24px 28px;
      margin: 0;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

