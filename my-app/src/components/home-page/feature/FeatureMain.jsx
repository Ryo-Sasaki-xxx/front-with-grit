import styled from "styled-components";
import { Article } from "../../global/Article";
import { useContext } from "react";
import { ThemeFlagContext } from "./provider/ThemeFlag";



const text = [
    {
        title: "Step1. Goal 『目標設定』",
        content:
            <>
                目標を設定することであなたのモチベーションはこれまでにないものとなります。<br />
                具体的であればあるほど継続力は伸びます。<br />
                より具体的にできるようなUIを追求しました。<br />
            </>
    },
    {
        title: "Step2. Task 『タスク作成』",
        content: ""
    },
    {
        title: "Step3. M.C. 『心理対比』",
        content: ""
    },
    {
        title: "Step4. if then 『スケジュールリング』",
        content: ""
    },
    {
        title: "Step5. Feed-Back 『フィードバック』",
        content: ""
    }
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