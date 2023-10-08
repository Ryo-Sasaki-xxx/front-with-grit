import styled from "styled-components";
import { Link } from "react-router-dom";

import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = () => {
    const [statusCode, setStatusCode] = useState({
        code: false,
        error: false,
    });

    const getAuth = async (data) => {
        try {
            let response = await axios.post(Requests.getAuth, data,);
            localStorage.setItem("jwt-access", response.data.access);
            localStorage.setItem("jwt-refresh", response.data.refresh);
            setStatusCode({
                code: response.status,
                error: false,
            });
        } catch (e) {
            let response = e.response;
            setStatusCode({
                code: response.status,
                error: true,
            });
        }
    };



    const { register, formState, handleSubmit, setValue, } = useForm({});
    const onSubmit = (data) => {
        getAuth(JSON.stringify(data))
    };

    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            setValue("email", location.state.email)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate();
    useEffect(() => {
        if (statusCode.code === 200) {
            navigate("/app")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusCode]);

    let passwordError = statusCode.error ? "メールアドレスまたはパスワードが正しくありません。" : false;
    const passwordErrorGenerator = () => {
        let result;
        if (formState.errors.password) {
            result = formState.errors.password.message;
        } else if (passwordError) {
            result = passwordError;
        }
        return result;
    }

    return (
        <SDiv>
            <SSection>
                <SH2>
                    with Grit でやり抜く力を手に入れよう
                </SH2>
            </SSection>
            <SForm onSubmit={e => e.preventDefault()}>
                <SInputEmail
                    type="email"
                    placeholder="メールアドレス"
                    {...register("email", {
                        required: "メールアドレスが未入力です。",
                    })}
                />
                <SP>{formState.errors.email && formState.errors.email.message}</SP>
                <SInputPassword
                    type="password"
                    placeholder="パスワード"
                    {...register("password", {
                        required: "パスワードが未入力です。",
                    })}
                />
                <SP>{passwordErrorGenerator()}</SP>
                <SDiv2>
                    <SInputSubmit type="submit" value="ログイン" onClick={handleSubmit(onSubmit)} />
                    <SA to="/log-in/sign-in">
                        アカウントの新規作成はこちら
                    </SA>
                </SDiv2>
            </SForm>
        </SDiv>
    );
};

const SDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    @media (max-width: 60rem) {
        width: 100%
    }
`;

const SSection = styled.section`
    margin: 0 auto;
`;

const SH2 = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin: 1rem auto;
    @media (max-width: 60rem) {
        font-size: 1.5rem;
    }
`;

const SForm = styled.form`
    width: 85%;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 60rem) {
        margin: 0 auto;
        width: 100%
    }
`;

const SInputEmail = styled.input`
    margin-top: 1rem;
    background: #fff;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    height: 3.5rem;
    padding: 0.5rem;
    &::placeholder {
        text-align: left;
    }
`;

const SInputPassword = styled.input`
    background: #fff;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    height: 3.5rem;
    padding: 0.5rem;
    &::placeholder {
        text-align: left;
    }
`;

const SP = styled.p`
    height: 2rem;
    font-size: 1rem;
    padding-left: 0.5rem;
`;

const SDiv2 = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 12rem;
    display: flex;
    align-items:center;
`;

const SInputSubmit = styled.input`
    width: fit-content;
    padding: 0 2rem;
    background: #333;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    height: 3.5rem;
    @media (hover: hover) {
        &:hover {
            opacity: 0.85;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.85;
        }
    }
`;


const SA = styled(Link)`
    margin-left: 2rem;
    color: #fff;
    font-size: 1rem;
    @media (hover: hover) {
        &:hover {
            opacity: 0.5;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.5;
        }
    }
    @media (max-width: 60rem) {
        color: #333;
    }
`;