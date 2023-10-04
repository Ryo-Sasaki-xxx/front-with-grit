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
    width: 8rem;
    height: 8rem;
    padding-top: ${props => props.padding ? props.padding : "2.7rem"};
    font-size: 1.5rem;
    font-weight: bold;
    background: #fff;
    color: ${props => props.$active ? "#C147E9" : "#333"};
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 0 rgba(3,3,3,0.5);
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
    
`;

const SDiv = styled.div`
    height: 100%;
    width:50%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding-top: 1rem;
`;

