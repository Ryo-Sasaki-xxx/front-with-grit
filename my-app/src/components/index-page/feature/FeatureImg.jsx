import styled from "styled-components";

export const FeatureImg = () => {
    return (
        <SDiv>
            <SImg src="/test.svg" alt="test" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

const SImg = styled.img`
    width: 80%;
`;