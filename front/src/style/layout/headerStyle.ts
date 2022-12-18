import styled from "styled-components";
import { color } from "../cssPalette";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-rows: 40px 35px;
    grid-template-columns: 60px;
    grid-template-areas:
        "menu . logo"
        "menu tablist tablist";

    width: 100%;
`;

export const LogoContainer = styled.div`
    grid-area: logo;

    display: flex;
    justify-content: end;
    align-items: center;

    svg {
        width: 25px;
        height: 25px;

        margin-right: 10px;
    }
`;

export const Logo = styled.h1`
    margin-right: 10px;

    color: ${color.main};
`;
