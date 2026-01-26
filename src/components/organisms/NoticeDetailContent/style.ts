import styled from 'styled-components';

export const DetailContainer = styled.article`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem;
`;

export const Header = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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

export const MetaItem = styled.span``;

export const MetaSeparator = styled.span`
  color: ${({ theme }) => theme.colors.border};
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
  padding: 3rem 0;
  min-height: 200px;
  line-height: 1.8;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 1.8rem 0 0.8rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 1.6rem 0 0.6rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin: 1rem 0;
    line-height: 1.8;
  }
`;

export const ContentText = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const ListButtonWrapper = styled.div`
  flex-shrink: 0;
  align-self: flex-start;
`;

