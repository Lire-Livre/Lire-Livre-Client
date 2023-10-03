import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Label from "../atom/Label";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.8rem;
`;

const styleSignup = {margin: "0 0 0 1.3rem"};

function LoginSignupText() {
    return (
        <StyledDiv>
            <div>
                <Label content="아이디/비밀번호 찾기"></Label>
            </div>
            <div style={styleSignup}>
                <Link to="/signup" style={{color: "black", textDecoration: "none"}}>
                    <Label content="회원가입"></Label>
                </Link>
            </div> 
        </StyledDiv>
    );
}

export default LoginSignupText;