import styled from "styled-components";

import { MainContent } from "./MainContent";
import { Title } from "../global/Title";

export const MainWrapper = () => {
    return (
        <SDiv>
            <Title subtitle="Mission ー"
                title="習慣化を賢くカンタンに。" />
            <MainContent />
        </SDiv>
    );
};

const SDiv = styled.div`
    width: 65rem;
    padding: 6rem 0 7rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 75rem) {
        width: 52rem;
        padding: 4rem 0 5rem 0;
    }
    @media (max-width: 60rem) {
        width: 80%;
        padding: 2rem 0 3rem 0;
    }
`;