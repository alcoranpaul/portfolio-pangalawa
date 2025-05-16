import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const WorkContainer = styled(Stack)`
    padding-top: 5px;
    display: flex;
    flex-grow: 1;
    justify-content: start;
    align-items: start;
    overflow: hidden;
`;

export const TableOfContentContainer = styled.div`
    width: 30%;
    padding: 1rem;

    h2 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    ul {
        list-style: none; /* remove bullets */
        padding-left: 0; /* remove default ul padding */
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;

        a {
            text-decoration: none;
            transition: color 0.2s ease;

            &:hover {
                color: var(--color-link); /* bootstrap blue or your brand color */
                cursor: pointer;
            }
        }
    }
`;

export const WorkContent = styled(Stack)`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
    overflow-y: auto;
    max-height: 85vh; /* or any height */
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

export const WorkItem = styled.div`
    width: 90%;

    h1 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1rem;
    }
`;

export const WorkHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 100%;
`;

export const DescriptionList = styled.ul`
    margin: 0 0 1rem 1.25rem; /* bottom spacing and indent for bullets */
    list-style-type: disc;
    font-size: 1rem;
    line-height: 1.2;
`;

export const Button = styled.button`
    padding: 0.5rem 1.1rem;
    background-color: var(--color-button-bg);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
        background-color: var(--color-button-bg-hover); /* Darker blue on hover/focus */
        outline: none;
    }

    &:active {
        background-color: var(--color-button-bg-hover); /* Even darker on active */
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
