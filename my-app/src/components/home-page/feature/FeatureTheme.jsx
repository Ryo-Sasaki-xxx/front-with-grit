import styled from "styled-components";
import { Title } from "../../global/Title";
import { FeatureButton } from "./FeatureButton";



export const FeatureTheme = () => {

    return (
        <SWrapper>
            <SDiv>
                <Title subtitle="Feature ー"
                    title="3つのStepで習慣化" />
            </SDiv>
            <FeatureButton />
        </SWrapper>
    )
};

const SWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 20%;
    @media (max-width: 60rem) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`;

const SDiv = styled.div`
    width: 50%;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;