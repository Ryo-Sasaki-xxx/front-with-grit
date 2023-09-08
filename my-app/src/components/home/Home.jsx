import styled from "styled-components";
import { HomeContent } from "./HomeContent";

export const Home = () => {
    return (
        <SDiv>
            <HomeContent />
        </SDiv>
    )
};

const SDiv = styled.div`
    display: flex;
    justify-content: center;
    background-image:url(./background-curve.svg), linear-gradient(90deg, rgba(193, 71, 233, 0.00) 0%, #C147E9 79.69%);
    background-size:100%;
    background-position: bottom;
`;
