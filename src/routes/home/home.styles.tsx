import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const HomeContainer = styled(Stack)`
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    display: flex; /* Enable Flexbox */
    flex-grow: 1;
    height: 100%;

    padding: 50px 50px 20px 50px;
    user-select: none; /* Disable text selection */
    color: var(--color-fg-primary);
`;

export const RightContainer = styled(Stack)`
    width: 50%;
    display: flex;
    .project_highlights {
        flex-grow: 1;
        img {
            width: 100%;
            height: 500px;
            object-fit: contain;
        }
    }

    .projects_favorites {
        height: 20%;
        background-color: red;
    }

    .github_calendar {
        height: 30%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center; /* Center vertically */
        /* background-color: green; */
        overflow-x: auto;
    }
`;
