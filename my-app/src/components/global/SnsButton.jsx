import styled from "styled-components";

export const SnsButton = (props) => {
    const { instagram, x, width } = props;
    return (
        <SDiv width={width}>
            <SA href="https://instagram.com/with.grit/" target="_blank"><SImg src={instagram} alt="isntagramリンク" /></SA>
            <SA href="https://x.com/with_grit_net/" target="_blank"><SImg src={x} alt="xリンク" /></SA>
        </SDiv>
    )
};


const SDiv = styled.div`
    width: ${props => props.width};
    background: ${props => props.background};
    padding: 0 1rem;
    display:flex;
    align-items: center;
`;

const SA = styled.a`
    display:block;
    margin: 0 1rem;
`

const SImg = styled.img`
    vertical-align: middle;
    @media (hover: hover) {
        &:hover {
            opacity: 0.5;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.5;
        }
    }
`;