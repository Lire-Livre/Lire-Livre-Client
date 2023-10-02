import React from "react";
import styled from "styled-components";
import LireLivreTitle from "../../components/molecule/LireLivreTitle";
import LoginInputs from "../../components/organism/LoginInputs";
import LoginSignupText from "../../components/organism/LoginSignupText";

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 35rem;
`;

function EmailLoginPage() {
    return (
        <StyledDiv>
            <LireLivreTitle></LireLivreTitle>
            <LoginInputs></LoginInputs>
            <LoginSignupText></LoginSignupText>
        </StyledDiv>
    );
}

export default EmailLoginPage;