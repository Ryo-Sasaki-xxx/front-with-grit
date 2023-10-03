import styled from "styled-components";

import { useState } from "react";
import { Logout } from "./Logout";

export const SubMenue = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(0);

    const onClickSubmenu = (active) => {
        console.log(activeSubmenu)
        if (activeSubmenu === active) {
            setActiveSubmenu(0);
        } else {
            setActiveSubmenu(active);
        }
    };

    return (
        <>
            <SNav>
                <SUl>
                    <Sli>
                        <SButton type="button" onClick={() => onClickSubmenu(1)}>
                            <SImg src={"/info.svg"} />
                        </SButton>

                    </Sli>
                    <Sli>
                        <SButton type="button" onClick={() => onClickSubmenu(2)}>
                            <SImg src={"/account.svg"} />
                        </SButton>
                    </Sli>
                </SUl>
            </SNav>
            <SDivInfo activeSubmenu={activeSubmenu}>

            </SDivInfo>
            <SDivProf activeSubmenu={activeSubmenu}>
                <Logout />
            </SDivProf>
        </>
    )
};

const SNav = styled.nav`
    display:flex;
    align-items: center;
`;

const SUl = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    height: 100%;
`;

const Sli = styled.li`
    margin: 0 0.5rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const SButton = styled.button`
    display:block;
    margin: auto;
    
`;

const SImg = styled.img`
    width: 70%;
    height: 70%;
    vertical-align: middle;
`;

const SDivInfo = styled.div`
    display:${props => props.activeSubmenu === 1 ? null : "none"};
    width: 1rem;
    height: 1rem;
    background: red;
    position: fixed;
    top: 5.5rem;
    right: 0rem;
    z-index: 999;
`;

const SDivProf = styled.div`
    display:${props => props.activeSubmenu === 2 ? null : "none"};
    position: fixed;
    top: 5.5rem;
    right: 0rem;
    z-index: 999;
`;

