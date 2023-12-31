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
            </SUl>
        </SNav>
    )
};

const SNav = styled.nav`
    flex-grow:1;
    display:flex;
    align-items: center;
    @media (max-width: 65rem) {
        display: none;
    }
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

