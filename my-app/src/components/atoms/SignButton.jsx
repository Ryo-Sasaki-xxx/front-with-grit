import styled from "styled-components";

export const SignButton = () => {
    return (
        <SDiv>
            <SA href="sign-in.html">サインイン</SA>
        </SDiv >
    )
};

const SDiv = styled.div`
    width: 250px;
    padding-top: 40px;
    padding-bottom: 30px;
`;

const SA = styled.a`
    display: block;
    width: 185px;
    min-height: 60px;
    padding-top: 10px;
    font-size: 1.7rem;
    background: #333;
    color: #fff;
    border-radius: 8px;
    text-align: center;
    &:hover {
        opacity: 0.9;
    }
`;