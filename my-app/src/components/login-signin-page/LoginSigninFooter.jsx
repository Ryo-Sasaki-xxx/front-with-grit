import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginSigninFooter = () => {
    return (
        <SNav>
            <SUl>
                <Sli>
                    <SA to="/">
                        ホーム
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/feature">
                        機能
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/mission">
                        ミッション
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/hire">
                        募集
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/help">
                        ヘルプセンター
                    </SA>
                </Sli>
                <Sli>
                    <SA to="/privacy-policy">
                        プライバシーポリシー
                    </SA>
                </Sli>
            </SUl>
        </SNav>
    )
};

const SNav = styled.nav`
    display:flex;
    justify-content: center;
    @media (max-width: 80rem) {
        width: 90%;
    }
`;

const SUl = styled.ul`
    width: 80rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 1rem;
    list-style: none;
    margin: 1rem 0;
`;

const Sli = styled.li`
    margin: 1rem 1rem;
`;

const SA = styled(Link)`
    display: block;
    width: fit-content;
    font-size: 1.25rem;
    color: #333;
    @media (hover: hover) {
        &:hover {
            opacity: 0.5;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.5;
        }
    }
`;



