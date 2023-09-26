import styled from "styled-components";

import { useState } from "react";

import { Form } from "./Form";

export const FormContainer = (props) => {
    const goalAndTaskList = [
        {
            goal: "早起きする1",
            goalId: 1,
            state: 0,
            tasks: [{ content: "寝る前に携帯を隠す1", taskId: 1 }, { content: "寝る前に携帯を隠す2", taskId: 2 }]
        },
        {
            goal: "早起きする2",
            goalId: 2,
            state: 0,
            tasks: [{ content: "寝る前に携帯を隠す3", taskId: 3 }, { content: "寝る前に携帯を隠す4", taskId: 4 }]
        },
        {
            goal: "早起きする3",
            goalId: 3,
            state: 0,
            tasks: [{ content: "寝る前に携帯を隠す5", taskId: 5 }, { content: "寝る前に携帯を隠す6", taskId: 6 }]
        },
        {
            goal: "早起きする4",
            goalId: 3,
            state: 0,
            tasks: [{ content: "寝る前に携帯を隠7", taskId: 7 }, { content: "寝る前に携帯を隠す8", taskId: 8 }]
        },
    ];


    const [isActive, setIsActive] = useState(Array(goalAndTaskList.length).fill(false));
    const updateIsActive = (index) => {
        const newState = Array(goalAndTaskList.length).fill(false);
        newState[index] = true;
        setIsActive(newState);
    };

    const formList = [];

    goalAndTaskList.forEach((goalAndTask, index) => {
        formList.push(
            <Form updateIsActive={updateIsActive} key={index} index={index} isActive={isActive[index]} goalAndTask={goalAndTask} />
        );
    })

    return (
        <>
            <SDiv>
                <SDiv2>
                    {[...formList]}
                </SDiv2>
            </SDiv>
        </>
    );
};

const SDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    background: rgba(193, 71, 233, 0.42);
`;

const SDiv2 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    align-items: center;
`;


