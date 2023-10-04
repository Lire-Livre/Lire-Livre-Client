import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(120, 120, 120, 1);
    font-size: 12px;
    margin: 8px 0px;
    &::before, &::after {
        content: "";
        flex-grow: 1;
        background: rgba(120, 120, 120, 1);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }
`;

function Hr (props) {
    return (
        <StyledDiv>{props.content}</StyledDiv>
    );
}

export default Hr;