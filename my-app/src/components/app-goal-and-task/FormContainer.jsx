import styled from "styled-components";

import { useContext, useEffect } from "react";

import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { useNavigate } from "react-router-dom";

import { GoalAndTaskContext } from "./provider/GoalAndTask";
import { GoalStateContext } from "./provider/GoalState";
import { ActiveGoalContext } from "./provider/ActiveGoal";

import { Form } from "./Form";

export const FormContainer = () => {
    //goal&taskの状態管理する
    const { goalAndTask, setGoalAndTask } = useContext(GoalAndTaskContext);

    //ログインページへのリダイレクトをする① 未ログイン状態の時
    const navigate = useNavigate();
    if (localStorage.getItem("jwt-access") === null) {
        navigate("/log-in")
    }

    //ログインページへのリダイレクトをする② トークンの期限切れの場合
    useEffect(() => {
        if (goalAndTask.statusCode == 401) {
            navigate("/log-in");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [goalAndTask]);

    //goal&taskをgetするエントリーポイントを定義、実行
    const config = {
        headers: {
            Authorization:
                "JWT " + localStorage.getItem("jwt-access"),
        },
    };

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

    //どのゴールが選択されているのかの状態管理を定義する
    const { activeGoal, setActiveGoal } = useContext(ActiveGoalContext);

    //ゴールのフィルタリングの状態管理を定義する
    const { activeGoalState } = useContext(GoalStateContext);

    //Formコンポーネントを生成
    const formList = [];
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


