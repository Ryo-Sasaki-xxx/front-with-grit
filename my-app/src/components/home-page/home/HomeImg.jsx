import styled from "styled-components";

export const HomeImg = () => {
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
        margin-top: 2rem;
        justify-content: center;
    }
`;

const SImg = styled.img`
    width: 80%;
`;