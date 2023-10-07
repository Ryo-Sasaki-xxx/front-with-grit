import styled from "styled-components";
import { FeatureMain } from "./FeatureMain";
import { FeatureImg } from "./FeatureImg";

export const FeatureContent = () => {
    return (
        <SDiv>
            <FeatureMain />
            <FeatureImg />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 100%;
    padding-top: 3rem;
    display: flex;
    @media (max-width: 60rem) {
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
    }
`;