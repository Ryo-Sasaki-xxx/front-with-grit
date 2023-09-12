import { styled } from "styled-components";

import { Article } from "../global/Article";
import { Img } from "./Img";

export const MainArtilce = () => {
    return (
        <SArticle>
            <SDiv>
                <Article>
                    <p>testttttttttestttttttttestttttttttestttttttttestttttttt</p>
                </Article>
            </SDiv>
            <Img />
        </SArticle>
    )
};

const SArticle = styled.div`
    width: 100%;
    height: 45rem;
    padding: 2rem 0 5rem 0;
    display: flex;
`;

const SDiv = styled.div`
    width: 50%
`;