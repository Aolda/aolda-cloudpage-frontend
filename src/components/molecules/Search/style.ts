import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-top: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  width: 996px;
  max-width: 996px;
  height: 48px;
  
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 1.2rem 4.5rem 1.2rem 1.6rem;
  font-size: 1.5rem;
  border: 1px solid #B3D9F2;
  border-bottom: 2px solid #B3D9F2;
  border-radius: 8px;
  background: #ffffff;
  color: #1a1a1a;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #B3D9F2;
    border-bottom-color: #3D90D4;
  }

  &::placeholder {
    color: #999999;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 1.6rem;
  width: 2rem;
  height: 2rem;
  color: #3D90D4;
  pointer-events: none;
`;

