import { createContext, useState } from "react";

export const IsActiveHumbergerContext = createContext({});

export const IsActiveHumbergerProvider = props => {
    const { children } = props;

    const [isActiveHumberger, setIsActiveHumberger] = useState(false);

    return (
        <IsActiveHumbergerContext.Provider value={{ isActiveHumberger, setIsActiveHumberger }}>
            {children}
        </IsActiveHumbergerContext.Provider>
    );
};