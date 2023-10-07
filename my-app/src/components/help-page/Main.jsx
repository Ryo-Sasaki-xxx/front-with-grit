import { styled } from "styled-components";

import { Title } from "../global/Title";
import { MainContent } from "./MainContent";

export const Main = () => {
    return (
        <SMain>
            <SDiv>
                <SDiv2>
                    <Title subtitle="Help ー" title="ヘルプセンター" />
                </SDiv2>
            </SDiv>
            <SDiv3>
                <SDiv2>
                    <MainContent />
                </SDiv2>
            </SDiv3>
        </SMain>
    );
};

const SMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SDiv3 = styled.div`
    padding: 3rem 0 4rem 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background: linear-gradient(270deg, #C147E9 0%, rgba(193, 71, 233, 0.00) 100%);
`;

const SDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 65rem;
    padding: 2rem 0 3rem 0;
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
`;