import { createContext, useState } from "react";

export const ActiveIfThenContext = createContext({});

export const ActiveIfThenProvider = props => {
    const { children } = props;

    const [activeIfThen, setActiveIfThen] = useState([1, 1]);

    return (
        <ActiveIfThenContext.Provider value={{ activeIfThen, setActiveIfThen }}>
            {children}
        </ActiveIfThenContext.Provider>
    );
};