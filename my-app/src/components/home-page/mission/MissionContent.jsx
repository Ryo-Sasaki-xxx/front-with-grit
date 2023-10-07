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
    padding: 2rem 0 5rem 0;
    display: flex;
    transform: scale(-1,1);
    @media (max-width: 75rem) {
        width: 52rem;
        padding: 1.6rem 0 4rem 0;
        height: 36rem;
    }
    @media (max-width: 60rem) {
        flex-direction: column-reverse;
        width: 80%;
        height: auto;
    }
`;