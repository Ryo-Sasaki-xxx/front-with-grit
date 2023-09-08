import { createContext, useState } from "react";

export const ThemeFlagContext = createContext({});

export const ThemeFlagProvider = props => {
    const { children } = props;

    const [activeStep, setActiveStep] = useState(0);

    return (
        <ThemeFlagContext.Provider value={{ activeStep, setActiveStep }}>
            {children}
        </ThemeFlagContext.Provider>
    );
};