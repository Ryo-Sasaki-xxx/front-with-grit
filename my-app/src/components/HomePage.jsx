import { Outlet } from "react-router-dom";

import { Header } from "./global/header/Header";
import { Footer } from "./global/footer/Footer";

export const HomePage = () => {
    console.log('home')
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};