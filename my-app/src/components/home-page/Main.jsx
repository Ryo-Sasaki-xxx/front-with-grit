import { Home } from "./home/Home";
import { Mission } from "./mission/Mission";
import { Feature } from "./feature/Feature";
import { ThemeFlagProvider } from "./feature/provider/ThemeFlag";

export const Main = () => {
    return (
        <main>
            <Home />
            <ThemeFlagProvider>
                <Feature />
            </ThemeFlagProvider>
            <Mission />
        </main>
    );
};