import styled from 'styled-components';

export const Container = styled.div`
  /* Frame 35 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  height: auto;
`;

export const ContentRow = styled.div`
  /* Frame 18 */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 488px;
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
  padding: 0px;
  gap: 36px;
  width: 797px;
  height: 488px;
  min-height: 488px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ImageWrapper = styled.div`
  /* Rectangle 3 */
  position: relative;
  width: 100%;
  max-width: 797px;
  height: 308px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  border-radius: 12px;
  overflow: hidden;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Description = styled.div`
  width: 797px;
  height: 144px;
  margin-top:36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  font-style: regular;
  letter-spacing: 0%;
  color: #777777;
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
  width: 379px;
  height: 488px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  overflow: hidden;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

export const InfoPanel = styled.div`
  margin-top: 2.6rem;
  padding: 2.6rem;
  border-radius: 2rem;
  display: grid;
  gap: 2rem;
  img {
    object-position: center center !important;
  }
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.5rem;
`;

