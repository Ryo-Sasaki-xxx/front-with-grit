import { Outlet } from "react-router-dom";

import styled from "styled-components";

import { LoginSigninFooter } from "./login-signin-page/LoginSigninFooter";


export const LoginSigninPage = () => {
    console.log("login-signin")
    return (
        <>
            <SDiv>
                <SMain>
                    <Outlet />
                    <SImg src="/with-grit-logo-dark.svg" alt="with GRIT Logo" />
                </SMain>
                <LoginSigninFooter />
            </SDiv>
        </>
    );
};

const SDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(270deg, rgba(193, 71, 233, 0.00) 0%, rgba(193, 71, 233, 0.69) 100%);
`;

const SMain = styled.main`
    margin-top: 7rem;
    display: flex;
    justify-content: space-between;
    width:80rem;
`;

const SImg = styled.img`
    width: 50%;
    vertical-align: middle;
    filter: drop-shadow(2px 10px 0 rgba(3,3,3,0.2));
`;