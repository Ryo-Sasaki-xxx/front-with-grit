import styled from "styled-components";
import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";


export const Signin = () => {
    const [statusCode, setStatusCode] = useState({
        code: false,
        email: false
    });
    const navigate = useNavigate();
    const signIn = async (data) => {
        try {
            let response = await axios.post(Requests.signIn, data);
            setStatusCode({ code: response.status, email: response.data.email });
        } catch (e) {
            let response = e.response;
            setStatusCode({ code: response.status, email: response.data.email });
        }

    };

    const { register, formState, handleSubmit, watch, getValues } = useForm({});

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        delete data["password_repeat"];
        signIn(JSON.stringify(data));
    };
    let emailUniqueError = statusCode.code === 400 ? "このパスワードは既に使われています。" : false;

    useEffect(() => {
        if (statusCode.code === 201) {
            navigate("/log-in", { state: { email: statusCode.email } })
        }
    }, [statusCode]);

    const emailErrorGenerator = () => {
        let result;
        if (formState.errors.email) {
            result = formState.errors.email.message;
        } else if (emailUniqueError) {
            result = emailUniqueError;
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
            <SForm >
                <SInputName
                    type="text"
                    placeholder="お名前"
                    {...register("username", {
                        required: "お名前が未入力です。",
                    })}
                />
                <SP>{formState.errors.username && formState.errors.username.message}</SP>
                <SInputEmail
                    type="email"
                    placeholder="メールアドレス"
                    {...register("email", {
                        required: "メールアドレスが未入力です。",
                    })}
                />
                <SP>{emailErrorGenerator()}</SP>
                <SInputPassword
                    type="password"
                    placeholder="パスワード"
                    {...register("password", {
                        required: "パスワードが未入力です。",
                    })}
                />
                <SP>{formState.errors.password && formState.errors.password.message}</SP>
                <SInputPassword
                    type="password"
                    placeholder="パスワード（確認用）"
                    {...register("password_repeat", {
                        validate: value =>
                            value === password.current || "パスワードが一致しません。"
                    })}
                />
                <SP>{formState.errors.password_repeat && formState.errors.password_repeat.message}</SP>
                <SDiv2>
                    <SInputSubmit type="submit" value="アカウントを作成する" onClick={handleSubmit(onSubmit)} />
                    <SA to="/log-in/">
                        ログインはこちら
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
`;

const SSection = styled.section`
`;

const SH2 = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin: 1rem auto;
`;

const SForm = styled.form`
    width: 70%;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
`;

const SInputName = styled.input`
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

const SInputEmail = styled.input`
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
    font-family: 'Noto Sans JP', sans-serif;
`;

const SDiv2 = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items:center;
`;

const SInputSubmit = styled.input`
    width: 50%;
    background: #333;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    height: 3.5rem;
    &:hover {
        opacity: 0.85;
    }
`;

const SA = styled(Link)`
    margin-left: 3rem;
    color: #fff;
    font-size: 1rem;
    &:hover {
        opacity: 0.5;
    }
`;