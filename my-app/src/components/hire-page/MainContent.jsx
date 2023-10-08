import styled from "styled-components";
import { useState } from "react";

import { Title } from "../global/Title";
import { Article } from "../global/Article";

const text = [
    {
        subtitle: "Business ー",
        title: "ビジネス",
        content:
            <>
                <p>現在募集はありません。</p>
            </>
    },
    {
        subtitle: "Engineer ー",
        title: "エンジニア",
        content:
            <>
                <p>現在募集はありません。</p>
            </>
    },
    {
        subtitle: "Designer ー",
        title: "デザイナー",
        content:
            <>
                <p>現在募集はありません。</p>
            </>
    },
    {
        subtitle: "Corporate ー",
        title: "コーポレート",
        content:
            <>
                <p>現在募集はありません。</p>
            </>
    },
];

export const MainContent = () => {
    const [activePosition, setActivePosition] = useState(0)

    return (
        <>
            <SDiv1>
                <Title subtitle={text[activePosition].subtitle} title={text[activePosition].title} />
                <Article isDark={true}>
                    {text[activePosition].content}
                </Article>
            </SDiv1>
            <SDiv2>
                <SAside>
                    <SH3>カテゴリー</SH3>
                    <SUl>
                        <SLi><SA onClick={() => setActivePosition(0)} active={activePosition === 0 ? "#C147E9" : "#333"}>ビジネス</SA></SLi>
                        <SLi><SA onClick={() => setActivePosition(1)} active={activePosition === 1 ? "#C147E9" : "#333"}>エンジニア</SA></SLi>
                        <SLi><SA onClick={() => setActivePosition(2)} active={activePosition === 2 ? "#C147E9" : "#333"}>デザイン</SA></SLi>
                        <SLi><SA onClick={() => setActivePosition(3)} active={activePosition === 3 ? "#C147E9" : "#333"}>コーポレート</SA></SLi>
                    </SUl>
                </SAside>
            </SDiv2>
        </>
    )
};
const SA = styled.a`
    font-size: 1.75rem;
    color: ${props => props.active};
    @media (hover: hover) {
        &:hover {
            opacity: 0.7;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.7;
        }
    }
    @media (max-width: 75rem) {
        font-size: 1.4rem;
    }
    @media (max-width: 60rem) {
        font-size: 1.2rem;
    }
`;

const SLi = styled.li`
    margin-top:0.7rem;
    width: 14rem;
    border-bottom: 2px #333 solid;
    @media (max-width:  60rem) {
        width: 100%;
    }
`;

const SUl = styled.ul`
    margin-top:1rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;

const SAside = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:1rem;
`;

const SH3 = styled.h3`
    width: 17rem;
    display:block;
    border-bottom: 2px #C147E9 solid;
    font-size: 1.75rem;
    font-weight: bold;
    @media (max-width: 75rem) {
        font-size: 1.4rem;
    }
    @media (max-width: 60rem) {
        font-size: 1.2rem;
        width: 100%
    }
`;

const SDiv1 = styled.div`
    width: 60%;
    padding: 0rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;

const SDiv2 = styled.div`
    width: 40%;
    padding: 0rem 0 5rem 0;
    display: flex;
    @media (max-width: 60rem) {
        width: 100%;
    }
`;