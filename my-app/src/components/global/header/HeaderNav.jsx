import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = () => {

    return (
        <SNav>
            <SUl>
                <Sli>
                    <SA to="/feature">
                        機能
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/mission">
                        ミッション
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/help">
                        ヘルプセンター
                    </SA>
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

const SA = styled(Link)`
    &:hover {
        opacity: 0.5;
    }
    
`;