import React from "react";
import styled from "styled-components";

const StyledSignupInput = styled.input`
    padding-left: 1rem;
    border-radius: 10px;
    border: 1px solid #000;
    width: 19rem;
    height: 2.5rem;
    font-weight: 600;
`;

const styledSignupIdInput = {width: '13rem', background: '#EDEDED'};

function SignupInput(props) {
    var location = props.location;

    if (location === 'Id') {
        return (
            <StyledSignupInput style={styledSignupIdInput} text="text" placeholder="ID"></StyledSignupInput>
        );
    }
}

export default SignupInput;