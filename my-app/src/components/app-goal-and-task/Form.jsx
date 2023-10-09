import styled from "styled-components";

import { memo } from "react";

import { useForm, useFieldArray, } from "react-hook-form"

import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

export const Form = memo((props) => {
    //propsを受け取り、goal&taskを展開
    const { setActiveGoal, index, isActive, goalAndTask, setGoalAndTask, } = props;
    const { content, id, status, task_set } = goalAndTask;

    //フォームの定義をする
    const { register, getValues, control, } = useForm({
        defaultValues: {
            "content": content,
            "id": id,
            "status": status,
            "task_set": task_set,
        }
    });

    const { fields, remove, append } = useFieldArray({
        control: control,
        name: "task_set",
        keyName: "key",
    });

    const inputGoal =
        <SGoalInput
            type="text"
            {...register("content")}
        />;

    const selectState =
        <SStateSelect {...register("status")}>
            <option value="0">Waiting</option>
            <option value="1">Working</option>
            <option value="2">Completed</option>
        </SStateSelect>;

    const inputTaks = fields.map((field, index) => {
        return (
            <SRadius2>
                <STaskInput type="text" key={field.key} {...register(`task_set.${index}.content`)} />
                <SButton4 type="button" onClick={() => remove(index)} >
                    <SSpan1 />
                    <SSpan2 />
                </SButton4>
            </SRadius2>
        )
    })

    const concatTask = (task_set) => {
        let result;
        if (task_set.length === 0) {
            result = "タスクが追加されていません。";
        } else if (task_set.length === 1) {
            result = task_set[0].content + " ...";
        } else {
            result = task_set[0].content + " / " + task_set[1].content + " ...";
        }
        return result;
    };

    //エントリーポイントの定義をする
    const config = {
        headers: {
            Authorization:
                "JWT " + localStorage.getItem("jwt-access"),
        },
    };

    const deleteGoal = async () => {
        try {
            await axios.delete(`${Requests.goalEndPoint}${id}/`, config);
            setGoalAndTask((prev) => {
                const goalAndTaskCopy = { ...prev };
                goalAndTaskCopy.goalAndTaskList.splice(index, 1);
                return goalAndTaskCopy;
            });
            setActiveGoal((activeGoal) => {
                const activeGoalCopy = [...activeGoal];
                activeGoalCopy.splice(index, 1);
                return activeGoalCopy;
            })
        } catch (e) {
            let response = e.response;
        }
    };

    const updateGoal = (updateGoalData) => {
        let response = axios.patch(
            `${Requests.goalEndPoint}${updateGoalData.id}/`,
            JSON.stringify(updateGoalData.data),
            config
        );
        return response;
    };

    const deleteTask = (deleteTaskData) => {
        let response = axios.delete(
            `${Requests.taskEndPoint}${deleteTaskData.id}/`,
            config
        );
        return response;
    };

    const updateTask = (updateTaskData) => {
        let response = axios.patch(
            `${Requests.taskEndPoint}${updateTaskData.id}/`,
            JSON.stringify(updateTaskData.data),
            config
        );
        return response;
    };

    const createTask = (data) => {
        let response = axios.post(
            Requests.taskEndPoint,
            JSON.stringify(data),
            config
        );
        return response;
    };

    //どのエントリーポイントを叩くのかを判別する関数を定義
    const searchApiList = (beforeGoalAndTask, afterGoalAndTask) => {
        const apiList = {
            "updateGoalData": [],
            "deleteTaskData": [],
            "updateTaskData": [],
            "createTaskData": [],
        };
        console.log(apiList);

        if (beforeGoalAndTask.content !== afterGoalAndTask.content || beforeGoalAndTask.status !== afterGoalAndTask.status) {
            apiList.updateGoalData.push({
                data: {
                    content: afterGoalAndTask.content,
                    status: afterGoalAndTask.status
                },
                id: afterGoalAndTask.id
            })
        }

        const doneId = []
        afterGoalAndTask.task_set.forEach((afterTask) => {
            if (afterTask.id === null) {
                apiList.createTaskData.push({
                    goal: afterGoalAndTask.id,
                    content: afterTask.content,
                })
            } else {
                beforeGoalAndTask.task_set.forEach((beforeTask, index) => {
                    if (afterTask.id === beforeTask.id && afterTask.content !== beforeTask.content) {
                        apiList.updateTaskData.push({
                            data: {
                                content: afterTask.content,
                                goal: afterGoalAndTask.id,
                            },
                            id: afterTask.id,
                            taskIndex: index,
                        })
                        doneId.push(afterTask.id);
                    } else if (afterTask.id === beforeTask.id && afterTask.content === beforeTask.content) {
                        doneId.push(afterTask.id);
                    } else {
                        //pass
                    }
                })
            }
        })
        beforeGoalAndTask.task_set.forEach((beforeTask, index) => {
            if (!(doneId.includes(beforeTask.id))) {
                apiList.deleteTaskData.push({
                    id: beforeTask.id,
                    taskIndex: index
                })
            }
        })

        return apiList;
    };

    //親コンポーネントでるFormContainerの状態を更新する
    const shapeGoalAndTask = (goalAndTask, apiList, responses) => {
        const goalAndTaskCopy = { ...goalAndTask };
        if (apiList.createTaskData.length !== 0) {
            apiList.createTaskData.forEach((createTaskData, createIndex) => {
                goalAndTaskCopy.goalAndTaskList[index].task_set.push(responses[createIndex].data);
            });
        }
        if (apiList.updateGoalData.length !== 0) {
            apiList.updateGoalData.forEach((updateGoalData) => {
                goalAndTaskCopy.goalAndTaskList[index].content = updateGoalData.data.content;
                goalAndTaskCopy.goalAndTaskList[index].status = updateGoalData.data.status;
            });
        }
        if (apiList.deleteTaskData.length !== 0) {
            apiList.deleteTaskData.forEach((deleteTaskData) => {
                goalAndTaskCopy.goalAndTaskList[index].task_set.splice(deleteTaskData.taskIndex, 1);
            });
        }
        if (apiList.updateTaskData.length !== 0) {
            apiList.updateTaskData.forEach((updateTaskData) => {
                goalAndTaskCopy.goalAndTaskList[index].task_set[updateTaskData.taskIndex].content = updateTaskData.data.content;
            });
        }

        return goalAndTaskCopy;
    };

    //エントリーポイントのhandler
    const onClick = async () => {
        const apiList = searchApiList(goalAndTask, getValues());
        try {
            const result = [];

            if (apiList.createTaskData.length !== 0) {
                apiList.createTaskData.forEach((data) => {
                    const response = createTask(data)
                    result.push(response);
                });
            }

            if (apiList.updateGoalData.length !== 0) {
                apiList.updateGoalData.forEach((data) => {
                    result.push(updateGoal(data));
                });
            }

            if (apiList.deleteTaskData.length !== 0) {
                apiList.deleteTaskData.forEach((data) => {
                    result.push(deleteTask(data));
                });
            }

            if (apiList.updateTaskData.length !== 0) {
                apiList.updateTaskData.forEach((data) => {
                    result.push(updateTask(data));
                });
            }
            const responses = await Promise.all(result);
            console.log(responses);
            setGoalAndTask((prev) => {
                const goalAndTaskCopy = { ...prev };
                return shapeGoalAndTask(goalAndTaskCopy, apiList, responses);
            })
            setActiveGoal((activeGoal) => {
                const activeGoalCopy = [...activeGoal];
                activeGoalCopy.fill(false);
                return activeGoalCopy;
            })
        } catch (e) {
            console.log(e);
        }
    }

    let result

    if (isActive) {
        result =
            <SDiv isActive={true}>
                <SButton1
                    onClick={() => onClick()}
                >
                    Save
                </SButton1>
                <SButton2
                    onClick={() => deleteGoal()}
                >
                    Delete
                </SButton2>
                <SRadius status={status}>
                    {inputGoal}
                </SRadius>
                <SBorder isActive={true} />
                <SDetail>
                    <SSummary>状態</SSummary>
                    <SRadius2>
                        {selectState}
                    </SRadius2>
                </SDetail>
                <SDetail>
                    <SSummary>タスク</SSummary>
                    {[...inputTaks]}
                    <SButton3
                        onClick={() => append({
                            content: "タスク",
                            goal: id,
                            id: null,
                            if_then_content: null,
                            if_then_id: null,
                        })}
                    >
                        Add
                    </SButton3>
                </SDetail>
            </SDiv>
    } else {
        result =
            <SDiv
                onClick={() => setActiveGoal((activeGoal) => {
                    const activeGoalCopy = [...activeGoal];
                    activeGoalCopy.fill(false);
                    activeGoalCopy[index] = true;
                    return activeGoalCopy;
                })}
            >
                <SRadius status={status}><SP>{content}</SP></SRadius>
                <SBorder />
                <SP2>{concatTask(task_set)}</SP2>
            </SDiv>
    }

    return result;
});
const SDiv = styled.div`
    width: 100%;
    ${props => props.isActive && "border: 3px solid #333;"}
    display:flex;
    flex-direction: column;
    background: #fff;
    transition: .4s;
    &:hover {
        transform: translateY(4px);
    }
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem 1rem 1.5rem 1rem;
    margin: 1.5rem 1rem;
    transition: height 1s ease ;
    position: relative; 
`;

const SBorder = styled.div`
    border-top: ${props => props.isActive ? "3" : "2"}px solid #333;
    width: 100%;
    margin: 1rem 0rem;
`;

const SP = styled.p`
    color: #333;
    font-size: 1.25rem;
    margin-left: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;

const SP2 = styled.p`
    color: rgba(51,51,51,0.5);
    margin: 1rem 0rem 1rem 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;

const SGoalInput = styled.input`
    color: #333;
    font-size: 1.25rem;
    margin-left: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    flex-grow: 1;
    &:hover {
        opacity: 0.5;
    }
    flex-glow: 1;
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;

const SRadius = styled.div`
    display: flex;
    &::before {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background: ${props => {
        let result;
        if (Number(props.status) === 0) {
            result = "#989898";
        } else if (Number(props.status) === 1) {
            result = "#333";
        } else {
            result = "#C147E9";
        }
        return result;
    }
    };
        content: "";
        box-sizing: border-box;
        flex-grow: 0;
        @media (max-width: 73rem) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;

const SRadius2 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    &::before {
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        background: rgba(51, 51, 51, 0.5);
        content: "";
        box-sizing: border-box;
        margin: 1rem;
        flex-grow: 0;
        @media (max-width: 73rem) {
            margin: 0.2rem
        }
    }
`;

const SDetail = styled.details`
    width: 90%;
    font-size: 1.25rem;
    margin: 0 auto 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;

const SSummary = styled.summary`
    font-family: 'Noto Sans JP', sans-serif;
    margin-bottom: 1rem;
`;

const SStateSelect = styled.select`
    color: #333;
    font-size: 1.25rem;
    font-family: 'Noto Sans JP', sans-serif;
    &:hover {
        opacity: 0.5;
    }
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;


const STaskInput = styled.input`
    color: #333;
    font-size: 1.25rem;
    font-family: 'Noto Sans JP', sans-serif;
    &:hover {
        opacity: 0.5;
    }
    flex-grow: 1;
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;

const SButton1 = styled.button`
    border-radius: 12px;
    background: #333;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    padding: 0.2rem;
    width: 4rem;
    margin-left: 0.5rem;
    &:hover {
        opacity: 0.5;
    }
    position: absolute;
    top: -2rem;
    right: 4.5rem;
`;

const SButton2 = styled.button`
    border-radius: 12px;
    background: #333;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    padding: 0.2rem;
    width: 4rem;
    margin-left: 0.5rem;
    &:hover {
        opacity: 0.5;
    }
    position: absolute;
    top: -2rem;
    right: 0;
`;

const SButton3 = styled.button`
    border-radius: 10px;
    background: #333;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    padding: 0.2rem;
    width: 4rem;
    margin: 0 auto;
    &:hover {
        opacity: 0.5;
    }
`;

const SButton4 = styled.button`
    border-radius: 50%;
    background: #333;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    padding: 0.2rem;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    &:hover {
        opacity: 0.5;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media (max-width: 73rem) {
        width: 1rem;
        height: 1rem;
    }
`;

const SSpan1 = styled.span`
    content: '';
    width: 80%;
    transform: rotate(48deg);
    background: #fff;
    border-radius: 3px;
    height: 2px;
    position: relative;
    top:  1rem;
    @media (max-width: 73rem) {
        top: 0.5rem
    }
`;

const SSpan2 = styled.span`
    content: '';
    width: 80%;
    transform: rotate(-48deg);
    background: #fff;
    border-radius: 3px;
    height: 2px;
    position: relative;
    top: -0.9rem;
    @media (max-width: 73rem) {
        top: -0.4rem
    }
`;