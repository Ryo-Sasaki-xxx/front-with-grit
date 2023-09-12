import styled from "styled-components";
import { Logo } from "../../global/Logo";
import { HeaderNav } from "./HeaderNav";

export const HeaderContent = () => {
    return (
        <SDiv>
            <Logo src="/with-grit-logo-dark.svg" width="5rem" link="/with-grit-app" />
            <HeaderNav />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 95rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
`;