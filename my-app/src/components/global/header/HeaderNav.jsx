import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = () => {

    return (
        <SNav>
            <SUl>
                <Sli>
                    <Link to="/with-grit/subscription/feature">
                        <SA> 機能</SA>
                    </Link>
                </Sli>
                <Sli>
                    <Link to="/with-grit/subscription/mission">
                        <SA> ミッション</SA>
                    </Link>
                </Sli>
                <Sli>
                    <Link to="/with-grit/help">
                        <SA> ヘルプセンター</SA>
                    </Link>
                </Sli>
            </SUl>
        </SNav>
    )
};

const SNav = styled.nav`
    display:flex;
    align-items: center;
`;

const SUl = styled.ul`
    display: flex;
    padding: 0 1rem;
    list-style: none;
    a {
        font-size: 1.25rem;
        color: #333;
    }
`;

const Sli = styled.li`
    margin: 0 1rem;
`;

const SA = styled.a`
    &:hover {
        opacity: 0.5;
    }
`;