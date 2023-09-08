import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Home } from "./home/Home";
import { Subscription } from "./subscription/Subscription";
import { Mission } from "./mission/Mission";
import { Feature } from "./feature/Feature";
import { ThemeFlagProvider } from "./feature/provider/ThemeFlag";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <Home />
                <ThemeFlagProvider>
                    <Feature />
                </ThemeFlagProvider>
                <Mission />
            </main>
            <Subscription />
            <Footer />
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