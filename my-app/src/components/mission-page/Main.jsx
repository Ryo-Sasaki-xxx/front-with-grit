import { styled } from "styled-components";

import { MainWrapper } from "./MainWrapper";

export const Main = () => {
    return (
        <main>
            <SDiv>
                <MainWrapper />
            </SDiv>
        </main>
    );
};

const SDiv = styled.div`
    display: flex;
    justify-content: center;
    background: url(/feature-background-curve.svg), linear-gradient(180deg, rgba(193, 71, 233, 0.00) 0%, rgba(193, 71, 233, 0.60) 33.33%, #C147E9 100%);
    background-size:100%;
    background-repeat: no-repeat;
    background-position: bottom;
`;