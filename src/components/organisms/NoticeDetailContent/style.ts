import styled from 'styled-components';

export const DetailContainer = styled.article`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  margin-top: 15px;
  margin-left: 50px;
`;

export const Header = styled.div`
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.6rem 0;
  line-height: 1.4;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.6rem;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  span {
    display: inline-block;
  }
`;

export const MetaSeparator = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0.8rem;
  width: 1px;
`;

export const AttachmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const AttachmentItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AttachmentIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-shrink: 0;
`;

export const Content = styled.div`
  margin-top: -40px;
  width: 1200px;
  padding: 3rem 0;
  min-height: 200px;
  line-height: 1.8;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 1.8rem 0 0.8rem 0;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 1.6rem 0 0.6rem 0;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
  }

  p {
    margin: 1rem 0;
    line-height: 1.8;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin: 0.5rem 0;
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
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.9em;
    font-family: monospace;
  }

  pre {
    background: ${({ theme }) => theme.colors.border};
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
    
    code {
      background: none;
      padding: 0;
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.8rem;
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
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
`;

export const ListButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1200px;
  
  /* 목록 버튼 스타일 */
  button {
    width: 94px;
    height: 43px;
    padding: 12px 32px;
    background: #1A8EE5;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    
    span {
      width: 30px;
      height: 19px;
    }
  }
`;

