import styled from "styled-components";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { IsActiveHumbergerContext } from "./provider/ActiveHumberger";

export const HumbergerContent = () => {
    const { isActiveHumberger, setIsActiveHumberger } = useContext(IsActiveHumbergerContext);
    console.log(isActiveHumberger)
    return (
        <SNav $isActiveHumberger={isActiveHumberger}>
            <SUl>
                <SA1 to="/feature" onClick={() => setIsActiveHumberger(false)}>
                    <Sli>
                        機能
                    </Sli>
                </SA1>
                <SA1 to="/mission" onClick={() => setIsActiveHumberger(false)}>
                    <Sli>
                        ミッション
                    </Sli>
                </SA1>
                <SA1 to="/help" onClick={() => setIsActiveHumberger(false)}>
                    <Sli>
                        ヘルプセンター
                    </Sli>
                </SA1>
                <SA2 to="/log-in" onClick={() => setIsActiveHumberger(false)}>
                    <Sli>
                        ログイン
                    </Sli>
                </SA2>
            </SUl>
        </SNav >
    );
};

const SNav = styled.div`
    position: absolute;
    top: 5rem;
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid #333;
    transition: .3s;
    transform-origin: center top;
    ${props => props.$isActiveHumberger ? "transform: scaleY(1);" : "transform: scaleY(0);"}
    @media (min-width: 60rem){
        display: none;
    }
`;

const SUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    list-style: none;
    width: 100%;
`;

const Sli = styled.li`
    width: 100%;
    border-bottom: 2px solid #333;
    padding: 1rem 0 1rem 2rem;
`;

const SA1 = styled(Link)`
    width: 100%;
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

const SA2 = styled(Link)`
    width: 100%;
    font-size: 1.25rem;
    color: #fff;
    background: #333;
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