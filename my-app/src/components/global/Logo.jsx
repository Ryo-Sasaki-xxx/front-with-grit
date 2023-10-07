import styled from "styled-components";
import { Link } from "react-router-dom";

import { IsActiveHumbergerContext } from "./header/provider/ActiveHumberger";
import { useContext } from "react";

export const Logo = (props) => {
    const { setIsActiveHumberger } = useContext(IsActiveHumbergerContext);
    const { src, width, link } = props;
    return (
        <SH1 width={width}>
            <SA to={link} onClick={() => setIsActiveHumberger(false)}>
                <SImg src={src} alt="with GRIT Logo" />
            </SA>
        </SH1>
    )
};

const SH1 = styled.h1`
    width: ${props => props.width};
    display:block;
    @media (max-width: 60rem) {
        width: 5rem;
    }
`;

const SA = styled(Link)`
    display:block;
    height: 100%;
    width:100%
`;

const SImg = styled.img`
    height:100%;
    max-width: 100%;
    vertical-align: middle;
`;