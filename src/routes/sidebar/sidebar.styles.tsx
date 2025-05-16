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
