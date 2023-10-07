import styled from "styled-components";

export const MissionImg = () => {
    return (
        <SDiv>
            <SImg src="/test.svg" alt="test" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 60rem) {
        width: 100%;
        margin-top: 2rem;
    }
`;

const SImg = styled.img`
    width: 80%;
    margin: 0 auto;
`;