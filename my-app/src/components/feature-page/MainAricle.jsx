import { styled } from "styled-components";
import { Article } from "../global/Article";
import { Img } from "./Img";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";



export const MainArtilce = () => {
    const text = [
        {
            title: "Step1. Goal 『目標設定』",
            content:
                <>
                    <SP>with GRIT では目標を一覧で見ることができます。</SP>
                    <SP>習慣化できた目標は 「 completed 」、目指すのをやめた目標は「 waiting 」、取り組んでいる目標は 「 working 」とすることで分類できます。</SP>
                </>
        },
        {
            title: "Step2. Task 『タスク作成』",
            content:
                <>
                    <SP>with GRIT では目標に紐づいてタスクを作成できます。</SP>
                    <SP>編集して save を押すだけでカンタンに作成できます。</SP>
                    <SP>どんなタスクがあるのか一覧で確認しましょう。</SP>
                </>
        },
        {
            title: "Step3. if then 『スケジュールリング』",
            content:
                <>
                    <SP>with GRIT では if then に基づいてスケジューリングできます。</SP>
                    <SP>右側には作成されたタスクが一覧で表示されます。</SP>
                    <SP>左側に if を作成していきましょう。</SP>
                </>
        },
    ];

    const { activeStep } = useContext(ThemeFlagContext);
    return (
        <SArticle>
            <SDiv>
                <STitle>{text[activeStep].title}</STitle>
                <Article>
                    {text[activeStep].content}
                </Article>
            </SDiv>
            <Img />
        </SArticle>
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

const SArticle = styled.div`
    width: 100%;
    padding: 2rem 0 0rem 0;
    display: flex;
    @media (max-width: 60rem) {
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        height: auto;
    }
`;

const SDiv = styled.div`
    width: 50%;
    @media (max-width: 60rem) {
        width: 100%;
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