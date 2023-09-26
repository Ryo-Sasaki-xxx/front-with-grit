import styled from "styled-components";

import { useForm, useFieldArray } from "react-hook-form"

export const Form = (props) => {
    const { updateIsActive, index, isActive, goalAndTask } = props;
    const { goal, goalId, state, tasks } = goalAndTask;
    const { register, getValues, control } = useForm(
        {
            defaultValues: { "goal": goal, "tasks": tasks }
        }
    );
    const inputGoal =
        <SRadius>
            <SGoalInput type="text" {...register("goal")} />
        </SRadius>;

    const { fields, } = useFieldArray({
        control,
        name: "tasks",
    });

    const inputTaks = fields.map((field, index) => {
        console.log(field)
        return (
            <STaskInput type="text" key={field.taskId} {...register(`tasks.${index}.content`)} />
        )
    })

    const goalAndTaskValue = getValues(["goal", "tasks"])

    const onSubmit = (value) => {
    };

    let result



    if (isActive) {
        result = <>
            <SDiv onClick={() => updateIsActive(index)} isActive={true}>
                {inputGoal}
                <SBorder />
                {[...inputTaks]}
                <button>保存</button>
            </SDiv>
        </>
    } else {
        result = <>
            <SDiv onClick={() => updateIsActive(index)}>
                <SRadius><SP>{goal}</SP></SRadius>
                <SBorder />
                <SP2>{tasks[0].content + " / " + tasks[1].content + " ..."}</SP2>
            </SDiv>
        </>
    }

    return result;
};

const SDiv = styled.div`
    width: 100%;
    height: ${props => props.isActive ? "15rem" : "8.5rem"};
    max-height : 15rem;
    display:flex;
    flex-direction: column;
    background: #fff;
    &:hover {
        transition: .4s;
        &:hover {
            transform: translateY(4px);
        }
    }
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem 1rem 1.5rem 1rem;
    margin: 1.5rem 1rem;
    transition: height 1s ease ; 
`;

const SBorder = styled.div`
    border-top: 2px solid #333;
    width: 100%;
`;

const SP = styled.p`
    color: #333;
    font-size: 1.25rem;
    margin-left: 1rem;
`;

const SP2 = styled.p`
    color: rgba(51,51,51,0.5);
    padding: 1rem 0rem;
`;

const SGoalInput = styled.input`
    color: #333;
    font-size: 1.25rem;
    width: 80%;
    margin-left: 1rem;
`;

const SRadius = styled.div`
    display: flex;
    &::before {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background: #333;
        content: "";
        box-sizing: border-box;
    }

`;


const STaskInput = styled.input`
color: #333;
font-size: 1.25rem;
`;