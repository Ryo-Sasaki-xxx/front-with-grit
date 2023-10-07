import styled from "styled-components";
import { FeatureTheme } from "./FeatureTheme";
import { FeatureContent } from "./FeatureContent";

export const FeatureWrappeer = () => {
    return (
        <SDiv>
            <FeatureTheme />
            <FeatureContent />
        </SDiv>
    );
};

const SDiv = styled.div`
    width: 65rem;
    display: flex;
    flex-direction: column;
    transform: scale(-1,1);
    @media (max-width: 75rem) {
        width: 52rem;
    }
    @media (max-width: 60rem) {
        width: 80%;
        height: auto;
    }
`;