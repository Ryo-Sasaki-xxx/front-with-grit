import styled from "styled-components";

export const Img = () => {
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
        width: 80%;
        padding-top: 2rem;
    }
`;

const SImg = styled.img`
    width: 80%;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;