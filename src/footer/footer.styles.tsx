import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const FooterContainer = styled(Stack)`
    background-color: yellow;
    display: flex; /* Enable Flexbox */
    justify-content: space-between; /* Push items to the left and right */
    align-items: center; /* Center items vertically */
    padding: 0 10px; /* Add padding for spacing */
    background-color: var(--color-bg-secondary); /* Optional: Footer background color */
    color: var(--color-fg-primary); /* Optional: Footer text color */
    height: 2.5vh; /* Fixed height for the footer */
    font-size: 0.8rem; /* Adjust font size */
    cursor: default;
`;
export const LeftContainer = styled(Stack)`
    text-align: left;
`;
export const RightContainer = styled(Stack)`
    text-align: right;
`;

export const Interactable = styled.div`
    padding: 1px 2px 1px 2px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: var(--color-border);
    }
`;
