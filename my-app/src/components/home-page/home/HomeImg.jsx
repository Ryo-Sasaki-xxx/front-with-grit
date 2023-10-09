import styled from "styled-components";

export const HomeImg = () => {
    return (
        <SDiv>
            <SImg src="/with-grit-logo-dark.svg" alt="with GRIT Logo" />
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
    filter: drop-shadow(2px 10px 0 rgba(3,3,3,0.2));
`;