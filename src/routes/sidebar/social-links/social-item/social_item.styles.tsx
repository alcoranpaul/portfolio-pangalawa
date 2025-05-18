import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemContainer = styled(Link)`
    background-color: var(--color-bg-primary);
    color: var(--color-text-secondary);
    width: 100%;
    height: 5%;
    padding: 4px;

    border-radius: 0.1rem;
    transition: transform 0.2s, border-radius 0.6s, background-color 0.2s, color 0.2s,
        letter-spacing 0.35s;

    &:hover {
        background-color: var(--color-accent-primary);
        color: var(--color-text-primary);
        transform: scale(1.1);
        border-radius: 0.5rem;
        letter-spacing: 0px;
    }

    @media (max-width: 450px) {
        font-size: 10px;
    }
`;

export const ItemText = styled(Col)`
    letter-spacing: 3px;
    font-size: 12px;
    justify-content: center;
    align-self: center;
    transition: all 0.35s;

    &:hover {
        letter-spacing: 7px;
        font-size: 12px;
        font-weight: 900;
        transform: translateX(15px);
        text-transform: uppercase;
        color: white;
        justify-content: center;
        align-self: center;
    }
    @media (max-width: 450px) {
        font-size: 8px;
    }
`;

export const ItemIcon = styled(Col)`
    width: 25px;
    height: 25px;
    justify-content: center;
    align-self: center;
    transition: all 0.35s;
    &:hover {
        color: var(--color-highlight);
        justify-content: center;
        align-self: center;
        transform: scale(1.3);

        height: 27px;
    }

    @media (max-width: 450px) {
        width: 20px;
        height: 20px;
    }
`;
