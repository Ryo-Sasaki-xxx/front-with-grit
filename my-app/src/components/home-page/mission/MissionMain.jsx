import styled from "styled-components";
import { Title } from "../../global/Title";
import { Article } from "../../global/Article";

export const MissionMain = () => {
    return (
        <SDiv>
            <Title subtitle="Mission ー"
                title="習慣化を賢くカンタンに。" />
            <Article>
                <SP1>もしあなたが何かを成し遂げたいならば、習慣化というものは避けて通れません。</SP1>
                <SP2>with GRIT は継続して実行するために必要な「習慣化」を「カンタンに」するために作られました。</SP2>
            </Article>
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;

const SP1 = styled.p`
    font-size: 1.75rem;
    color: #fff;
    text-align: justify;
    text-justify: inter-ideograph; 
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

const SP2 = styled.p`
    font-size: 1.75rem;
    color: #fff;
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
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
