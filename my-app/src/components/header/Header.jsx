import { styled } from "styled-components";
import { HeaderContent } from "./HeaderContent";

export const Header = () => {
    return (
        <SHeader>
            <HeaderContent />
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
    margin: 0;
    display: flex;
    justify-content: center;
`;