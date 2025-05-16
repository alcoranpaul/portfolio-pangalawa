import styled from "styled-components";

export const PopupOverlay = styled.div`
    position: absolute; /* Position relative to the parent container */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black background */
    z-index: 9;
`;

export const Popup = styled.div`
    position: absolute; /* Position the popup relative to the parent container */
    top: 50%; /* Center vertically within the parent */
    left: 50%; /* Center horizontally within the parent */
    transform: translate(-50%, -50%); /* Adjust for the popup's own dimensions */
    background-color: var(--color-bg-secondary);
    padding: 20px;
    border-radius: 10px;
    border-color: var(--color-border);
    border-width: 10px;
    border-style: double;

    box-shadow: 1px 0px 15px 2px var(--color-accent-secondary);
    z-index: 10; /* Ensure it appears above the overlay */
    text-align: center;
    width: 85%;
    height: 95%;

    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
`;

export const ImageBanner = styled.div`
    position: relative;
    background-color: red;
    justify-content: center;
    align-content: center;
    height: 25%;
`;

export const PopupHeader = styled.div`
    position: absolute; /* Position it relative to the popup container */
    bottom: 0; /* Align it to the bottom of the popup */
    left: 50%; /* Center it horizontally */
    transform: translateX(-50%); /* Adjust for its own width to center it */
    background-color: var(--color-accent-secondary);
    width: 80%; /* Set the width to 80% of the popup */
    max-width: 500px; /* Optional: Limit the maximum width */
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    border-top: 2px solid var(--color-border); /* Optional: Add a separator */
    text-align: center; /* Center text inside the header */
    border-radius: 5px; /* Optional: Add rounded corners */
    z-index: 11;
`;

export const TableOfContent = styled.div`
    width: 25%; /* Set the width to 25% */
    background-color: blue; /* Optional: Add a background color */
    padding: 10px;
    overflow-y: auto; /* Enable scrolling if content overflows */
    overflow-x: hidden;
    height: 100%;
`;
export const Content = styled.div`
    width: 75%; /* Set the width to 75% */
    background-color: red; /* Optional: Add a background color */
    padding: 10px;
    overflow-y: auto; /* Enable scrolling if content overflows */
    overflow-x: hidden;
    height: 100%;
`;

export const CloseButton = styled.button`
    position: absolute; /* Position the close button relative to the popup */
    top: 10px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
    background-color: var(--color-highlight);
    color: var(--color-bg-primary);
    border: none;
    border-radius: 5px;
    padding: 3px 7px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;

    &:hover {
        background-color: var(--color-accent-primary);
        color: var(--color-text-primary);
        transform: scale(1.2); /* Slightly enlarge on hover */
    }
`;
