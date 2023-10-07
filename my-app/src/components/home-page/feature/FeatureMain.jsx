import styled from "styled-components";
import { Article } from "../../global/Article";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";





export const FeatureMain = () => {
    const { activeStep } = useContext(ThemeFlagContext);

    const text = [
        {
            title: "Step1. Goal 『目標設定』",
            content:
                <>
                    <SP>目標を設定することであなたのモチベーションはこれまでにないものとなります。</SP>
                    <SP>具体的であればあるほど継続力は伸びます。目標は具体的に書きましょう。</SP>
                </>
        },
        {
            title: "Step2. Task 『タスク作成』",
            content:
                <>
                    <SP>目標を成し遂げるにはするべきことを明確化する必要があります。</SP>
                    <SP>初めは一つ、慣れてきたらもう一つと少しずつ数を増やしましょう。</SP>
                    <SP>タスクは具体的にしましょう。</SP>
                </>
        },
        {
            title: "Step3. if then 『スケジュールリング』",
            content:
                <>
                    <SP>するべきことをあなたはいつしますか。</SP>
                    <SP>if then に基づいてスケジューリングすることでそれらを習慣化することができます。</SP>
                    <SP>「〜したら」を明確にしましょう。</SP>
                </>
        },
    ];

    return (
        <SDiv1>
            <Article>
                <STitle>{text[activeStep].title}</STitle>
                <SDiv2>{text[activeStep].content}</SDiv2>
            </Article>
        </SDiv1>
    )
};

const STitle = styled.p`
    font-size: 1.75rem;
    color: #333;
    font-weight:bold;
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

const SP = styled.p`
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

const SDiv1 = styled.div`
    width: 50%;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;

const SDiv2 = styled.div`

`;