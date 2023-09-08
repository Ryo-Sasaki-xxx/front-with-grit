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
`;