import styled from 'styled-components';

export const DetailContainer = styled.article`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  margin-top: 0.9375rem;
  margin-left: 3.125rem;
`;

export const Header = styled.div`
  padding-bottom: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1rem;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: ${({ theme }) => theme.colors.textMuted};
  span {
    display: inline-block;
  }
`;

export const MetaSeparator = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0.5rem;
  width: 1px;
`;

export const AttachmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AttachmentItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AttachmentIcon = styled.svg`
  width: 1.125rem;
  height: 1.125rem;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-shrink: 0;
`;

export const Content = styled.div`
  margin-top: -2.5rem;
  width: 75rem;
  padding: 1.875rem 0;
  min-height: 12.5rem;
  line-height: 1.8;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.25rem 0 0.625rem 0;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.125rem 0 0.5rem 0;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1rem 0 0.375rem 0;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }

  p {
    margin: 0.625rem 0;
    line-height: 1.8;
  }

  ul, ol {
    margin: 0.625rem 0;
    padding-left: 1.25rem;
  }

  li {
    margin: 0.3125rem 0;
    line-height: 1.8;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }

  code {
    background: ${({ theme }) => theme.colors.border};
    padding: 0.125rem 0.25rem;
    border-radius: 0.1875rem;
    font-size: 0.9em;
    font-family: monospace;
  }

  pre {
    background: ${({ theme }) => theme.colors.border};
    padding: 0.625rem;
    border-radius: 0.3125rem;
    overflow-x: auto;
    margin: 0.625rem 0;
    
    code {
      background: none;
      padding: 0;
    }
  }

  blockquote {
    border-left: 0.25rem solid ${({ theme }) => theme.colors.primary};
    padding-left: 0.625rem;
    margin: 0.625rem 0;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 0.625rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.625rem 0;
  }

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.border};
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
  width: 100%;
  box-sizing: border-box;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
`;

export const ListButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 75rem;
  
  /* 목록 버튼 스타일 */
  button {
    width: 5.875rem;
    height: 2.6875rem;
    padding: 0.75rem 2rem;
    background: #1A8EE5;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #FFFFFF;
    
    span {
      width: 1.875rem;
      height: 1.1875rem;
    }
  }
`;

