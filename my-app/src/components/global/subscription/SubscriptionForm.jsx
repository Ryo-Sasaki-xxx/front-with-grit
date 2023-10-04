import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SubscriptionForm = (props) => {
    const { formWidth, emailWidth, submitWidth, value } = props;

    const { register, handleSubmit, } = useForm({});

    const navigate = useNavigate();
    const onClick = (data) => {
        navigate("/log-in/sign-in", { state: { email: data.email } })
    }
    return (
        <SForm width={formWidth} noValidate>
            <SInputEmail
                type="email"
                placeholder="メールアドレス"
                {...register("email")}
                width={emailWidth}
            />
            <SInputSubmit type="submit" value={value} width={submitWidth} onClick={handleSubmit(onClick)} />
        </SForm>
    )
};



const SForm = styled.form`
    width: ${props => props.width}  ;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: space-around;
`;

const SInputEmail = styled.input`
    width: ${props => props.width};
    background: #fff;
    color: rgba(33,42,62,5);
    border-radius: 15px;
    height: 3.5rem;
    padding: 0.5rem;
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
    &:hover {
        opacity: 0.95;
    }
`;