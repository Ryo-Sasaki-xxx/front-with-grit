import styled from "styled-components";
import { MainArtilce } from "./MainAricle";

export const MainContent = () => {
    return (
        <SDiv>
            <MainArtilce />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 100%;
    // height: 45rem;
    padding: 4rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 60rem) {
        padding: 2rem 0 3rem;
    }
`;

