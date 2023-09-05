import styled from "styled-components";

export const HeaderNav = () => {

    return (
        <nav>
            <SUl fontSize="1.25rem" color="#333">
                <Sli><SA href="feature.html"> 機能</SA></Sli>
                <Sli><SA href="mission.html"> ミッション</SA></Sli>
                <Sli><SA href="help.html"> ヘルプセンター</SA></Sli>
            </SUl>
        </nav>
    )
};

const SUl = styled.ul`
    display: flex;
    font-weight: regular;
    margin-top: 50px;
    list-style: none;
    a {
        font-size: ${(props) => props.fontSize};
        color: ${(props) => props.color};
    }
`;

const Sli = styled.li`
    margin-left: 36px;
`;

const SA = styled.a`
    &:hover {
    opacity: 0.5;
}
`;