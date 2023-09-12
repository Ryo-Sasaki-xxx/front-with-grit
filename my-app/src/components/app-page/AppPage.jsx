import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";

export const AppPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};