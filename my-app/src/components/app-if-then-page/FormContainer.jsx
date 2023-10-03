import styled from "styled-components";
import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

import { IfThenContext } from "./provider/IfThen";
import { ActiveIfThenContext } from "./provider/ActiveIfThen";
import { useContext } from "react";


export const FormContainer = (props) => {
    console.log("render container")
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
    const { ifThen, setIfThen } = useContext(IfThenContext);
    const getIfThen = async () => {
        try {
            let response = await axios.get(Requests.getGoalAndTask, config);
            const ifThenList = [];
            if (response.data.length !== 0) {
                response.data.forEach((goalAndTask) => {
                    goalAndTask.task_set.forEach((task_set) => {
                        ifThenList.push(task_set);
                    })
                })
            } else { }

            setIfThen({
                statusCode: response.status,
                ifThenList: ifThenList
            });
            if (ifThenList.length !== 0) {
                setActiveIfThen(Array(ifThenList.length).fill(false))
            } else {
                //passs
            }
        } catch (e) {
            let response = e.response;
            setIfThen({
                statusCode: response.status,
                ifThenList: [],
            });
        }
    };
    useEffect(() => {
        getIfThen();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (ifThen.statusCode == 401) {
            navigate("/log-in");
        }
        console.log(ifThen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ifThen]);

    useEffect(() => {
        console.log("active changed!!");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIfThen]);

    const { activeIfThen, setActiveIfThen } = useContext(ActiveIfThenContext);

    const formList = [];
    console.log(ifThen)
    if (ifThen.ifThenList.length !== 0) {
        ifThen.ifThenList.forEach((ifThen, index) => {
            console.log(ifThen);
            formList.push(
                <Form setActiveIfThen={setActiveIfThen} key={ifThen.if_then_id} index={index} isActive={activeIfThen[index]} ifThen={ifThen} setIfThen={setIfThen} />
            );
        })
    }
    console.log(ifThen);
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


