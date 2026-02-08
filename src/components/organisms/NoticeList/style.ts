import styled from 'styled-components';

export const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Count = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

