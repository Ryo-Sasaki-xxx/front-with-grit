import { Logo } from "../atoms/Logo";
import { HeaderNav } from "../atoms/HeaderNav";
import { SnsButton } from "../atoms/SnsButton";
import { SignButton } from "../atoms/SignButton";
import { styled } from "styled-components";

export const Header = () => {
    return (
        <SHeader>
            <Logo src="./with-grit-logo-dark.svg" marginTop={"15px"} />
            <HeaderNav />
            <SnsButton instagram="./instagram-dark.svg" x="./x-dark.svg" />
            <SignButton />
        </SHeader>
    )
};

const SHeader = styled.header`
    position: sticky;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    max-width: 3000px;
    margin: 0 auto;
    padding: 0 4%;
    display: flex;
    justify-content: space-around;
}
`;