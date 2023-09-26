import styled from "styled-components";

export const Button = (props) => {
    const { onClick } = props;

    return (

        <SButton type="button" onClick={onClick}>
            <SImg src={"/with-grit-logo-dark.svg"} />
        </SButton>
    );
};

const SButton = styled.button`
    display: block;
`;

const SSpan = styled.span`

`;

const SImg = styled.img`
    width: 5rem;
`;