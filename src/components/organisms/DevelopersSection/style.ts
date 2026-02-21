import styled from 'styled-components';

export const DevelopersSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DeveloperIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.8rem;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  margin-bottom: 10px;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const DevelopersGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
`;

