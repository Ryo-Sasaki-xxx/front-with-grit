import { createContext, useState } from "react";

export const ActiveGoalContext = createContext({});

export const ActiveGoalProvider = props => {
    const { children } = props;

    const [activeGoal, setActiveGoal] = useState([1, 1]);

    return (
        <ActiveGoalContext.Provider value={{ activeGoal, setActiveGoal }}>
            {children}
        </ActiveGoalContext.Provider>
    );
};