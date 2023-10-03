import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import { HomePage } from "./HomePage";
import { HaveSubscriptionPage } from "./HaveSubscriptionPage";

import { Index } from "./home-page/Index";
import { Feature } from "./feature-page/Feature";
import { Mission } from "./mission-page/Mission";
import { Help } from "./help-page/Help";
import { Hire } from "./hire-page/Hire";
import { PrivacyPolicy } from "./privacy-policy-page/PrivacyPolicy";
import { NotFoundPage } from "./NotFoundPage";

import { LoginSigninPage } from "./LoginSigninPage";
import { Login } from "./login-signin-page/Login";
import { Signin } from "./login-signin-page/Signin";

import { AppPage } from "./AppPage";
import { GoalTask } from "./app-goal-and-task/GoalTask";
import { IfThen } from "./app-if-then-page/IfThen";


export const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route path="" element={<HaveSubscriptionPage />}>
                            <Route path="" element={<Index />} />
                            <Route path="feature" element={<Feature />} />
                            <Route path="mission" element={<Mission />} />
                        </Route>
                        <Route path="help" element={<Help />} />
                        <Route path="hire" element={<Hire />} />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    </Route>
                    <Route path="/app" element={<AppPage />}>
                        <Route path="" element={<GoalTask />} />
                        <Route path="if-then" element={<IfThen />} />
                    </Route>
                    <Route path="/log-in" element={<LoginSigninPage />}>
                        <Route path="" element={<Login />} />
                        <Route path="sign-in" element={<Signin />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

const GlobalStyle = createGlobalStyle`
${reset}
html {
    font-size: 100%;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Montserrat Alternates', sans-serif;
    line-height: 1.7;
    color: #333;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
}
`;