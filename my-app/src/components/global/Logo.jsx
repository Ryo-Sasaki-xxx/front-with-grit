import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = (props) => {
    const { src, width, link } = props;
    return (
        <SH1 width={width}>
            <SA to={link} >
                <SImg src={src} alt="with GRIT Logo" />
            </SA>
        </SH1>
    )
};

const SH1 = styled.h1`
    width: ${props => props.width};
    display:block;
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