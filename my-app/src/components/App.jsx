import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";
import { Home } from "./modules/Home";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
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
`