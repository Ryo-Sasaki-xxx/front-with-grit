import styled from "styled-components";


export const Signin = () => {
    return (
        <SDiv>
            <SSection>
                <SH2>
                    with Grit でやり抜く力を手に入れよう
                </SH2>
            </SSection>
            <SForm>
                <SInputName type="text" placeholder="お名前" />
                <SInputEmail type="email" placeholder="メールアドレス" />
                <SInputPassword type="password" placeholder="パスワード" />
                <SInputPassword type="password" placeholder="パスワード(確認用)" />
                <SInputSubmit type="submit" value="アカウントを作成する" />
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
    margin-top: 1.5rem;
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
    margin-top: 1.5rem;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    height: 3.5rem;
    padding: 0.5rem;
    &::placeholder {
        text-align: left;
    }
`;

const SInputSubmit = styled.input`
    width: 50%;
    margin-top: 2rem;
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
