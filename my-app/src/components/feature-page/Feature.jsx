import { Main } from "./Main";
import { ThemeFlagProvider } from "./provider/ThemeFlag";

export const Feature = () => {
    console.log("rendered Feature");
    return (
        <>
            <ThemeFlagProvider>
                <Main />
            </ThemeFlagProvider>
        </>
    );
};