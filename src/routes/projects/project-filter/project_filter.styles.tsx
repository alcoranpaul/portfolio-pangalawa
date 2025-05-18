import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const FilterContainer = styled(Row)`
    width: 100%;
    justify-self: center;
    align-self: center;
    height: 50px;
`;

export const Item = styled(Col)`
    background-color: var(--color-border);
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    justify-self: center;
    text-align: center;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 300;
    transition: all 0.25s ease-in-out;

    .selected,
    :hover {
        transform: scale(1.05);
        letter-spacing: 7px;
        font-weight: 550;
        border-radius: 10px;
    }
    .selected {
        color: var(--color-accent-secondary);
        transform: scale(1);
    }
`;
