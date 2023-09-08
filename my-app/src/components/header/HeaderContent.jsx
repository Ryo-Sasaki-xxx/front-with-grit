import styled from "styled-components";
import { Logo } from "../global/Logo";
import { HeaderNav } from "./HeaderNav";
import { SnsButton } from "../global/SnsButton";
import { SignButton } from "../global/SignButton";

export const HeaderContent = () => {
    return (
        <SDiv>
            <Logo src="./with-grit-logo-dark.svg" />
            <HeaderNav />
            <SnsButton instagram="./instagram-dark.svg" x="./x-dark.svg" width="12rem" />
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