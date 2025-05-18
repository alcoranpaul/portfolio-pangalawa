import styled from "styled-components";

export const DirectoryContainer = styled.div`
    padding: 3px 3px 3px 0px;
    /* display: flex; */
    width: 100%;
    transition: background-color 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 3px;

    &:hover {
        background-color: var(--color-bg-secondary);
    }
`;
