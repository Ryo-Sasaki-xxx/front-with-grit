import { Link } from "react-router-dom";
import styled from "styled-components";

import { useContext } from "react";
import { IsActiveHumbergerContext } from "../header/provider/ActiveHumberger";

export const FooterNav = () => {
    const { setIsActiveHumberger } = useContext(IsActiveHumbergerContext);
    return (
        <SNav>
            <SUl>
                <Sli>
                    <SA to="/help" onClick={() => setIsActiveHumberger(false)}>
                        <SP fontSize="1.25">ヘルプセンター</SP>
                        <SP fontSize="1">お困りごとがございましたらお問い合わせください。</SP>
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/hire" onClick={() => setIsActiveHumberger(false)}>
                        <SP fontSize="1.25">募集</SP>
                        <SP fontSize="1">with GRIT のメンバー募集情報が確認できます。</SP>
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/privacy-policy" onClick={() => setIsActiveHumberger(false)}>
                        <SP fontSize="1.25">プライバシーポリシー</SP>
                        <SP fontSize="1">with GRIT における利用情報とその取り扱いについての説明ページです。</SP>
                    </SA>
                </Sli>
            </SUl>
        </SNav>
    )
};

const SNav = styled.nav`
    display:flex;
    justify-content: center;
    width: auto;
`;

const SUl = styled.ul`
    display: flex;
    justify-content:space-between;
    list-style: none;
    @media (max-width: 60rem) {
        flex-direction: column;

    }
`;

const Sli = styled.li`
    margin: 0 0 0 2rem;
    @media (max-width: 60rem) {
        margin: 2rem 0 0 0;
        border-bottom: 1px solid #fff;
    }
`;

const SA = styled(Link)`
    display:block;
    color: #fff;
    &:hover {
        opacity: 0.5;
    }
`;

const SP = styled.p`
    font-size: ${props => props.fontSize}rem;
    width: 19rem;
    @media (max-width: 75rem) {
        font-size: ${props => Number(props.fontSize) * 0.8}rem;
        width: 15rem
    }
    @media (max-width: 60rem) {
        width: 100%;
        font-size: ${props => props.fontSize}rem;
    }
`;