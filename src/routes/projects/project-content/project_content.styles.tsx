import styled from "styled-components";

export const ProjectContainer = styled.div`
    position: relative; /* Position relative to the parent container */
    background-color: var(--color-bg-secondary);
    width: 100%;
    max-height: 80vh; /* Ensure it doesn't exceed the parent's height */

    border-radius: 10px;
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    padding: 10px 10px 10px 20px;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    width: 100%;
    max-height: 80vh;

    .disabled {
        pointer-events: none; /* Disable pointer events when the class is applied */
        opacity: 0.5; /* Make it semi-transparent to indicate it's disabled */
    }

    &::-webkit-scrollbar {
        width: 7px; /* Width of the vertical scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: var(--color-bg-secondary); /* Color of the scrollbar track */
        border-radius: 2px; /* Rounded corners for the track */
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-accent-secondary); /* Color of the scrollbar thumb */
        border-radius: 7px; /* Rounded corners for the thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(
            --color-highlight
        ); /* Darker color when hovering over the scrollbar thumb */
    }
`;
