import styled from "styled-components";
import { Logo } from "../Logo";
import { HeaderNav } from "./HeaderNav";
// import { SubMenue } from "./SubMenue";
import { Logout } from "./Logout";


export const HeaderContent = (props) => {
    const { isActiveHumberger, setIsActiveHumberger } = props;

    return (
        <SDiv>
            <Logo src="/with-grit-logo-dark.svg" width="" link="/app" />
            <HeaderNav />
            <Logout />
            <SButton onClick={() => setIsActiveHumberger((prev) => !prev)}>
                <SSpan1 $isActiveHumberger={isActiveHumberger}></SSpan1>
                <SSpan2 $isActiveHumberger={isActiveHumberger}></SSpan2>
                <SSpan3 $isActiveHumberger={isActiveHumberger}></SSpan3>
            </SButton>
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 95%;
    padding: 0.5rem 0;
    display: flex;
    justify-content:space-between;
`;

const SSpan1 = styled.span`
    content: '';
    display: block;
    height: 2px;
    width: 2rem;
    border-radius: 3px;
    background-color: #fff;
    transition: .3s;
    ${props => props.$isActiveHumberger && "transform: translate(0, 0.4rem) rotate(-45deg);"}
    ${props => props.$isActiveHumberger && "width: 2.5rem;"}
`;

const SSpan2 = styled.span`
    content: '';
    display: block;
    height: 2px;
    width: 2rem;
    border-radius: 3px;
    background-color: #fff;
    transition: .3s;
    ${props => props.$isActiveHumberger && "opacity: 0;"}
`;

const SSpan3 = styled.span`
    content: '';
    display: block;
    height: 2px;
    width: 2rem;
    border-radius: 3px;
    background-color: #fff;
    transition: .3s;
    ${props => props.$isActiveHumberger && "transform: translate(0, -0.4rem) rotate(45deg);"}
    ${props => props.$isActiveHumberger && "width: 2.5rem;"}
`;

const SButton = styled.button`
    display: none;
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
    @media (max-width: 65rem) {
        width: 3rem;
        height: 3rem;
        background: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: auto 0;
        padding: 1rem 0;
        border-radius: 5px;
    }
`;
