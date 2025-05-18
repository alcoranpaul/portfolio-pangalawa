import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const ContentItem = styled(Stack)`
    background-color: var(--color-border); /* Use secondary background color */
    width: 200px;
    height: 200px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
    transition: transform 0.8s ease, box-shadow 0.8s ease; /* Smooth transition for hover effects */
    cursor: pointer; /* Change cursor to pointer on hover */
    transform-style: preserve-3d; /* Enable 3D transformations */
    perspective: 1000px;

    &:hover {
        transform: scale(1.05); /* Slightly enlarge the item */
        box-shadow: 2px 5px 10px #4ca095de; /* Add a shadow effect */
        background-color: var(--color-accent-secondary); /* Change background color on hover */
        transition: transform 0.7s ease-out; /* Faster transition for pivot effect */
    }
`;

export const ImageContainer = styled.div`
    background-color: var(--color-bg-secondary);
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
    object-fit: contain;
    overflow: hidden;

    img {
        width: 100%; /* Make the image fill the container's width */
        height: 100%; /* Make the image fill the container's height */
        object-fit: contain; /* Ensure the image is contained within the container */
        border-radius: 5px; /* Match the container's border radius */
    }
`;

export const ItemName = styled.div`
    background-color: var(--color-bg-secondary);
    width: 100%;
    height: 20%;
    padding: 5px;
    border-radius: 5px;

    display: flex;
    justify-content: start;
    align-items: center;

    font-weight: 300;
    letter-spacing: 1px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 0.9vw;
    line-height: 1.2;
`;
