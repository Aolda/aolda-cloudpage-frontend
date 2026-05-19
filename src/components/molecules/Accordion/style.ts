import styled from 'styled-components';
import { media } from '@/styles/theme';

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
  box-sizing: border-box;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
  }

  ${media.tablet} {
    height: 72px;
    padding: 0;
    border-bottom: 1px solid #efefef;

    &:hover {
      background-color: transparent;
    }
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex: 1;
  min-width: 0;

  ${media.tablet} {
    gap: 0;
    height: 100%;
    align-items: stretch;
  }
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

  ${media.tablet} {
    width: 64px;
    height: 72px;
    padding: 20px 16px;
    box-sizing: border-box;
    border-radius: 0;
    background: transparent;
  }
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;

  ${media.tablet} {
    width: 32px;
    height: 32px;
    padding: 6px;
    background: #444444;
    border-radius: 200px;
    box-sizing: border-box;
    object-fit: contain;
  }
`;

export const TitleText = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  ${media.tablet} {
    flex: 1;
    min-width: 0;
    padding: 20px 16px;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #232527;
    display: flex;
    align-items: center;
  }
`;

export const ChevronIcon = styled.svg<{ $expanded: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: transform 0.2s;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;

  ${media.tablet} {
    flex-shrink: 0;
    width: 56px;
    min-width: 56px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777777;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  padding-left: calc(2rem + 4rem + 1.6rem);
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;

  ${media.tablet} {
    padding: 16px 16px 16px 64px;
    border-bottom: 1px solid #efefef;
  }
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

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 150%;
    color: #777777;
  }
`;
