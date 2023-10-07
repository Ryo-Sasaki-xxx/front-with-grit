import { MainWrapper } from "./MainWrapper";
import { ThemeFlagProvider } from "../home-page/feature/provider/ThemeFlag";

import { styled } from "styled-components";

export const Main = () => {
    return (
        <main>
            <ThemeFlagProvider>
                <SDiv>
                    <MainWrapper />
                </SDiv>
            </ThemeFlagProvider>
        </main>
    );
};

const SDiv = styled.div`
    display: flex;
    justify-content: center;
    background: url(/feature-background-curve.svg), linear-gradient(180deg, rgba(193, 71, 233, 0.00) 5.21%, #C147E9 100%);
    background-size:100%;
    background-repeat: no-repeat;
    background-position: bottom;
`;