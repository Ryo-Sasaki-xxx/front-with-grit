import styled from "styled-components";

import { GoalStateProvider } from "./provider/GoalState";
import { Operation } from "./Operation";
import { FormContainer } from "./FormContainer";
import { ActiveGoalProvider } from "./provider/ActiveGoal";
import { GoalAndTaskProvider } from "./provider/GoalAndTask";

export const GoalTask = () => {
    return (
        <>
            <GoalAndTaskProvider>
                <ActiveGoalProvider>
                    <GoalStateProvider>
                        <Operation />
                        <SBorder />
                        <FormContainer />
                    </GoalStateProvider>
                </ActiveGoalProvider>
            </GoalAndTaskProvider>

        </>
    );
};

const SBorder = styled.div`
    border-top: 2px solid #fff;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

