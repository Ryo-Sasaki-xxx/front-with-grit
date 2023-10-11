import styled from "styled-components"

export const CheckBox = (props) => {
    const { onClick, background, activeGoalState, content } = props;
    return (
        <SButton onClick={onClick}>
            <SRadius active={activeGoalState} background={background} />
            {content}
        </SButton>
    );
};

const SButton = styled.button`
    display:flex;
    align-items: center;
    margin: 0 2rem 0 0;
    font-size: 1.25rem;
    width: fit-content;
    color: #333;
    @media (hover: hover) {
        &:hover {
            opacity: 0.5;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.5;
        }
    }
    
    @media (max-width: 73rem) {
        font-size: 1rem;
    }
    @media (max-width: 40rem) {
        margin: 0;
    }
`;

const SRadius = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border: solid ${props => props.background} 5px;
    border-radius: 50%;
    background: #fff;
    box-sizing: border-box;
    position: relative;
    &::before {	
        content: "";
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
        background: ${props => props.background};
        border-radius: 50%;
        box-sizing: border-box;
        opacity: ${props => props.active ? 1 : 0};
        position: absolute;
    }
    @media (max-width: 73rem) {
        width: 1.5rem;
        height: 1.5rem;
    }
`;