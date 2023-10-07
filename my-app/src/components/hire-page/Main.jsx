import { styled } from "styled-components";

import { Title } from "../global/Title";
import { MainContent } from "./MainContent";

export const Main = () => {
    return (
        <SMain>
            <SDiv>
                <SDiv3>
                    <Title subtitle="Join us ー" title="メンバー募集" />
                </SDiv3>
            </SDiv>
            <SDiv2>
                <MainContent />
            </SDiv2>
        </SMain>
    );
};

const SMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SDiv3 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 65rem;
    padding: 2rem 0 3rem 0;
    @media (max-width: 75rem) {
        width:52rem;
    }
    @media (max-width: 60rem) {
        padding: 0rem 0 1rem;
        width: 80%;
    }
`;

const SDiv2 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 65rem;
    padding: 2rem 0 3rem 0;
    @media (max-width: 75rem) {
        width:52rem;
    }
    @media (max-width: 60rem) {
        flex-direction: column;
        padding: 0rem 0 1rem;
        width: 80%;
    }
`;

const SDiv = styled.div`
    background-image:url(/background-curve.svg), linear-gradient(90deg, rgba(193, 71, 233, 0.00) 0%, #C147E9 79.69%);
    background-size:100%;
    background-repeat: no-repeat;
    background-position: bottom ;
    display: flex;
    justify-content: center;
    padding: 2rem 0rem 3rem 0rem;
    width: 100%;
    @media (max-width: 60rem) {
        padding: 1rem 0rem 2rem 0rem;
    }
`;