import { Outlet } from "react-router-dom";

import { Subscription } from "./global/subscription/Subscription";

export const HaveSubscriptionPage = () => {
    return (
        <>
            <Outlet />
            <Subscription />
        </>
    );
};