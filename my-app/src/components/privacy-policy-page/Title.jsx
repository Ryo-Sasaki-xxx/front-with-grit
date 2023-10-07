import styled from "styled-components";

export const Title = (props) => {

    return (
        <SH2>
            {props.content}
        </SH2>
    );
}

const SH2 = styled.h2`
    border-left: 4px solid #C147E9;
    font-size: 1.75rem;
    font-weight: bold;
    font-family: 'Noto Sans JP', sans-serif;
    padding-left: 1rem;
    @media (max-width: 75rem) {
        font-size: 1.4rem;
    }
    @media (max-width: 45rem) {
        font-size: 1rem;
    }
`;
