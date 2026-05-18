import styled from 'styled-components';
import { media } from '@/styles/theme';

export const SearchForm = styled.form`
  margin-top: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 996px;
  height: 48px;
  box-sizing: border-box;

  ${media.belowDesktop} {
    margin-top: 0;
    max-width: 100%;
    height: 48px;
  }

  ${media.mobile} {
    height: 40px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  height: 48px;
  padding: 12px 48px 12px 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  border: 1px solid #b3d9f2;
  border-bottom: 2px solid #b3d9f2;
  border-radius: 8px;
  background: #ffffff;
  color: #1a1a1a;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #b3d9f2;
    border-bottom-color: #3d90d4;
  }

  &::placeholder {
    color: #999999;
  }

  ${media.belowDesktop} {
    font-size: 12px;
    line-height: 150%;
    border: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    padding: 12px 48px 12px 16px;

    &::placeholder {
      color: #777777;
    }

    &:focus {
      border-color: #efefef;
      border-bottom-color: #efefef;
    }
  }

  ${media.mobile} {
    height: 40px;
    font-size: 10px;
    line-height: 150%;
    padding: 8px 48px 8px 16px;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 1.6rem;
  width: 2rem;
  height: 2rem;
  color: #3d90d4;
  pointer-events: none;

  ${media.belowDesktop} {
    right: 16px;
    width: 24px;
    height: 24px;
    color: #777777;
  }
`;
