import styled from "styled-components";

export const ProjectContainer = styled.div`
    position: relative; /* Position relative to the parent container */
    background-color: var(--color-bg-secondary);
    width: 100%;

    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        width: 5px; /* Width of the vertical scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: var(--color-bg-tertiary); /* Color of the scrollbar track */
        border-radius: 2px; /* Rounded corners for the track */
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-scrollbar-active); /* Color of the scrollbar thumb */
        border-radius: 7px; /* Rounded corners for the thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(
            --color-highlight
        ); /* Darker color when hovering over the scrollbar thumb */
    }
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    padding: 20px 10px 20px 20px;
    width: 100%;

    .disabled {
        pointer-events: none; /* Disable pointer events when the class is applied */
        opacity: 0.5; /* Make it semi-transparent to indicate it's disabled */
    }
`;
