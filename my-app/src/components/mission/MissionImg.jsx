import styled from "styled-components";

export const MissionImg = () => {
    return (
        <SDiv>
            <SImg src="./test.svg" alt="test" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SImg = styled.img`
    width: 80%;
`;