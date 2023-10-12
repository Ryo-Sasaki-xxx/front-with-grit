import { styled } from "styled-components";
import { HeaderContent } from "./HeaderContent";
import { HumbergerContent } from "./HumbergerContent";

export const Header = () => {

    return (
        <SStickyWrapper>
            <SHeader>
                <HeaderContent />
            </SHeader>
            <HumbergerContent />
        </SStickyWrapper>
    )
};

const SHeader = styled.header`
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    @media (max-width: 60rem){
        height: 5rem;
    }
`;

const SStickyWrapper = styled.div`
    position: sticky;
    z-index: 99;
    top: 0;
    left: 0;
`;