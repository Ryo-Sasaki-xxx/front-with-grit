import styled from "styled-components";

import { useForm, useFieldArray, } from "react-hook-form"

import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { memo, useEffect } from "react";


export const Form = memo((props) => {

    const { setActiveIfThen, index, isActive, ifThen, setIfThen, } = props;
    const { if_then_id, if_then_content, id, content } = ifThen;
    console.log(ifThen);
    console.log(if_then_id, if_then_content, id, content)
    const { register, getValues, setValue, reset } = useForm({
        defaultValues: {
            "ifThenId": if_then_id,
            "ifThenContent": if_then_content,
            "taskId": id,
        },
    });
    useEffect(() => {
        if (if_then_content === null) {
            setValue("ifThenContent", "if を入力してください。");
        }
    }, [if_then_content])

    console.log(index, "index");
    console.log(ifThen);
    console.log(getValues())

    const inputIfThen =
        <SIfThenInput
            type="text"
            {...register("ifThenContent")}
        />;

    const config = {
        headers: {
            Authorization:
                "JWT " + localStorage.getItem("jwt-access"),
        },
    };

    const updateIfThen = (updateIfThenData) => {
        let response = axios.patch(
            `${Requests.ifThenEndPoint}${updateIfThenData.id}/`,
            JSON.stringify(updateIfThenData.data),
            config
        );
        return response;
    };

    const createIfThen = (data) => {
        console.log(data);
        let response = axios.post(
            Requests.ifThenEndPoint,
            JSON.stringify(data),
            config
        );
        return response;
    };

    const searchApiList = (beforeIfThen, afterIfThen) => {
        const apiList = {
            "updateIfThenData": [],
            "createIfThenData": [],
        };
        console.log(apiList);

        if (beforeIfThen.if_then_content !== afterIfThen.ifThenContent && afterIfThen.ifThenId !== null) {
            apiList.updateIfThenData.push({
                data: {
                    content: afterIfThen.ifThenContent,
                    task: afterIfThen.taskId,
                },
                id: afterIfThen.ifThenId
            })
        } else if (beforeIfThen.if_then_content !== afterIfThen.ifThenContent && afterIfThen.ifThenId === null) {
            apiList.createIfThenData.push({
                content: afterIfThen.ifThenContent,
                task: afterIfThen.taskId,
            })
        } else {
            //pass
        }

        return apiList;
    };

    const shapeIfThen = (ifThen, apiList, responses) => {
        ifThen.ifThenList[index] = {
            if_then_id: responses[0].data.id,
            if_then_content: responses[0].data.content,
            id: responses[0].data.task,
            content: content,
        }
        return ifThen;
    };

    const onClick = async () => {
        const apiList = searchApiList(ifThen, getValues());
        console.log(apiList)
        try {
            const result = [];

            if (apiList.createIfThenData.length !== 0) {
                apiList.createIfThenData.forEach((data) => {
                    const response = createIfThen(data)
                    result.push(response);
                });
            }

            if (apiList.updateIfThenData.length !== 0) {
                apiList.updateIfThenData.forEach((data) => {
                    result.push(updateIfThen(data));
                });
            }
            const responses = await Promise.all(result);
            console.log(responses);
            setIfThen((prev) => {
                const ifThenCopy = { ...prev };
                return shapeIfThen(ifThenCopy, apiList, responses);
            })
            console.log("testetestest");
            setActiveIfThen((activeIfThen) => {
                console.log("hihihi")
                const activeIfThenCopy = [...activeIfThen];
                activeIfThenCopy.fill(false);
                return activeIfThenCopy;
            })
        } catch (e) {
            console.log(e);
        }


    }

    let result =
        <>
            <SDiv
                isActive={isActive}
                onClick={() => setActiveIfThen((activeIfThen) => {
                    const activeIfThenCopy = [...activeIfThen];
                    activeIfThenCopy.fill(false);
                    activeIfThenCopy[index] = true;
                    return activeIfThenCopy
                })}
            >
                <SDiv2>
                    <SDiv3>
                        <SP>【if-then スケジュール】</SP>
                        <SButton onClick={onClick} $isActive={isActive}>Save</SButton>
                    </SDiv3>
                    {inputIfThen}
                </SDiv2>
                <SBorder />
                <SDiv2>
                    <SP>【Task】</SP>
                    <SP>{content}</SP>
                </SDiv2>
            </SDiv>
        </>

    return result;
});
const SDiv = styled.div`
    width: 100%;
    height: ${props => props.isActive ? "10rem" : "8.5rem"};
    ${props => props.isActive && "border: 3px solid #333;"}
    display:flex;
    background: #fff;
    transition: .4s;
    &:hover {
        transform: translateY(4px);
    }
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    margin: 1.5rem 1rem;
    position: relarive;
    transition: height 1s ease ; 
    @media (max-width: 73rem) {
        flex-direction: column;
        align-items: center;
        height: fit-content;
    }
`;

const SDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    @media (max-width: 73rem) {
        width: 100%;
    }
`;

const SDiv3 = styled.div`
    display: flex;
    justify-content: space-between;

`;

const SBorder = styled.div`
    border-left: ${props => props.isActive ? "3" : "2"}px solid #333;
    height: 100%;
    margin: 0rem 1rem;
    @media (max-width: 73rem) {
        border-left: 0px;
        border-bottom: ${props => props.isActive ? "3" : "2"}px solid #333;
        height: 0;
        width: 100%;
        margin: 1rem 0;
    }
`;

const SP = styled.p`
    color: #333;
    font-size: 1.25rem;
    margin-left: 1rem;
    display: inline-block;
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
`;

const SIfThenInput = styled.input`
    color: #333;
    font-size: 1.25rem;
    margin-left: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    &:hover {
        opacity: 0.5;
    }
    @media (max-width: 73rem) {
        font-size: 1rem;
        margin-right: 1rem;
    }
`;

const SButton = styled.button`
    ${props => !props.$isActive && "display: none;"}
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
`;