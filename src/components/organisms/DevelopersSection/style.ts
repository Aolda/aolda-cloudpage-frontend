import styled from 'styled-components';

export const DevelopersSection = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DeveloperIcon = styled.svg`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.8rem;
`;

export const DevelopersGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

