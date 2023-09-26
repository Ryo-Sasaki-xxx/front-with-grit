import styled from "styled-components";

import { GoalStateProvider } from "./provider/GoalState";
import { Operation } from "./Operation";
import { FormContainer } from "./FormContainer";

export const GoalTask = () => {
    return (
        <>
            <GoalStateProvider>
                <Operation />
            </GoalStateProvider>
            <SBorder />
            <FormContainer />
        </>
    );
};

const SBorder = styled.div`
    border-top: 2px solid #fff;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

