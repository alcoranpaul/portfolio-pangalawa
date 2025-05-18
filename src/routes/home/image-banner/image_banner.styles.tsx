import { Stack } from "react-bootstrap";
import styled from "styled-components";

export const BannerContainer = styled(Stack)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 0px 10px;
    overflow: hidden;
    position: relative;
`;

export const FullName = styled.div`
    color: var(--color-accent-secondary);
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    width: 100%; /* Prevent text overflow */

    @media (max-width: 450px) {
        font-size: 13px;
        margin-top: 0px;
    }
`;

export const ImageContainer = styled.div``;
