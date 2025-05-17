import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const DetailsContainer = styled(Stack)`
    width: 100%;
    padding-top: 5px;
    display: flex;

    justify-content: start;
    align-items: start;
    overflow: hidden;
`;

export const Header = styled(Stack)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-height: 7vh;
`;

export const ContentContainer = styled(Stack)`
    display: flex;
    width: 95%;

    padding: 0px 10px 10px 10px;
    justify-content: start;
    align-items: center;
    overflow: hidden;
`;

export const TableOfContent = styled.div`
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

export const Content = styled.div`
    height: 70vh;

    overflow-y: auto;
    width: 100%;
    padding: 20px;

    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.2rem;
    }

    ul p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .highlight {
        background-color: #33ff0054;
        transition: background-color 0.5s ease-in-out;
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
