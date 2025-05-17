import styled from "styled-components";

export const Container = styled.div`
    width: 25%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    padding-left: 10px;
    overflow-y: auto;
    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    li {
        margin-bottom: 4px;
        &:hover {
            text-decoration: underline;
        }
    }

    .outer_heading {
        font-size: 1.4rem;
        font-weight: 350;
    }

    .inner_heading {
        font-size: 1.1rem;
        position: relative;
        padding-left: 10px;
        margin-left: 10px;
        font-weight: 200;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: gray;
        }
    }

    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 5px; /* Width of the vertical scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: var(--color-scrollbar-bg); /* Color of the scrollbar track */
        border-radius: 2px; /* Rounded corners for the track */
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-scrollbar-active); /* Color of the scrollbar thumb */
        border-radius: 7px; /* Rounded corners for the thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(
            --color-scrollbar-hover
        ); /* Darker color when hovering over the scrollbar thumb */
    }
`;
