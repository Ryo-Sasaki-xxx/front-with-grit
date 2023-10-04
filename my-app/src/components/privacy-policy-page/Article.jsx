import styled from "styled-components";

export const Article = (props) => {
    return (
        <>
            <SArticle>
                {props.children}
            </SArticle>
        </>
    );
}

const SArticle = styled.article`
    font-size: 1.25rem;
    font-family: 'Noto Sans JP', sans-serif;
    text-align: justify;
    text-justify: inter-ideograph; 
    word-wrap: break-word;
    color: #333;
    padding: 2rem 0rem 0rem 2rem;
`;
