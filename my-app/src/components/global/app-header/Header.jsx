import { styled } from "styled-components";
import { HeaderContent } from "./HeaderContent";
import { HumbergerContent } from "./HumbergerContent";
import { useState } from "react";

export const Header = () => {
    const [isActiveHumberger, setIsActiveHumberger] = useState(false);
    return (
        <SHeader>
            <HeaderContent isActiveHumberger={isActiveHumberger} setIsActiveHumberger={setIsActiveHumberger} />
            <HumbergerContent isActiveHumberger={isActiveHumberger} />
        </SHeader>
    );
};

const SHeader = styled.header`
    position: relative;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    height: 5rem;
    background: #fff;
`;