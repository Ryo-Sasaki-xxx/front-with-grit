import { styled } from "styled-components";
import { FooterContentUpside } from "./FooterContentUpside";
import { FooterContentDownside } from "./FooterContentDownside";

export const Footer = () => {
    return (
        <SFooter>
            <div>
                <FooterContentUpside />
            </div>
            <SBorder />
            <div>
                <FooterContentDownside />
            </div>
        </SFooter>
    )
};

const SFooter = styled.footer`
    top: 0;
    left: 0;
    width: 100%;
    background: #333;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const SBorder = styled.div`
    border-top: 1px solid #fff;
    width: 98%;
    margin:  0 auto ;
`;