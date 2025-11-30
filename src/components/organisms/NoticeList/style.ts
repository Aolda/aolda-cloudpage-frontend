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

export const NoticeTable = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 100px 1fr 120px;
  gap: 1.6rem;
  padding: 1.6rem;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderCell = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;

  &:nth-child(3) {
    text-align: left;
  }

  &:nth-child(4) {
    text-align: right;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

