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
    @media (max-width: 60rem) {
        width: 100%;
        justify-content: center;
    }
`;

const SImg = styled.img`
    width: 80%;
    @media (max-width: 75rem) {
        width: 79%;
    }
    @media (max-width: 60rem) {
        width: 80%;
        margin-top: 2rem;
    }
`;