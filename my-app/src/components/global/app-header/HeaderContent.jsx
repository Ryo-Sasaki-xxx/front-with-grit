import styled from "styled-components";
import { Logo } from "../Logo";
import { HeaderNav } from "./HeaderNav";
import { SubMenue } from "./SubMenue";


export const HeaderContent = () => {


    return (
        <SDiv>
            <Logo src="/with-grit-logo-dark.svg" width="" link="/app" />
            <HeaderNav />
            <SubMenue />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 95%;
    padding: 0.5rem 0;
    display: flex;
    justify-content:space-between;
`;
