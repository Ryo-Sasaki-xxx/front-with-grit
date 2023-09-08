import styled from "styled-components";
import { SnsButton } from "../global/SnsButton";

export const FooterContentDownside = () => {
    return (
        <SDiv>
            <SPadding />
            <SP><SSpan>&copy; 2023</SSpan> with GRIT</SP>
            <SnsButton instagram="./instagram-white.svg" x="./x-white.svg" width="9rem" />
        </SDiv>
    )
};

const SDiv = styled.div`
    max-width: 75rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin: 0 auto;
    @media (max-width: 75rem) {
        width: 100 %;
        flex-direction: column
    }
`;

const SP = styled.p`
    color: #fff;
    font-size: 1rem;
`;

const SSpan = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
`;

const SPadding = styled.div`
    width: 12rem;
`;