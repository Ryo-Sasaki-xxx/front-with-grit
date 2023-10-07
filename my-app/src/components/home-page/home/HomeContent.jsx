import styled from "styled-components";
import { HomeMain } from "./HomeMain";
import { HomeImg } from "./HomeImg";

export const HomeContent = () => {
    return (
        <SDiv>
            <HomeMain />
            <HomeImg />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 65rem;
    height: 45rem;
    padding: 2rem 0 5rem 0;
    display: flex;
    @media (max-width: 75rem) {
        width: 52rem;
        padding: 1.6rem 0 4rem 0;
        height: 36rem;
    }
    @media (max-width: 60rem) {
        flex-direction: column;
        width: 80%;
        height: auto;
    }
`;