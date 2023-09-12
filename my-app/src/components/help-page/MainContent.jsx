import styled from "styled-components";

import { Title } from "../global/Title";

export const MainContent = () => {
    return (
        <>
            <Title subtitle="" title="with GRITメンバーに問い合わせる。" />
            <SForm width="70%">
                <SInput type="text" placeholder="お名前" width="60%" />
                <SInput type="email" placeholder="メールアドレス" width="60%" />
                <STextarea placeholder="お問い合わせ内容" width=""></STextarea>
                <SInputSubmit type="submit" value="送信" width="30%" />
            </SForm>
        </>
    )
};

const SForm = styled.form`
    width: ${props => props.width}  ;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const STextarea = styled.textarea`
    width: ${props => props.width};
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
    width: ${props => props.width};
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
    width: ${props => props.width};
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