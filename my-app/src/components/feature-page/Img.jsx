import styled from "styled-components";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";

export const Img = () => {
    const { activeStep } = useContext(ThemeFlagContext);
    const imgs = [
        "/feature-img-goal.svg",
        "/feature-img-task.svg",
        "/feature-img-if-then.svg",
    ]
    return (
        <SDiv>
            <SImg src={imgs[activeStep]} alt="feature-imgs" />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    filter: drop-shadow(2px 10px 0 rgba(3,3,3,0.2));
    @media (max-width: 60rem) {
        width: 80%;
        padding-top: 2rem;
    }
`;

const SImg = styled.img`
    width: 80%;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;