import styled from 'styled-components';

// Checkbox 모드 스타일
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CheckboxOption = styled.div`
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

// Tag 모드 스타일
export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const TagButton = styled.button<{ $isActive: boolean }>`
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: 1px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.border)};
  border-radius: 20px;
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $isActive }) => ($isActive ? '#ffffff' : theme.colors.text)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.surfaceAlt)};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

