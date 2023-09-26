import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = () => {

    return (
        <SNav>
            <SUl>
                <Sli>
                    <SA to="/app">
                        Goal & Task
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/app/if-then">
                        if-then スケジュール
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/app/feed-back">
                        フィードバック
                    </SA>
                </Sli>
            </SUl>
        </SNav>
    )
};

const SNav = styled.nav`
    flex-grow:1;
    
    display:flex;
    align-items: center;
`;

const SUl = styled.ul`
    display: flex;
    padding: 0 1rem;
    list-style: none;
`;

const Sli = styled.li`
    margin: 0 1rem;
`;

const SA = styled(Link)`
    font-size: 1.25rem;
    color: #333;
    &:hover {
        opacity: 0.5;
    }
`;

