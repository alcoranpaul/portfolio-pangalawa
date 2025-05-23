import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const HomeSelectionContainer = styled(Stack)`
    display: flex;
    padding: 20px 5px 20px 0px;
`;

export const HomeSelectionItem = styled.div`
    background-color: var(--color-border);
    border-radius: 5px;
    letter-spacing: 2px;
    width: 100%;
    padding: 5px 0px 5px 10px;
    font-size: 20px;
    font-weight: 100;
    transition: padding 1.2s, letter-spacing 0.3s ease-out, font-weight 0.1s ease-in-out,
        border-radius 0.8s ease-in-out;

    &:hover,
    .selected {
        background-color: var(--color-bg-secondary);
        cursor: pointer;
        padding: 5px 0px 5px 30px;
        letter-spacing: 5px;
        font-weight: 750;
        border-radius: 10px;
    }

    .selected {
        color: var(--color-accent-secondary);
    }
`;
