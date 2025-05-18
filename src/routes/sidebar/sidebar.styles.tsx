import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const SidebarContainer = styled(Stack)`
    flex: 1;
    padding: 0; /* Remove extra padding */
    margin: 0; /* Remove extra margin */
    overflow-y: auto; /* Enable scrolling if content overflows */
    width: 100%;
    height: 100%;
    color: var(--color-fg-primary);
    font-size: 0.8rem;
    cursor: default;
    user-select: none;
    overflow-x: auto;
    overflow-y: auto;
    white-space: nowrap;

    /* Vertical scrollbar (your existing styles) */
    &::-webkit-scrollbar {
        width: 3px; /* Affects VERTICAL scrollbar width */
        height: 5px; /* Hides HORIZONTAL scrollbar by default */
    }

    &::-webkit-scrollbar-track {
        background: var(--color-scrollbar-bg);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-scrollbar-active);
        border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--color-scrollbar-hover);
    }

    /* Horizontal scrollbar (new styles) */
    &::-webkit-scrollbar:horizontal {
        height: 5px; /* Horizontal scrollbar height */
    }

    &::-webkit-scrollbar-thumb:horizontal {
        background: var(--color-scrollbar-active);
        border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb:horizontal:hover {
        background: var(--color-scrollbar-hover);
    }

    &::-webkit-scrollbar-corner {
        background: transparent; /* Makes it invisible */
    }
`;

export const Header = styled.div`
    padding: 5px;
`;
export const Content = styled.div`
    width: 100%;
    padding: 5px 0px 0px 0px;
`;

export const RepoName = styled.div`
    padding-left: 5px;
    font-weight: 600;
    font-size: 0.75rem;
`;
