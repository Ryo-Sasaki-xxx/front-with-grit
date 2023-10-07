import styled from "styled-components";
import { Title } from "./Title";
import { Article } from "./Article";

const texts = [
    {
        title: "はじめに",
        article:
            <>
                <p>
                    本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
                </p>
            </>
    },
    {
        title: "第1条 （お客様から取得する情報）",
        article:
            <>
                <p>
                    当社は、お客様から以下の情報を取得します。<br /><br />
                    ・氏名（ニックネームやペンネームも含む）<br /><br />
                    ・メールアドレス<br /><br />
                    ・OSが生成するID、端末の種類、端末識別子等のお客様が利用するOSや端末に関する情報<br /><br />
                    ・お客様が作成された目標とタスク<br /><br />
                </p>
            </>
    },
    {
        title: "第2条 （お客様の情報を利用する目的）",
        article:
            <>
                <p>
                    当社は、お客様から取得した情報を、以下の目的のために利用します。<br /><br />
                    ・当社サービスに関する登録の受付、お客様の本人確認、認証のため<br /><br />
                    ・お客様の当社サービスの利用履歴を管理するため<br /><br />
                    ・当社サービスにおけるお客様の行動履歴を分析し、当社サービスの維持改善に役立てるため<br /><br />
                    ・当社のサービスに関するご案内をするため<br /><br />
                    ・お客様からのお問い合わせに対応するため<br /><br />
                    ・当社の規約や法令に違反する行為に対応するため<br /><br />
                    ・当社サービスの変更、提供中止、終了、契約解除をご連絡するため<br /><br />
                    ・当社規約の変更等を通知するため<br /><br />
                    ・以上の他、当社サービスの提供、維持、保護及び改善のため<br /><br />
                </p>
            </>
    },
    {
        title: "第3条 （安全管理のために講じた措置）",
        article:
            <>
                <p>
                    当社が、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。
                </p>
            </>
    },
    {
        title: "第4条 （第三者提供）",
        article:
            <>
                <p>
                    当社は、お客様から取得する情報のうち、個人データ（個人情報保護法第16条第3項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。<br />
                    但し、次の場合は除きます。<br /><br />
                    ·個人データの取扱いを外部に委託する場合<br /><br />
                    ·当社や当社サービスが買収された場合<br /><br />
                    ·事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）<br /><br />
                    ·その他、法律によって合法的に第三者提供が許されている場合<br /><br />
                </p>
            </>
    },
    {
        title: "第5条 （プライバシーポリシーの変更）",
        article:
            <>
                <p>
                    当社は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
                </p>
            </>
    },
    {
        title: "第6条 （お問い合わせ）",
        article:
            <>
                <p>
                    お客様の情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のメールアドレスにご連絡ください。<br /><br />
                    e-mail : sasakinokao@gmail.com<br /><br />
                    この場合、必ず、運転免許証のご提示等当社が指定する方法により、ご本人からのご請求であることの確認をさせていただきます。なお、情報の開示請求については、開示の有無に関わらず、ご申請時に一件あたり1,000円の事務手数料を申し受けます。<br />
                </p>
            </>
    },
    {
        title: "第7条 （事業者の氏名）",
        article:
            <>
                <p>
                    with GRIT 佐々木椋
                </p>
            </>

    },
    {
        title: "第8条 （事業所の住所）",
        article:
            <>
                <p>
                    神奈川県横浜市保土ヶ谷区常盤台55-2
                </p>
            </>
    },
];

export const MainContent = () => {
    const privacyPolcyList = [];
    texts.forEach((text, index) => {
        console.log(text);
        privacyPolcyList.push(
            <SSection key={`${index}0`}>
                <Title key={`${index}1`} content={text.title} />
                <Article key={`${index}2`}>{text.article}</Article>
            </SSection>
        )
    })

    return (
        <>
            <SDiv>
                {[...privacyPolcyList]}
            </SDiv>
        </>
    )
};

const SDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    margin-bottom: 2rem;
`;