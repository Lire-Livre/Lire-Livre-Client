import React from "react";
import styled from "styled-components";
import Input from "../atom/Input";
import Button from "../atom/Button";
import Label from "../atom/Label";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledDiv2 = styled.div`
    margin-top: 0.3rem;
`

function SignupInputs() {
    return (

        <StyledDiv>
            <StyledDiv2 style={{display: 'flex'}}>
                <Input place="signupId" type="text" name="ID"></Input>
                <Button></Button>
            </StyledDiv2>
            <StyledDiv2>
                <Input type="password" name="Password"></Input>
                <Input type="password" name="Password Check"></Input>
            </StyledDiv2>
            <StyledDiv2>
                <Input type="text" name="Email"></Input>
            </StyledDiv2>
            <StyledDiv2>
                <Input type="submit" value="Sign up"></Input>
            </StyledDiv2>
            <div style={{marginTop: '1rem'}}>
                <Label content="이미 계정이 있습니다."></Label>
            </div>
        </StyledDiv>
    );
}

export default SignupInputs;