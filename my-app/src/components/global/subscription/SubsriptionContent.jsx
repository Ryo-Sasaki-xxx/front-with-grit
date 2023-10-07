import styled from "styled-components";
import { Title } from "../../global/Title";
import { SubscriptionForm } from "./SubscriptionForm";

export const SubscriptionContent = () => {
    return (
        <SDiv>
            <Title subtitle=""
                title="with GRIT を今すぐ始める" />
            <SubscriptionForm formWidth="70%" emailWidth="60%" submitWidth="30%" value="送信" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 65rem;
    height: 22rem;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 75rem) {
        width: 52rem;
        height: 17.6rem;
        padding: 4rem 0;
    }
    @media (max-width: 60rem) {
        flex-direction: column;
        width: 100%;
        height: 14rem;
    }
`;