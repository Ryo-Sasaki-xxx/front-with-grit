import styled from "styled-components";
import { Title } from "../../global/Title";
import { Article } from "../../global/Article";
import { SubscriptionForm } from "../../global/subscription/SubscriptionForm";

export const HomeMain = () => {
    return (
        <SDiv>
            <Title subtitle="Home ー"
                title="with GRIT でやり抜く力を手に入れよう" />
            <Article>
                <SP1>三日坊主とはおさらば。</SP1>
                <SP2>目標に向け、継続してやり抜く手助けをします。</SP2>
            </Article>
            <SubscriptionForm formWidth="100%" emailWidth="55%" submitWidth="40%" value="アカウントを作成" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content: space-evenly;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;

const SP1 = styled.p`
    font-size: 1.75rem;
    color: #fff;
    text-align: justify;
    text-justify: inter-ideograph; 
    @media (max-width: 75rem) {
        font-size: 1.4rem;
    }
    @media (max-width: 60rem) {
        font-size: 1.6rem;
    }
    @media (max-width: 45rem) {
        font-size: 1.4rem;
    }
`;

const SP2 = styled.p`
    font-size: 1.75rem;
    color: #fff;
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
    @media (max-width: 75rem) {
        font-size: 1.4rem;
    }
    @media (max-width: 60rem) {
        font-size: 1.6rem;
    }
    @media (max-width: 45rem) {
        font-size: 1.4rem;
    }
`;