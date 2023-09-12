import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = (props) => {
    const { src } = props;
    return (
        <h1>
            <Link to="/with-grit/subscription/">
                <SA >
                    <SImg src={src} alt="with GRIT Logo" />
                </SA>
            </Link>
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