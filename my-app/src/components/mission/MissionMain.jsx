import styled from "styled-components";
import { Title } from "../global/Title";
import { Article } from "../global/Article";

export const MissionMain = () => {
    return (
        <SDiv>
            <Title subtitle="Mission ー"
                title="習慣化を賢くカンタンに。" />
            <Article>
                <p>もしあなたが何かを成し遂げたいならば、習慣化というものは避けて通れません。</p>
                <p>with GRIT は継続して実行するために必要な「習慣化」を「カンタンに」するために作られました。</p>
            </Article>
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content: space-evenly;
`;
