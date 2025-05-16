import { Link } from "react-router-dom";
import styled from "styled-components";

export const FileContainer = styled(Link)`
    padding: 3px 3px 3px 5px;
    &:hover {
        background-color: var(--color-bg-secondary);
    }
`;
