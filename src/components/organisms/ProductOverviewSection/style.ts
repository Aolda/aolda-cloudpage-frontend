import styled from 'styled-components';

export const OverviewSection = styled.section`
  padding: 3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const OverviewContent = styled.p`
  margin: 2rem 0 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

