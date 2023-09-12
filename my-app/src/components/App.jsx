import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import { HomePage } from "./HomePage";
import { HaveSubscriptionPage } from "./HaveSubscriptionPage";

import { Index } from "./index-page/Index";
import { Feature } from "./feature-page/Feature";
import { Mission } from "./mission-page/Mission";
import { Help } from "./help-page/Help";
import { Hire } from "./hire-page/Hire";
import { PrivacyPolicy } from "./privacy-policy-page/PrivacyPolicy";
import { NotFoundPage } from "./NotFoundPage";


export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/with-grit" element={<HomePage />}>
                        <Route path="subscription" element={<HaveSubscriptionPage />}>
                            <Route path="" element={<Index />} />
                            <Route path="feature" element={<Feature />} />
                            <Route path="mission" element={<Mission />} />
                        </Route>
                        <Route path="help" element={<Help />} />
                        <Route path="hire" element={<Hire />} />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>

            </Router>
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