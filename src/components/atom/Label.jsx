import React from "react";
import styled from "styled-components";

const StyledLabel = styled.span`
    margin-top: 5rem;
    font-weight: 600;
    font-size: 1.2rem;
`;

function Label(props) {
    return <StyledLabel>{props.content}</StyledLabel>
}

export default Label;