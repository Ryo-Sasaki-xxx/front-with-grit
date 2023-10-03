import styled from "styled-components";
import { useContext } from "react";

import { CheckBox } from "./CheckBox";
import { GoalStateContext } from "./provider/GoalState";
import { CreateButton } from "./CreateButton";

export const Operation = () => {
    const { activeGoalState, setActiveGoalState } = useContext(GoalStateContext);
    console.log(activeGoalState)
    return (
        <>
            <SDiv>
                <SDiv2>
                    <SH2 >Goal & Task</SH2>
                    <CheckBox
                        activeGoalState={activeGoalState[1]}
                        background={"#333"}
                        onClick={() => setActiveGoalState((activeGoalState => {
                            const activeGoalStateCopy = [...activeGoalState];
                            activeGoalStateCopy[1] = !activeGoalStateCopy[1];
                            return activeGoalStateCopy;
                        }))}
                        content={"working"}
                    />
                    <CheckBox
                        activeGoalState={activeGoalState[2]}
                        background={"#C147E9"}
                        onClick={() => setActiveGoalState((activeGoalState => {
                            const activeGoalStateCopy = [...activeGoalState];
                            activeGoalStateCopy[2] = !activeGoalStateCopy[2];
                            return activeGoalStateCopy;
                        }))}
                        content={"completed"}
                    />
                    <CheckBox
                        activeGoalState={activeGoalState[0]}
                        background={"#989898"}
                        onClick={() => setActiveGoalState((activeGoalState => {
                            const activeGoalStateCopy = [...activeGoalState];
                            activeGoalStateCopy[0] = !activeGoalStateCopy[0];
                            return activeGoalStateCopy;
                        }))}
                        content={"waiting"}
                    />
                    <CreateButton />
                </SDiv2>
            </SDiv>
        </>
    );
};

const SDiv = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    height: 5rem;
    background: rgba(193, 71, 233, 0.42);
`;

const SH2 = styled.h2`
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
`;

const SDiv2 = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    align-items: center;
`;
