import styled from "styled-components";

export const SubscriptionForm = (props) => {
    const { formWidth, emailWidth, submitWidth, value } = props;
    console.log(formWidth, emailWidth, submitWidth, value)
    return (
        <SForm width={formWidth}>
            <SInputEmail type="email" placeholder="メールアドレス" width={emailWidth} />
            <SInputSubmit type="submit" value={value} width={submitWidth} />
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