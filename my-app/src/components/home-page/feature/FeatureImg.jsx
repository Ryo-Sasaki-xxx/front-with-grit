import styled from "styled-components";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";

export const FeatureImg = () => {
    const { activeStep } = useContext(ThemeFlagContext);
    const imgs = [
        "/feature-img-goal.svg",
        "/feature-img-task.svg",
        "/feature-img-if-then.svg",
    ]
    return (
        <SDiv>
            <SImg src={imgs[activeStep]} alt="feature-img" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 60rem) {
        width: 100%;
        justify-content: center;
    }
`;

const SImg = styled.img`
    width: 80%;
    filter: drop-shadow(2px 10px 0 rgba(3,3,3,0.2));
    @media (max-width: 75rem) {
        width: 79%;
    }
    @media (max-width: 60rem) {
        width: 80%;
        margin-top: 2rem;
    }
`;