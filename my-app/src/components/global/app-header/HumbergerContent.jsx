import styled from "styled-components";
import { Link } from "react-router-dom";

export const HumbergerContent = (props) => {
    const { isActiveHumberger, setIsActiveHumberger } = props;

    const onClick = () => {
        localStorage.removeItem("jwt-access");
        localStorage.removeItem("jwt-refresh");
        setIsActiveHumberger(false);
    }

    return (
        <SNav $isActiveHumberger={isActiveHumberger}>
            <SUl>
                <SA1 to="/app" onClick={() => setIsActiveHumberger(false)}>
                    <Sli>
                        Goal & Task
                    </Sli>
                </SA1>
                <SA1 to="/app/if-then" onClick={() => setIsActiveHumberger(false)}>
                    <Sli>
                        if-then スケジュール
                    </Sli>
                </SA1>
                <SA2 to="/log-in" onClick={onClick}>
                    <Sli>
                        ログアウト
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
    transform-origin: right;
    z-index: 99;
    ${props => props.$isActiveHumberger ? "transform: scaleX(1);" : "transform: scaleX(0);"}
    @media (min-width: 65rem){
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