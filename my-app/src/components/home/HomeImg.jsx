import styled from "styled-components";

export const HomeImg = () => {
    return (
        <SDiv>
            <SImg src="./test.svg" alt="test" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const SImg = styled.img`
    width: 80%;
`;