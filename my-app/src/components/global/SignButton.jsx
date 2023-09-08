import styled from "styled-components";

export const SignButton = () => {
    return (
        <SDiv>
            <SA href="sign-in.html">サインイン</SA>
        </SDiv >
    )
};

const SDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center
`;

const SA = styled.a`
    display: block;
    width: 11rem;
    height: 4rem;
    padding-top: 0.6rem;
    font-size: 1.7rem;
    background: #333;
    color: #fff;
    border-radius: 15px;
    text-align: center;
    &:hover {
        opacity: 0.9;
    }
`;