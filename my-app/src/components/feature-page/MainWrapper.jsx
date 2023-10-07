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
    @media (max-width: 75rem) {
        width: 52rem;
        padding: 5rem 0 6rem 0;
    }
    @media (max-width: 60rem) {
        width: 80%;
        height: auto;
        padding: 3rem 0 5rem 0;
    }
`;

const SDiv2 = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 60rem) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`;

const SDiv3 = styled.div`
    width: 50%;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;