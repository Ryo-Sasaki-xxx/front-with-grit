import { Main } from "./Main";
import { ThemeFlagProvider } from "./provider/ThemeFlag";

export const Feature = () => {
    return (
        <>
            <ThemeFlagProvider>
                <Main />
            </ThemeFlagProvider>
        </>
    );
};