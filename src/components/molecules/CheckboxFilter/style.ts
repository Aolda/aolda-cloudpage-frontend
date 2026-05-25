import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span<{ $checked: boolean }>`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  border: 0.125rem solid ${({ theme, $checked }) => ($checked ? theme.colors.primary : theme.colors.border)};
  border-radius: 0.25rem;
  background: ${({ theme, $checked }) => ($checked ? theme.colors.primary : 'transparent')};
  transition: all 0.2s;

  &::after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    left: 0.3125rem;
    top: 0.125rem;
    width: 0.25rem;
    height: 0.5rem;
    border: solid #ffffff;
    border-width: 0 0.125rem 0.125rem 0;
    transform: rotate(45deg);
  }
`;

