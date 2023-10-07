import styled from "styled-components";
import { Logo } from "../Logo";
import { HeaderNav } from "./HeaderNav";
import { SnsButton } from "../SnsButton";
import { SignButton } from "../SignButton";

import { IsActiveHumbergerContext } from "./provider/ActiveHumberger";
import { useContext } from "react";

export const HeaderContent = () => {
    const { isActiveHumberger, setIsActiveHumberger } = useContext(IsActiveHumbergerContext);

    return (
        <SDiv>
            <Logo src="/with-grit-logo-dark.svg" width="9%" link="/" />
            <SDiv2>
                <HeaderNav />
                <SnsButton instagram="/instagram-dark.svg" x="/x-dark.svg" width="12rem" />
                <SignButton />
            </SDiv2>
            <SButton onClick={() => setIsActiveHumberger((prev) => !prev)}>
                <SSpan1 $isActiveHumberger={isActiveHumberger}></SSpan1>
                <SSpan2 $isActiveHumberger={isActiveHumberger}></SSpan2>
                <SSpan3 $isActiveHumberger={isActiveHumberger}></SSpan3>
            </SButton>
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 75rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 75rem) {
        width: 60rem;
        padding: 0.4rem 0;
    }
    @media (max-width: 60rem) {
        padding: 0.4rem;
        width: 100%;
    }
`;

const SDiv2 = styled.div`
    width: 65rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 75rem) {
        width: 52rem;
    }
    @media (max-width: 60rem) {
        display: none;
    }
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
    &:hover {
        opacity: 0.5;
    }
    @media (max-width: 60rem) {
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