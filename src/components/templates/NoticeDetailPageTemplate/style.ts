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
  margin: 400px auto 0;
  padding: 40px 0;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
`;

