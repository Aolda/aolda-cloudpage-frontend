import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span<{ $checked: boolean }>`
  position: relative;
  width: 2rem;
  height: 2rem;
  border: 2px solid ${({ theme, $checked }) => ($checked ? theme.colors.primary : theme.colors.border)};
  border-radius: 4px;
  background: ${({ theme, $checked }) => ($checked ? theme.colors.primary : 'transparent')};
  transition: all 0.2s;

  &::after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    left: 0.5rem;
    top: 0.2rem;
    width: 0.4rem;
    height: 0.8rem;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
