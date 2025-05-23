import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemContainer = styled(Link)`
    background-color: var(--color-bg-primary);
    color: var(--color-text-secondary);
    width: 100%;
    padding: 15px;
    border-radius: 0.1rem;
    transition: transform 0.2s, border-radius 0.6s, background-color 0.2s, color 0.2s,
        letter-spacing 0.35s;
    &:hover {
        background-color: #070606;
        color: var(--color-accent-secondary);
        border-radius: 1.5rem;
        font-weight: 900;
        letter-spacing: 0.3em;
    }

    @media (max-width: 450px) {
        font-size: 12px;
    }
`;
