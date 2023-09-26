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
`;

const SUl = styled.ul`
    width: 80rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    list-style: none;
`;

const Sli = styled.li`
    margin: 2rem 1rem;
`;

const SA = styled(Link)`
    font-size: 1.25rem;
    color: #333;
    &:hover {
        opacity: 0.5;
    }
`;



