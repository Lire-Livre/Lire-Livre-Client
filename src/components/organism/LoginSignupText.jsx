import React from "react";
import styled from "styled-components";
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
                <Label content="회원가입"></Label>
            </div> 
        </StyledDiv>
    );
}

export default LoginSignupText;