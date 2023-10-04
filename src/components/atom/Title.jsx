import React, { Component } from "react";
import styled from "styled-components";
import "../../css/Title.css";


const StyledTitle = styled.h1`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: #426B22;
    font-family: 'Lemon';
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

class Title extends Component {
    render() {
        return (
            <StyledTitle>Lire Livre</StyledTitle>
        );
    }
}

export default Title;