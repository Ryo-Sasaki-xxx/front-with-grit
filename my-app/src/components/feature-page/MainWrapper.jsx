import styled from "styled-components";

import { MainContent } from "./MainContent";
import { Title } from "../global/Title";
import { FeatureButton } from "./FeatureButton";

export const MainWrapper = () => {
    return (
        <SDiv>
            <SDiv2>
                <SDiv3>
                    <Title subtitle="Feature ー"
                        title="3つのStepで習慣化" />
                </SDiv3>
                <FeatureButton />
            </SDiv2>
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

const SDiv2 = styled.div`
    display: flex;
    width: 100%;
`;

const SDiv3 = styled.div`
    width: 50%;
`;