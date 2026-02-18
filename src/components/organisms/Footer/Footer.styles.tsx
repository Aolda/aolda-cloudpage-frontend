import styled from "styled-components";
import { pxToRem } from "@/styles/utils";
import { colors, fontSize } from "@/styles/theme";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 14.375rem;

    background-color: #061C2C;

    position: relative;
    bottom: 0;

    padding: 3.75rem 7.5rem;

    gap: 1rem;

    .logoSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 16.3125rem;
        height: 6.5rem;

        gap: 0.5rem;

        .description {
            padding-left: 2.5rem;
            color: white;
            font-size: ${fontSize.smaller};
            font-weight: 200;
            margin-top: 3px;
            padding-left: 4rem;
            padding-bottom: 0.8rem;
            line-height: 0.3;
        }
    }

    .addressSection {
        display: flex;
        flex-direction: column;
        width: 18.84375rem;
        height: 2.5625rem;
        gap: 0.5rem;
        padding-left: 4.3rem;
        color: white;

        .address {
            font-size: ${fontSize.smaller};
            font-weight: 200;
            line-height: 1.4;
            width: 200px;
        }

        .managementSection {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: ${fontSize.smaller};
            font-weight: 200;
            line-height: 1.4;

            .divider {
                width: 4px;
                height: 0px;
                border-width: 0.5px;
                transform: rotate(-90deg);
            }
        }
    }
`;
