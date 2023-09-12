import styled from "styled-components";

import { MainContent } from "./MainContent";
import { Title } from "../global/Title";
import { FeatureButton } from "./FeatureButton";

export const MainWrapper = () => {
    return (
        <SDiv>
            <Title subtitle="Feature ー"
                title="5つのStepで習慣化" />
            <FeatureButton />
            <MainContent />
        </SDiv>
    );
};

const SDiv = styled.div`
    width: 65rem;
    padding: 6rem 0 7rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;