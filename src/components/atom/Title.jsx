import React from "react";
import styled from "styled-components";
import "./Title.css";


const StyledTitle = styled.h1`
    margin-top: 0.5rem;
    color: #426B22;
    font-family: 'Lemon';
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

function Title () {
    return (
        <StyledTitle>Lire Livre</StyledTitle>
    );
}

export default Title;