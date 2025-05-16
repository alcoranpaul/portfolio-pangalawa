import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const ProjectContainer = styled(Stack)`
    padding: 20px 5px 20px 5px;
    justify-content: start;
    align-items: center; /* Center vertically */
    width: 15%;
`;

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; /* Center vertically */
    width: 240px;
    height: 240px;
    padding: 0px;
    border-radius: 50%;
    background-color: var(--color-bg-tertiary);
    border: 10px solid var(--color-bg-primary);
    box-shadow: 0px 2px 20px 10px var(--color-bg-tertiary);
    overflow: hidden;
    position: relative;
`;

export const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* Changed from 'contain' to prevent whitespace */
    object-position: center 30%; /* Focus on upper portion */
    transform: scale(1.2);
    transform-origin: center;
`;

export const ProfileDescription = styled(Stack)`
    padding: 0px;
    margin: 0px;
    flex-grow: 0;
`;

export const ProfileName = styled.div`
    font-size: clamp(18px, 2vw, 25px); /* Dynamically adjust font size */
    font-weight: bold;
`;

export const ProfileSubName = styled.div`
    color: var(--color-fg-secondary);
    font-size: clamp(12px, 2vw, 15px);
`;

export const ShortDescription = styled.div`
    padding: 0;
    margin: 0;
`;

export const BibleVerseHighlight = styled.span`
    background-color: var(--color-border);
    border-radius: 10px;
    padding: 3px;
    transition: all 0.5s ease, background-color 0.8s ease-out;

    &:hover {
        background-color: var(--color-border-accent);
        cursor: default;
        transform: translateX(4px);
    }
`;
export const HighlightTitle = styled.div`
    font-size: clamp(15px, 2vw, 19px); /* Dynamically adjust font size */
    font-weight: bold;
    margin: 0px;
    padding: 0px;
`;

export const HighlightContainer = styled.ul`
    margin: 0;
    list-style: none;
    border-radius: 6px;
    padding: 1.2rem;
`;

export const HighlightItem = styled.li`
    position: relative;
    color: var(--color-fg-primary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.25rem;
    transition: all 0.2s ease;
    border-radius: 4px;

    &:before {
        content: "▹";
        color: var(--color-fg-accent);
        position: absolute;
        left: -1rem;
        font-size: 1.1rem;
    }

    &:hover {
        background-color: var(--color-bg-tertiary);
        cursor: default;
        transform: translateX(4px);
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const HorizontalLine = styled.hr`
    padding: 0;
    border: 0;
    border-radius: 10px;
    height: 3px;
    background-color: var(--color-border-accent);
    margin: 1px;
    width: 100%; /* Make it span the full width of the container */
`;
