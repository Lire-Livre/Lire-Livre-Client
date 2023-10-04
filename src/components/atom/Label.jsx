import React from "react";
import styled from "styled-components";

const StyledTitleLabel = styled.label`
    margin-top: 5rem;
    font-weight: 600;
    font-size: 1.2rem;
`;

const StyledLabel = styled.a`
    font-weight: 600;
`;

function Label(props) {
    var _type = props.type;
    var _content = props.content;

    if (_type === 'title') {
        return (
            <StyledTitleLabel>{_content}</StyledTitleLabel>
        );
    } else {
        return (
            <StyledLabel>{_content}</StyledLabel>
        );
    }
}

export default Label;