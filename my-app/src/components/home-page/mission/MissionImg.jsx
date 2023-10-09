import styled from "styled-components";

export const MissionImg = () => {
    return (
        <SDiv>
            <SImg src="/success-img.svg" alt="success-img" />
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
    filter: drop-shadow(2px 10px 0 rgba(3,3,3,0.2));
    margin: 0 auto;
`;