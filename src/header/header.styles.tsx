import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled(Stack)`
    background-color: yellow;
    display: flex; /* Enable Flexbox */
    justify-content: space-between; /* Push items to the left and right */
    align-items: center; /* Center items vertically */
    padding: 0 10px; /* Add padding for spacing */
    background-color: var(--color-bg-secondary); /* Optional: Footer background color */
    color: var(--color-fg-primary); /* Optional: Footer text color */
    height: 2.5vh; /* Fixed height for the footer */
    font-size: 0.8rem;
`;

export const HeaderLeftContainer = styled(Stack)`
    text-align: left;
`;
export const HeaderRightContainer = styled(Stack)`
    text-align: right;
`;

export const HeaderProfile = styled(Link)`
    width: 21px;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 3px;
`;

export const HeaderIcon = styled.div`
    width: 21px;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 3px;

    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--color-link-hover);
        border-radius: 10%;
        cursor: pointer;
        transform: scale(1.5);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Optional shadow effect */
    }
`;
