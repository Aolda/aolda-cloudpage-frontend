import styled from 'styled-components';

export const TemplateContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 120px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 150px;
`;

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 200px;
`;

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SearchSection = styled.div`
  width: 100%;
`;


