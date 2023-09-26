import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterNav = () => {

    return (
        <SNav>
            <SUl>
                <Sli>
                    <SA to="/help">
                        <SP fontSize="1.25rem">ヘルプセンター</SP>
                        <SP fontSize="1rem">お困りごとがございましたらお問い合わせください。</SP>
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/hire">
                        <SP fontSize="1.25rem">募集</SP>
                        <SP fontSize="1rem">with GRIT のメンバー募集情報が確認できます。</SP>
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/privacy-policy">
                        <SP fontSize="1.25rem">プライバシーポリシー</SP>
                        <SP fontSize="1rem">with GRIT における利用情報とその取り扱いについての説明ページです。</SP>
                    </SA>
                </Sli>
            </SUl>
        </SNav>
    )
};

const SNav = styled.nav`
    display:flex;
    align-items: center;

`;

const SUl = styled.ul`
    display: flex;
    justify-content:space-between;
    list-style: none;
    a {
        color: #fff;
    }
`;

const Sli = styled.li`
    margin: 0 0 0 2rem;
`;

const SA = styled(Link)`
    display:block;
    &:hover {
        opacity: 0.5;
    }
`;

const SP = styled.p`
    font-size: ${props => props.fontSize};
    max-width: 19rem;
    
`;