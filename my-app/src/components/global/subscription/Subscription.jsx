import styled from "styled-components";
import { SubscriptionContent } from "./SubsriptionContent";

export const Subscription = () => {
    console.log("rendered Subscription");
    return (
        <SDiv>
            <SubscriptionContent />
        </SDiv>
    );
};

const SDiv = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(180deg, #C147E9 0%, rgba(193, 71, 233, 0.00) 100%), url(/subscription-back.svg);
    background-size: cover;
    background-position: top center;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
`;
