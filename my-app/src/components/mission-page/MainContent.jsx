import styled from "styled-components";
import { Article } from "../global/Article";

export const MainContent = () => {
    return (
        <SDiv>
            <Article>
                <div>
                    <SP2>習慣化と耳にしたとき、多くの人は大変そう、めんどくさそう、どうせできないといったマイナスなイメージを思い浮かべるのではないでしょうか。</SP2>
                    <SP2>しかし、もしあなたが何かを成し遂げたいならば、習慣化というものは避けて通れません。</SP2>
                    <SP2>世界では色々な情報が溢れており、するべきこと、成功への最短ルートはある程度わかるようになってきています。</SP2>
                    <SP2>そのような中、なぜ物事を成し遂げることができないのでしょう。それは「わかっている」けれど、「継続して実行する」ことができないからではないでしょうか。</SP2>
                    <SP2>習慣化と耳にしたとき、多くの人は大変そう、めんどくさそう、どうせできないといったマイナスなイメージを思い浮かべるのではないでしょうか。</SP2>
                    <SP2>with GRIT は継続して実行するために必要な「習慣化」を「カンタンに」する ために作られました。</SP2>
                </div>
            </Article>
            <SP1>Let's kick off with GRIT !</SP1>
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 100%;
    padding: 2rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SP1 = styled.p`
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    padding: 3rem;
    @media (max-width: 75rem) {
        font-size: 2.3rem;
        padding: 2rem;
    }
    @media (max-width: 45rem) {
        font-size: 1.75rem;
        padding: 2rem 0 0 0;
    }
`;

const SP2 = styled.p`
    font-size: 1.5rem;
    color: #fff;
    margin: 1.4rem 0 0 0;
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