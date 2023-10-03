import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    margin-top: 0.5rem;
`;

const StyledInput = styled.input`
    padding-left: 1rem;
    border-radius: 10px;
    border: 1px solid #000;
    width: 19rem;
    height: 2.5rem;
    font-weight: 600;
`;

const styleSubmit = {width: '20.4rem', background: '#426B22', color: '#FFF'}; 
const styleInput = {background: '#EDEDED'};
const styledSignupIdInput = {width: '13rem', background: '#EDEDED'};

function Input(props) {
    var _placeholder = props.name;
    var _plcae = props.place;
    var _type = props.type;
    var _value = props.value;

    if (_type === 'submit') {
        return (
            <StyledDiv>
                <StyledInput style={styleSubmit} type={_type} value={_value}></StyledInput>   
            </StyledDiv>
        );
    } else {
        if (_plcae === 'signupId') {
            return (
                <StyledDiv>
                    <StyledInput style={styledSignupIdInput} type={_type} placeholder={_placeholder}></StyledInput>   
                </StyledDiv>
            );
        } else {
            return (
                <StyledDiv>
                    <StyledInput style={styleInput} type={_type} placeholder={_placeholder}></StyledInput>   
                </StyledDiv>
            );
        }
    }
}

export default Input;