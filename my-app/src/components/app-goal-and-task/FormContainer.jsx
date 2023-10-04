import styled from "styled-components";
import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

import { GoalAndTaskContext } from "./provider/GoalAndTask";
import { GoalStateContext } from "./provider/GoalState";
import { ActiveGoalContext } from "./provider/ActiveGoal";
import { useContext } from "react";


export const FormContainer = (props) => {
    const navigate = useNavigate();
    if (localStorage.getItem("jwt-access") === null) {
        navigate("/log-in")
    }
    const config = {
        headers: {
            Authorization:
                "JWT " + localStorage.getItem("jwt-access"),
        },
    };
    const { goalAndTask, setGoalAndTask } = useContext(GoalAndTaskContext);

    const getGoalAndTask = async () => {
        try {
            let response = await axios.get(Requests.getGoalAndTask, config);
            setGoalAndTask({
                statusCode: response.status,
                goalAndTaskList: response.data,
            });
            setActiveGoal(Array(response.data.length).fill(false))
        } catch (e) {
            let response = e.response;
            setGoalAndTask({
                statusCode: response.status,
                goalAndTaskList: [],
            });
        }
    };
    useEffect(() => {
        getGoalAndTask();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (goalAndTask.statusCode == 401) {
            navigate("/log-in");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [goalAndTask]);

    const { activeGoal, setActiveGoal } = useContext(ActiveGoalContext);

    const formList = [];
    const { activeGoalState } = useContext(GoalStateContext);
    if (goalAndTask.goalAndTaskList.length !== 0) {
        goalAndTask.goalAndTaskList.forEach((goalAndTask, index) => {
            if (activeGoalState[Number(goalAndTask.status)]) {
                formList.push(
                    <Form setActiveGoal={setActiveGoal} key={JSON.stringify(goalAndTask)} index={index} isActive={activeGoal[index]} goalAndTask={goalAndTask} setGoalAndTask={setGoalAndTask} />
                );
            }
        })
    }
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
    min-height: 100vh;
    background: rgba(193, 71, 233, 0.42);
`;

const SDiv2 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    align-items: center;
`;


