import styled from "styled-components";
import { Link } from "react-router-dom";


export const Login = () => {
    return (
        <SDiv>
            <SSection>
                <SH2>
                    with Grit でやり抜く力を手に入れよう
                </SH2>
            </SSection>
            <SForm>
                <SInputEmail type="email" placeholder="メールアドレス" />
                <SInputPassword type="password" placeholder="パスワード" />
                <SInputSubmit type="submit" value="ログイン" />
            </SForm>
            <SA to="/log-in/sign-in">
                アカウントの新規作成はこちら
            </SA>
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
    margin: 2rem 0rem;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    height: 3.5rem;
    padding: 0.5rem;
    &::placeholder {
        text-align: left;
    }
`;

const SInputSubmit = styled.input`
    width: 35%;
    margin-bottom: 1rem;
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
    margin-top: 2rem;
    margin-bottom: 4.5rem;
    color: #fff;
    font-size: 1.75rem;
    &:hover {
        opacity: 0.5;
    }
`;
