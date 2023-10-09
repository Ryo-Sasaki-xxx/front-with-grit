import styled from "styled-components";

export const Operation = () => {
    return (
        <>
            <SDiv>
                <SDiv2>
                    <SH2 >if-then スケジュール</SH2>
                </SDiv2>
            </SDiv>
        </>
    );
};

const SDiv = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    height: 5rem;
    background: rgba(193, 71, 233, 0.42);
`;

const SH2 = styled.h2`
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    @media (max-width: 73rem) {
        font-size: 1.5rem;
    }
    @media (max-width: 55rem) {
        width: 100%;
    }
    @media (max-width: 40rem) {
        width: fit-content;
    }
`;

const SDiv2 = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    align-items: center;
    @media (max-width: 40rem) {
        width: 90%
    }
`;
