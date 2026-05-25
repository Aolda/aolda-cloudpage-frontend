import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    /* 1360px 고정 시 좁은 화면에서 오른쪽(다크모드 등)이 잘림 → 뷰포트에 맞춤 */
    width: min(1360px, calc(100vw - 32px));
    max-width: 1360px;
    height: 72px;
    align-items: center;
    position: absolute;
    top: 1.5625rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    padding: 18px 16px;
    border: solid 1px ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.surface};
    box-sizing: border-box;

    .iconSection {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 220px;
        flex-shrink: 0;
        
        a {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        img {
            display: block;
            width: 35px !important;
            height: 36px !important;
            object-fit: contain;
        }
    }

    .linkSeciton {
        /* TAB container */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
        margin: 0 auto;
        width: 272px;
        height: 39px;

        a {
            text-decoration: none;
            display: flex;
        }
    }

    .actionSection {
        width: 220px;
        min-width: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        z-index: 2;
    }
`;

export const NavLink = styled.span<{ $isActive: boolean }>`
    /* TAB */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 12px;
    height: 39px;
    flex: none;
    flex-grow: 0;

    /* Text */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    text-align: center;
    color: ${(props) =>
      props.$isActive
        ? props.theme.colors.primary500
        : props.theme.mode === 'dark'
          ? '#FAFAFA'
          : props.theme.colors.gray600};
    white-space: nowrap;

    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary500};
    }
`;
