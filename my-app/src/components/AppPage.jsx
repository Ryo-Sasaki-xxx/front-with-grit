import { Outlet } from "react-router-dom";
// import styled from "styled-components";

import { Header } from "./global/app-header/Header";


export const AppPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
