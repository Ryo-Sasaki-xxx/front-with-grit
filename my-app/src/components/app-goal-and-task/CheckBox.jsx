import styled from "styled-components"

export const CheckBox = (props) => {
    const { onClick, background, activeGoalState, content } = props;
    return (
        <SDiv>
            <SButton onClick={onClick}>
                <SRadius active={activeGoalState} background={background} content={content} />
            </SButton>
        </SDiv>
    );
};

const SDiv = styled.div`
    width: 10%;
    display: block;
`;

const SButton = styled.button`
    display:flex;
    margin: auto;
    width: 2.5rem;
    height: 2.5rem;
    &:hover {
        opacity: 0.5;
    }
`;

const SRadius = styled.div`
    width: 100%;
    height: 100%;
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
    &::after {
        content: "${props => props.content}";
        color: #333;
        margin-left: 1.5rem;
        padding: 0rem 1rem;
        font-size: 1.25rem;
     }
`;