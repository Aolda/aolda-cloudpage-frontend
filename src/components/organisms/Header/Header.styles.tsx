import styled from "styled-components"
import { colors } from "@/styles/theme";


export const StyledHeader = styled.header`
    display: flex;
    width: 1360px;
    max-width: 1360px;
    height: 72px;
    align-items: center;
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    padding: 18px 0 18px 16px;
    border: solid 1px ${colors.border};
    border-radius: 12px;
    background-color: white;
    box-sizing: border-box;

    .iconSection {
        display: flex;
        align-items: center;
        justify-content: center;
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
        padding: 0;
        margin: 0 auto;
        width: 272px;
        height: 39px;
        flex: none;
        order: 2;
        flex-grow: 0;

        a {
            text-decoration: none;
            display: flex;
        }
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
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: ${(props) => (props.$isActive ? colors.primary500 : '#777777')};
    white-space: nowrap;

    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
        color: ${colors.primary500};
    }
`;
