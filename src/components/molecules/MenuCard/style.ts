import styled from 'styled-components';
import Link from 'next/link';

export const MenuCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const MenuCard = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.surface : theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.625rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 9.375rem;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark' ? 'none' : '0 0.125rem 0.5rem rgba(0, 0, 0, 0.08)'};
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  width: 24rem;
  height: 13.5rem;

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark' ? 'none' : '0 0.25rem 0.75rem rgba(0, 0, 0, 0.12)'};
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.primary500 : '#333333'};
  line-height: 1.3;
  align-self: flex-start;
  white-space: pre-line;
`;

export const ActionLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 0.75rem;
  margin-top: auto;
  align-self: stretch;
`;

export const ActionLabelText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.textMuted : theme.colors.gray600};
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const ArrowVector = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.textMuted : theme.colors.gray600};
  display: block;
`;
