import styled from "styled-components";
import { Article } from "../../global/Article";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";



const text = [
    {
        title: "Step1. Goal 『目標設定』",
        content:
            <>
                <br />
                目標を設定することであなたのモチベーションはこれまでにないものとなります。<br /><br />
                具体的であればあるほど継続力は伸びます。目標は具体的に書きましょう。<br />
            </>
    },
    {
        title: "Step2. Task 『タスク作成』",
        content:
            <>
                <br />
                目標を成し遂げるにはするべきことを明確化する必要があります。<br /><br />
                初めは一つ、慣れてきたらもう一つと少しずつ数を増やしましょう。<br /><br />
                タスクは具体的にしましょう。
            </>
    },
    {
        title: "Step3. if then 『スケジュールリング』",
        content:
            <>
                <br />
                するべきことをあなたはいつしますか。<br /><br />
                if then に基づいてスケジューリングすることでそれらを習慣化することができます。<br /><br />
                「〜したら」を明確にしましょう。<br />
            </>
    },
];

export const FeatureMain = () => {
    const { activeStep } = useContext(ThemeFlagContext);

    return (
        <SDiv>
            <Article>
                <STitle>{text[activeStep].title}</STitle>
                <SP>{text[activeStep].content}</SP>
            </Article>
        </SDiv>
    )
};

const STitle = styled.p`
    font-size: 1.75rem;
    color: #333;
    font-weight:bold;
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
`;

const SP = styled.p`
    font-size: 1.75rem;
    color: #fff;
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
`;

const SDiv = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`;