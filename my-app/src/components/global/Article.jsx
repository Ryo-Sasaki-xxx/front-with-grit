import styled from "styled-components";

export const Article = (props) => {
    return (
        <SArticle>
            {props.children}
        </SArticle>
    );
};

const SArticle = styled.article`
    font-size: 1.75rem;
    color: #fff;
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
`;

