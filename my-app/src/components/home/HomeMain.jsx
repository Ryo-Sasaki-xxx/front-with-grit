import styled from "styled-components";
import { Title } from "../global/Title";
import { Article } from "../global/Article";
import { SubscriptionForm } from "../global/SubscriptionForm";

export const HomeMain = () => {
    return (
        <SDiv>
            <Title subtitle="Home ー"
                title="with GRIT でやり抜く力を手に入れよう" />
            <Article>
                <p>三日坊主とはおさらば。<br />目標に向け、継続してやり抜く手助けをします。</p>
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
`;

