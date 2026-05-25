import styled from 'styled-components';

export const Container = styled.div`
  /* Frame 35 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1.5rem;
  width: 100%;
  max-width: 75rem;
  height: auto;
`;

export const ContentRow = styled.div`
  /* Frame 18 */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 1.5rem;
  width: 100%;
  max-width: 75rem;
  height: auto;
  min-height: 30.5rem;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const LeftPanel = styled.div`
  /* Frame 17 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 2.25rem;
  width: 49.8125rem;
  height: 32.75rem;
  min-height: 32.75rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ImageWrapper = styled.div`
  /* Rectangle 3 */
  position: relative;
  width: 100%;
  max-width: 49.8125rem;
  height: 19.25rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  border-radius: 0.75rem;
  overflow: hidden;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Description = styled.div`
  width: 50rem;
  max-width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
  white-space: pre-line;
  word-break: keep-all;
`;

export const RightPanel = styled.div`
  /* Rectangle 5 */
  position: relative;
  width: 23.6875rem;
  height: 32.75rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  border-radius: 0.75rem;
  overflow: hidden;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

export const InfoPanel = styled.div`
  margin-top: 1.625rem;
  padding: 1.625rem;
  border-radius: 1.25rem;
  display: grid;
  gap: 1.25rem;
  img {
    object-position: center center !important;
  }
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: 0.9375rem;
`;

