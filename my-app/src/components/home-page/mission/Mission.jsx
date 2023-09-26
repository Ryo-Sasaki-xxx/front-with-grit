import styled from "styled-components";
import { MissionContent } from "./MissionContent";

export const Mission = () => {
    return (
        <SDiv>
            <MissionContent />
        </SDiv>
    )
};

const SDiv = styled.div`
    display: flex;
    justify-content: center;
    background-image:url(/background-curve.svg), linear-gradient(90deg, #C147E9 12.5%, rgba(193, 71, 233, 0.00) 100%);
    background-size:100%;
    background-position: bottom;
    transform: scale(-1,1);
`;
