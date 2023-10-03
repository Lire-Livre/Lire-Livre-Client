import React from "react";
import styled from "styled-components";
import LireLivreTitle from "../../components/molecule/LireLivreTitle";
import SignupInputs from "../../components/organism/SignupInputs";

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 35rem;
`;

function SignupPage() {
    return(
        <StyledDiv>
            <LireLivreTitle></LireLivreTitle>
            <SignupInputs></SignupInputs>
        </StyledDiv>
    );
}

export default SignupPage;