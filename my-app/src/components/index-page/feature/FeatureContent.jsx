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
    height: 45rem;
    padding: 2rem 0 5rem 0;
    display: flex;
`;