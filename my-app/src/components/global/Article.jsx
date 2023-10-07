import styled from "styled-components";

export const Article = (props) => {
    const { isDark } = props;
    return (
        <SArticle isDark={isDark}>
            {props.children}
        </SArticle>
    );
};

const SArticle = styled.article`
    font-size: 1.75rem;
    color: ${props => props.isDark ? "#333" : "#fff"};
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
    word-wrap: break-word;
    width: 100%;
    @media (max-width: 75rem) {
        font-size: 1.4rem;
    }
    @media (max-width: 60rem) {
        font-size: 1.6rem;
    }
    @media (max-width: 45rem) {
        font-size: 1.4rem;
    }

`;

