import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export const Logout = () => {
    const [logout, setLogout] = useState(false);

    const onClick = () => {
        localStorage.removeItem("jwt-access");
        localStorage.removeItem("jwt-refresh");
        setLogout(true);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (logout) {
            navigate("/log-in");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logout]);
    return (
        <SButton onClick={onClick}>
            ログアウト
        </SButton>
    );
}

const SButton = styled.button`
    font-size: 1.25rem;
    border-radius: 1rem;
    padding: 0.5rem;
    color: #fff;
    background: #333;
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
    @media (max-width: 65rem) {
        display: none;
    }
`;