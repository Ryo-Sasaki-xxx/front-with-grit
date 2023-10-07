import styled from "styled-components";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";

export const FeatureButton = () => {
    const { activeStep, setActiveStep } = useContext(ThemeFlagContext);

    return (
        <SDiv>
            <SA onClick={() => setActiveStep(0)} $active={activeStep === 0 ? true : false} ><p>Goal</p></SA>
            <SA onClick={() => setActiveStep(1)} $active={activeStep === 1 ? true : false} ><p>Task</p></SA>
            <SA onClick={() => setActiveStep(2)} $active={activeStep === 2 ? true : false} ><p>if then</p></SA>
        </SDiv>
    );
};

const SA = styled.a`
    display: block;
    width: 7rem;
    height: 7rem;
    margin-left: 2rem;
    padding-top:  2rem;
    font-size: 1.5rem;
    font-weight: bold;
    background: #fff;
    color: ${props => props.$active ? "#C147E9" : "#333"};
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 0 rgba(3,3,3,0.5);
    transition: .4s;
    @media (hover: hover) {
        transition: .4s;
        &:hover {
            transform: translateY(4px);
            box-shadow: 0 0 0 rgba(3,3,3,0.5);
        }
    }
    @media (hover: none) {
        transition: .2s;
        &:active {
            transform: translateY(4px);
            box-shadow: 0 0 0 rgba(3,3,3,0.5);
        }
    }
    @media (max-width: 75rem) {
        height: 6rem;
        padding-top: 1.7rem;
        margin-top: 1rem;
    }
    @media (max-width: 60rem) {
        margin-left: 0;
        width: 30%;
    }
    @media (max-width: 45rem) {
        font-size: 1.2rem;
        height: 5rem;
        padding-top: 1.5rem;
    }
`;

const SDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-top: 1rem;
    padding-left: 2rem;
    @media (max-width: 60rem) {
        width: 80%;
        padding-left: 0;
        padding-top: 0;
    }
`;