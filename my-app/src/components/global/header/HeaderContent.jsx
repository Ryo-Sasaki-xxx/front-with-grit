import styled from "styled-components";
import { Logo } from "../Logo";
import { HeaderNav } from "./HeaderNav";
import { SnsButton } from "../SnsButton";
import { SignButton } from "../SignButton";

export const HeaderContent = () => {
    return (
        <SDiv>
            <Logo src="/with-grit-logo-dark.svg" width="7rem" link="/" />
            <HeaderNav />
            <SnsButton instagram="/instagram-dark.svg" x="/x-dark.svg" width="12rem" />
            <SignButton />
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 75rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
`;