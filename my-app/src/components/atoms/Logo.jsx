import styled from "styled-components";

export const Logo = (props) => {
    const { src, marginTop } = props;
    return (
        <h1>
            <a href="index.html">
                <SImg src={src} alt="with GRIT Logo" marginTop={marginTop} />
            </a>
        </h1>
    )
};

const SImg = styled.img`
    width: 110px;
    margin-top: ${(props) => props.marginTop};
`;