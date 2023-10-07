import styled from "styled-components";

import { useForm } from "react-hook-form";
import axios from "../global/api/axios";
import { Requests } from "../global/api/Requests";

import { useState } from "react";

import { Title } from "../global/Title";

export const MainContent = () => {
    const [haveSent, setHaveSent] = useState(false);
    const [statusCode, setStatusCode] = useState(false);

    const { register, formState, handleSubmit, } = useForm({
        defaultValue: {
            "name": null,
            "email": null,
            "content": null,
        },
    });

    const sendHelp = async (data) => {
        try {
            let response = await axios.post(Requests.help, data,);
            setHaveSent((prev) => {
                return !prev;
            })
        } catch (error) {
            setStatusCode(true);
        }
    }

    const onSubmit = (data) => {
        sendHelp(data);
    };
    let emailError = statusCode ? "無効なメールアドレスです。" : false;
    const emailErrorGenerator = () => {
        let result;
        if (formState.errors.email) {
            result = formState.errors.email.message;
        } else if (emailError) {
            result = emailError;
        }
        return result;
    }

    let result;

    if (haveSent) {
        result =
            <>
                <SP>お問い合わせいただきありがとうございます。</SP>
                <SP2>後日xxxx@with-gritよりご入力いただきましたメールアドレス宛にご返信させていただきます。</SP2>
                <SButton onClick={() => setHaveSent(prev => !prev)}>別のお問い合わせをする</SButton>
            </>
    } else {
        result =
            <>
                <Title subtitle="" title="with GRITメンバーに問い合わせる。" />
                <SForm onSubmit={handleSubmit(onSubmit)} noValidate>
                    <SInput
                        type="text"
                        placeholder="お名前"
                        {...register("name", {
                            required: "お名前が未入力です。"
                        })}
                    />
                    <SP3>{formState.errors.name && formState.errors.name.message}</SP3>
                    <SInput
                        type="email"
                        placeholder="メールアドレス"
                        {...register("email", {
                            required: "メールアドレスが未入力です。"
                        })}
                    />
                    <SP3>{emailErrorGenerator()}</SP3>
                    <STextarea
                        placeholder="お問い合わせ内容"
                        {...register("content", {
                            required: "お問い合わせ内容が未入力です。"
                        })}
                    />
                    <SP3>{formState.errors.content && formState.errors.content.message}</SP3>
                    <SInputSubmit type="submit" value="送信" />
                </SForm>
            </>
    }

    return result;
};

const SForm = styled.form`
    width: 70%;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const STextarea = styled.textarea`
    height: 10rem;
    background: #fff;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    padding: 0.5rem;
    margin-top: 2rem;
    &::placeholder {
        text-align: left;
    }
`;

const SInput = styled.input`
    width: 60%;
    background: #fff;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    height: 3.5rem;
    padding: 0.5rem;
    margin-top: 2rem;
    &::placeholder {
        text-align: left;
    }
`;

const SInputSubmit = styled.input`
    width: 30%;
    background: #333;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    height: 3.5rem;
    margin-top: 2rem;
    &:hover {
        opacity: 0.95;
    }
`;

const SP = styled.p`
    margin: 1rem;
    text-align: center;
    font-size: 1.25rem;
`;

const SP2 = styled.p`
    text-align: center;
    font-size: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
`;

const SP3 = styled.p`

`;

const SButton = styled.button`
    font-size: 1rem;
    text-decoration:underline;
    color: #fff;
    margin: 1rem;
`;