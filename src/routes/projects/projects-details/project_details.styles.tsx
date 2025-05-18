import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
`;

export const TechStack = styled.div`
    font-size: 0.9rem;
`;

export const Dates = styled.div`
    font-size: 0.9rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    button {
        padding: 4px 8px;
        border: none;
        border-radius: 8px;
        font-weight: 760;
        background-color: var(--color-button-bg);
        color: #ffffff;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.2s ease;
        text-transform: uppercase;
        &:hover {
            background-color: var(--color-button-bg-hover);
            transform: translateY(-1px);
        }

        &:active {
            background-color: #004494;
            transform: translateY(0);
        }

        &:disabled {
            background-color: #573939;
            color: #242424;
            cursor: not-allowed;
        }
    }
`;
