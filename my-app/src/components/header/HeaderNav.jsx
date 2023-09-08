import styled from "styled-components";

export const HeaderNav = () => {

    return (
        <SNav>
            <SUl>
                <Sli><SA href="feature.html"> 機能</SA></Sli>
                <Sli><SA href="mission.html"> ミッション</SA></Sli>
                <Sli><SA href="help.html"> ヘルプセンター</SA></Sli>
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
    padding: 0 1rem;
    list-style: none;
    a {
        font-size: 1.25rem;
        color: #333;
    }
`;

const Sli = styled.li`
    margin: 0 1rem;
`;

const SA = styled.a`
    &:hover {
        opacity: 0.5;
    }
`;