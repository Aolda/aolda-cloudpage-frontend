import styled from 'styled-components';

export const ServiceLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const ServiceCardWrapper = styled.div`
  display: block;
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Background, #2A2A2A)' : 'transparent'};
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'var(--Mode-Border, #636363)' : theme.colors.border};
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  height: 15rem;
  min-width: 14.4375rem;
  width: 14.4375rem;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  }
  
`;

/* Frame 1261158722 - 아이콘 + 제목 블록 */
export const IconTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.25rem;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 0.5rem;
`;

/* tabler:database-heart - 32x32 */
export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  object-fit: contain;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const AMDBIconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DatabaseIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const HeartIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  margin-left: -0.125rem;
  position: relative;
  z-index: 1;
`;

/* Text - Title-H3 */
export const Title = styled.h3`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: left;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text)};
  align-self: stretch;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const Description = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.textMuted)};
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  bottom: 0.9375rem;
  right: 0.9375rem;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : theme.colors.textMuted)};
`;

