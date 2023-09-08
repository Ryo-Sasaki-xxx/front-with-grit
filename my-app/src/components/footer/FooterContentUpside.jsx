import styled from "styled-components";
import { FooterNav } from "./FooterNav";
import { Logo } from "../global/Logo";

export const FooterContentUpside = () => {
    return (
        <SDiv>
            <Logo src="./with-grit-logo-white.svg" />
            <FooterNav />
        </SDiv>
    )
};

const SDiv = styled.div`
    max-width: 75rem;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    
`;
