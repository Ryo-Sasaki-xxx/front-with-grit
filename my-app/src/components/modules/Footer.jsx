import styled from "styled-components";
import { SnsButton } from "../atoms/SnsButton";
import { Logo } from "../atoms/Logo";
import { FooterContent } from "../atoms/FooterContent";

export const Footer = () => {
    return (
        <SFooter>
            <SDiv>
                <Logo src="./with-grit-logo-white.svg" marginTop={"0px"} />
                <FooterContent />
            </SDiv>
            <SBorder />
            <SDiv>
                <SPadding />
                <SP><SSpan>&copy; 2023</SSpan> with GRIT</SP>
                <SnsButton instagram="./instagram-white.svg" x="./x-white.svg" />
            </SDiv>
        </SFooter>
    )
};

const SFooter = styled.footer`
    top: 0;
    left: 0;
    width: 100%;
    background: #333;
    box-sizing: border-box;
    max-width: 3000px;
    margin: 0 auto;
    padding: 30px 0px 15px;
`;
const SDiv = styled.div`
    display:flex;
    justify-content:space-around;
`;

const SP = styled.p`
    color: #fff;
    margin-top:60px;
    font-size: 1rem;
`;

const SSpan = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
`;

const SPadding = styled.div`
    width: 150px;
`;

const SBorder = styled.div`
    border-top: 1px solid #fff;
    width: 98%;
    margin: 30px auto 0px;
`;