import React, { Component } from "react";
import styled from "styled-components";
import LireLivreTitle from "../components/molecule/LireLivreTitle";
import Hr from "../components/atom/Hr";
import SocialButtons from "../components/organism/SocialButtons";

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 35rem;
`;

class SocialLogin extends Component {
    render() {
        return (
            <StyledDiv>
                <LireLivreTitle></LireLivreTitle>
                <Hr></Hr>
                <SocialButtons></SocialButtons>
            </StyledDiv>
        );
    }
}

export default SocialLogin;