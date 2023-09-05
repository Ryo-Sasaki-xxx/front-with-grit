import styled from "styled-components";

export const FooterContent = () => {

    return (
        <>
            <SDiv>
                <a href="help.html">ヘルプセンター</a>
                <p>お困りごとがございましたらお問い合わせください。</p>
            </SDiv>
            <SDiv>
                <a href="help.html">募集</a>
                <p>with GRITのメンバー募集ページです。</p>
            </SDiv>
            <SDiv>
                <a href="help.html">プライバシーポリシー</a>
                <p>with GRITにおける利用情報とその取り扱いについての説明ページです。</p>
            </SDiv>
        </>


    )
};

const SDiv = styled.div`
    max-width:300px;
    a {
        font-size: 1.25rem;
        color:  #fff;
        &:hover {
            opacity: 0.5;
        }
    }
    p {
        font-size: 1rem;
        color:  #fff;
        
    }
`
