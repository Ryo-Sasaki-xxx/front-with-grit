import { styled } from "styled-components";
import { Article } from "../global/Article";
import { Img } from "./Img";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";

const text = [
    {
        title: "Step1. Goal 『目標設定』",
        content:
            <>
                <br />
                with GRIT では目標を一覧で見ることができます。<br /><br />
                習慣化できた目標は 「 completed 」、<br />
                目指すのをやめた目標は「 waiting 」、<br />
                取り組んでいる目標は 「 working 」<br />
                とすることで分類できます。<br />

            </>
    },
    {
        title: "Step2. Task 『タスク作成』",
        content:
            <>
                <br />
                with GRIT では目標に紐づいてタスクを作成できます。<br />
                編集して save を押すだけでカンタンに作成できます。<br /><br />
                どんなタスクがあるのか一覧で確認しましょう。<br />
            </>
    },
    {
        title: "Step3. if then 『スケジュールリング』",
        content:
            <>
                <br />
                with GRIT では if then に基づいてスケジューリングできます。<br /><br />
                右側には作成されたタスクが一覧で表示されます。<br />
                左側に if を作成していきましょう。<br />
            </>
    },
];

export const MainArtilce = () => {
    const { activeStep } = useContext(ThemeFlagContext);
    return (
        <SArticle>
            <SDiv>
                <STitle>{text[activeStep].title}</STitle>
                <Article>
                    <SP>{text[activeStep].content}</SP>
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
    height: 45rem;
    padding: 2rem 0 5rem 0;
    display: flex;
`;

const SDiv = styled.div`
    width: 50%
`;

const SP = styled.p`
    font-size: 1.75rem;
    color: #fff;
    margin: 1rem 0 0 0;
    text-align: justify;
    text-justify: inter-ideograph; 
`;