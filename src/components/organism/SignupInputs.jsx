import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../atom/Input";
import Button from "../atom/Button";
import Label from "../atom/Label";
import SignupInput from "../molecule/SignupInput";

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
                <SignupInput location="Id"></SignupInput>
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
                <Link to="/" style={{color: "black", textDecoration: "none"}}>
                    <Label content="이미 계정이 있습니다."></Label>
                </Link>
            </div>
        </StyledDiv>
    );
}

export default SignupInputs;