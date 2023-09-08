import styled from "styled-components";

export const Logo = (props) => {
    const { src } = props;
    return (
        <h1>
            <SA href="index.html">
                <SImg src={src} alt="with GRIT Logo" />
            </SA>
        </h1>
    )
};

const SA = styled.a`
    display:block;
`;

const SImg = styled.img`
    width: 7rem;
    vertical-align: middle;
`;