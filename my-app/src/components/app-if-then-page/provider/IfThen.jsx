import { createContext, useState } from "react";

export const IfThenContext = createContext({});

export const IfThenProvider = props => {
    const { children } = props;

    const [ifThen, setIfThen] = useState({
        code: null,
        ifThenList: []
    });

    return (
        <IfThenContext.Provider value={{ ifThen, setIfThen }}>
            {children}
        </IfThenContext.Provider>
    );
};