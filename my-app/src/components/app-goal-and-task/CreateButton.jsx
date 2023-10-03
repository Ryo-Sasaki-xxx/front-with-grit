import styled from "styled-components";
import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";
import { GoalAndTaskContext } from "./provider/GoalAndTask";
import { ActiveGoalContext } from "./provider/ActiveGoal";
import { useContext } from "react";

export const CreateButton = () => {
    const config = {
        headers: {
            Authorization:
                "JWT " + localStorage.getItem("jwt-access"),
        },
    };

    const createGoal = async () => {
        try {
            let response = await axios.post(Requests.goalEndPoint, { "content": "ゴール" }, config);

            let data = {
                content: response.data.content,
                id: response.data.id,
                status: response.data.status,
                task_set: []
            };
            setGoalAndTask((goalAndTask) => {
                const goalAndTaskCopy = { ...goalAndTask };
                goalAndTaskCopy.goalAndTaskList.push(data);
                return goalAndTaskCopy;
            });

            setActiveGoal((activeGoal) => {
                const activeGoalCopy = [...activeGoal];
                activeGoalCopy.push(false);
                return activeGoalCopy;
            });
        } catch (e) {
            // let response = e.response;
            console.log(e);
        }
    };

    const { setGoalAndTask } = useContext(GoalAndTaskContext);
    const { setActiveGoal } = useContext(ActiveGoalContext);
    const onClick = () => {
        createGoal(JSON.stringify({ "content": "ゴール" }));
    }
    return (
        <SButton type="submit" onClick={onClick}>Create New</SButton>
    );
};

const SButton = styled.button`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 1.25rem;
    padding: 0.5rem;
`;