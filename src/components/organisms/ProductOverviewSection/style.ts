import styled from 'styled-components';

export const OverviewSection = styled.section`
  padding: 2.5rem 0;
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: -2.5rem;
`;

export const OverviewIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
  width: 2.1875rem;
  height: 2.1875rem;
  flex-shrink: 0;
  margin-bottom: 0.625rem;
  margin-right: 0.9375rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const OverviewContent = styled.p`
  margin-top: 1.875rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  width: 100%;
`;

