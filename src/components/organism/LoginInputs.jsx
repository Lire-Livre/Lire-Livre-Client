import React from "react";
import styled from "styled-components";
import Input from "../atom/Input";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function LoginInputs() {
    return (
        <StyledDiv>
            <Input type="text" name="ID"></Input>
            <Input type="password" name="Password"></Input>
            <Input type="submit" value="Log in"></Input>
        </StyledDiv>
    );
}

export default LoginInputs;