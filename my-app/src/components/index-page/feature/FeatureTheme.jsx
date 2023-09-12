import styled from "styled-components";
import { Title } from "../../global/Title";
import { FeatureButton } from "./FeatureButton";



export const FeatureTheme = () => {

    return (
        <SWrapper>
            <SDiv>
                <Title subtitle="Feature ー"
                    title="5つのStepで習慣化" />
            </SDiv>
            <SDiv>
                <FeatureButton />
            </SDiv>
        </SWrapper>
    )
};

const SWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 20%;
`;

const SDiv = styled.div`
    width: 50%;
`;