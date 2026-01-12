import styled from 'styled-components';

export const Accordion = styled.div`
  background: #ffffff;
  margin-bottom: 0;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex: 1;
`;

export const TitleIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SearchIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  color: #3D90D4;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

export const TitleText = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;
`;

export const Content = styled.div`
  padding: 2rem;
  padding-left: calc(2rem + 4rem + 1.6rem); /* padding + icon width + gap */
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

export const ContentText = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-wrap;
  word-break: break-word;

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
  }
`;
