import styled from 'styled-components';

export const OverviewSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: -40px;
`;

export const OverviewIcon = styled.span`
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

export const OverviewContent = styled.p`
  margin-top: 3rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  width: 100%;
`;

