import styled from "styled-components";

import { Operation } from "./Operation";
import { FormContainer } from "./FormContainer";
import { ActiveIfThenProvider } from "./provider/ActiveIfThen";
import { IfThenProvider } from "./provider/IfThen";

export const IfThen = () => {
    return (
        <>
            <IfThenProvider>
                <ActiveIfThenProvider>
                    <Operation />
                    <SBorder />
                    <FormContainer />
                </ActiveIfThenProvider>
            </IfThenProvider>

        </>
    );
};

const SBorder = styled.div`
    border-top: 2px solid #fff;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

