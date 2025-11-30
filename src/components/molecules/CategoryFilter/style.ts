import styled from 'styled-components';

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Checkbox = styled.input`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;
`;

