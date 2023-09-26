import { createContext, useState } from "react";

export const GoalStateContext = createContext({});

export const GoalStateProvider = props => {
    const { children } = props;

    const [activeGoalState, setActiveGoalState] = useState([false, false, false]);

    return (
        <GoalStateContext.Provider value={{ activeGoalState, setActiveGoalState }}>
            {children}
        </GoalStateContext.Provider>
    );
};