import { createContext, useState } from "react";

export const GoalAndTaskContext = createContext({});

export const GoalAndTaskProvider = props => {
    const { children } = props;

    const [goalAndTask, setGoalAndTask] = useState({
        code: null,
        goalAndTaskList: []
    });

    return (
        <GoalAndTaskContext.Provider value={{ goalAndTask, setGoalAndTask }}>
            {children}
        </GoalAndTaskContext.Provider>
    );
};