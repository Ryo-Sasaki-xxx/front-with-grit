import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = (props) => {
    const { src, width, link } = props;
    return (
        <h1>
            <Link to={link}>
                <SA >
                    <SImg src={src} width={width} alt="with GRIT Logo" />
                </SA>
            </Link>
        </h1>
    )
};

const SA = styled.a`
    display:block;
`;

const SImg = styled.img`
    width: ${props => props.width};
    vertical-align: middle;
`;