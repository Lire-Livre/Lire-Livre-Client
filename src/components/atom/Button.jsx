import React from "react";
import styled from "styled-components";

const StyledSignupIdButton = styled.button`
    margin-left: 1rem;
    height: 2.8rem;
    width: 5rem;
    border-radius: 10px;
    border: 1px solid #000;
    background: #426B22;
    color: white;
`;

function Button(props) {
    return (
        <StyledSignupIdButton>중복 확인</StyledSignupIdButton>
    );
}

export default Button; 