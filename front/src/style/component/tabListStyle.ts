import styled from "styled-components";
import { color, fontSize } from "../cssPalette";

export const TabContainer = styled.div`
    grid-area: tablist;

    display: flex;

    width: 100%;
    height: 100%;

    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Tab = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;

    min-width: 280px;
    height: 100%;

    margin-right: 10px;

    border-bottom: 2px solid ${({ active }) => (active ? color.main : "none")};
`;

export const TabTitle = styled.div`
    /* margin-right: 10px; */

    font-size: ${fontSize.big};
    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    /* text-overflow: ellipsis; */
`;

export const TabCloseButton = styled.button`
    width: 18%;
    height: 100%;

    text-align: center;
`;
