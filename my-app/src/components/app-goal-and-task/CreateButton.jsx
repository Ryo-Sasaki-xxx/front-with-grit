import styled from "styled-components";

export const CreateButton = () => {
    return (
        <SButton>Create New</SButton>
    );
};

const SButton = styled.button`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 1.25rem;
    padding: 0.5rem;
`;