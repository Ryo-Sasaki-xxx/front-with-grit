import styled from "styled-components";

export const Title = (props) => {
    return (
        <>
            <SSection>
                <SH3>
                    {props.subtitle}
                </SH3>
                <SH2>
                    {props.title}
                </SH2>
            </SSection>
        </>
    );
};

const SSection = styled.section`
`;

const SH2 = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
`;

const SH3 = styled.h3`
    font-size: 1.75rem;
    font-weight: bold;
    margin:0;
    color: #C147E9;
`;