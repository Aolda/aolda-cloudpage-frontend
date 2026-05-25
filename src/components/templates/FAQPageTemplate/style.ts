import styled from 'styled-components';

export const TemplateContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 120px 120px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
`;

