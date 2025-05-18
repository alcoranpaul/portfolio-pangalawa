import { PopoverBody, PopoverHeader } from "react-bootstrap";
import styled from "styled-components";

export const TooltipHeader = styled(PopoverHeader)`
    background-color: var(--color-bg-primary);
    color: var(--color-fg-primary);
    font-weight: 400;
`;

export const TooltipBody = styled(PopoverBody)`
    background-color: var(--color-bg-secondary);
    color: var(--color-fg-primary);
    font-size: 0.9rem;
    font-weight: 200;
`;
