import styled from "styled-components";
import { MissionMain } from "./MissionMain";
import { MissionImg } from "./MissionImg";

export const MissionContent = () => {
    return (
        <SDiv>
            <MissionImg />
            <MissionMain />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 65rem;
    height: 45rem;
    padding: 2rem 0 7rem 0;
    display: flex;
    transform: scale(-1,1);
`;