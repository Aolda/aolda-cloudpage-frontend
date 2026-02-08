import styled from "styled-components";

/* NavBar */
export const HeaderBar = styled.header`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 16px;
  position: relative;
  width: 100%;
  max-width: 1360px;
  height: 72px;
  margin: 0 auto;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 12px;

  > *:nth-child(2) {
    justify-self: center;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0.6rem 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  cursor: pointer;
`;

