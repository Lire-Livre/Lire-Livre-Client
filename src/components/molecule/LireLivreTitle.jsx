import React, { Component } from "react";
import styled from "styled-components";
import Label from "../atom/Label";
import Title from "../atom/Title";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

function LireLivreTitle() {
    return (
        <StyledDiv>
            <Label type="title" content={"즐거운 독서모임의 시작"}></Label>
            <Title></Title>
        </StyledDiv>
    );
}

export default LireLivreTitle;