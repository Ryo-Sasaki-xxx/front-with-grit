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
    height: 45rem;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    transform: scale(-1,1);
`;