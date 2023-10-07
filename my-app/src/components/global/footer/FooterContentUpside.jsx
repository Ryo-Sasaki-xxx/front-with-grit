import styled from "styled-components";
import { FooterNav } from "./FooterNav";
import { Logo } from "../Logo";

export const FooterContentUpside = () => {
    return (
        <SDiv>
            <Logo src="/with-grit-logo-white.svg" width="9%" link="/" />
            <FooterNav />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 75rem;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: 75rem) {
        width: 60rem;
        padding: 1.2rem 0;
    }
    @media (max-width: 60rem) {
        width: 80%;
        flex-direction: column;
    }
`;
