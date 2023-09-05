import styled from "styled-components";

export const SnsButton = (props) => {
    const { instagram, x } = props;

    return (
        <SDiv>
            <a href="index.jsx" ><SImg src={instagram} alt="isntagramリンク" target="_blank" /></a>
            <a href="index.jsx"><SImg src={x} alt="xリンク" target="_blank" /></a>
        </SDiv>
    )
};

const SDiv = styled.div`
    display: flex;
    margin-top: 50px;
    width: 150px;
`;

const SImg = styled.img`
    margin-left: 25px;
    width: 40px;
    &:hover {
        opacity: 0.5;
    }
`;