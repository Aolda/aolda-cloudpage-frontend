import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize, colors } from "@/styles/theme";


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
    border-radius: 0.75rem;
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
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        height: 2.5rem;
        justify-content: center;
    }
`;

export const NavLink = styled.span<{ $isActive: boolean }>`
    height: 2.5rem;
    text-align: center;
    padding: 0 0.5rem;
    margin: 0 2.25rem;
    white-space: nowrap;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.$isActive ? colors.primary500 : '#777777'};

    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
        color:${colors.primary500}; /* 마우스를 올렸을 때도 미리 피드백 제공 */
    }
`;
