import styled from "styled-components";
import { Article } from "../global/Article";

export const MainContent = () => {
    return (
        <SDiv>
            <Article>
                <div>
                    <p>習慣化と耳にしたとき、多くの人は大変そう、めんどくさそう、どうせできないといったマイナスなイメージを思い浮かべるのではないでしょうか。</p><br />
                    <p>しかし、もしあなたが何かを成し遂げたいならば、習慣化というものは避けて通れません。</p><br />
                    <p>世界では色々な情報が溢れており、するべきこと、成功への最短ルートはある程度わかるようになってきています。</p><br />
                    <p>そのような中、なぜ物事を成し遂げることができないのでしょう。それは「わかっている」けれど、「継続して実行する」ことができないからではないでしょうか。</p><br />
                    <p>習慣化と耳にしたとき、多くの人は大変そう、めんどくさそう、どうせできないといったマイナスなイメージを思い浮かべるのではないでしょうか。</p><br />
                    <p>with GRIT は継続して実行するために必要な「習慣化」を「カンタンに」する ために作られました。</p><br />
                </div>
            </Article>
            <SP>Let's kick off with GRIT !</SP>
        </SDiv>
    )
};

const SDiv = styled.div`
    width: 100%;
    padding: 4rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SP = styled.p`
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    padding: 1rem;
`;