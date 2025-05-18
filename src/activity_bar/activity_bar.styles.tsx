import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const StackContainer = styled(Stack)`
    background-color: var(--color-bg-primary);
    width: 100%; /* Full width of the parent container */
    height: 100%;
`;

export const Icon = styled.div`
    color: var(--color-fg-secondary);
    display: flex; /* Enable Flexbox */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    padding: 15px 5px 5px 15px;
    transition: color 0.1s ease, transform 0.3s ease;
    &:hover {
        color: var(--color-badge-fg);
        transform: scale(1.1); /* Scale up the icon on hover */
    }
`;
