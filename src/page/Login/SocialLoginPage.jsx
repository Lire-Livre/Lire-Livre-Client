import React from "react";
import styled from "styled-components";
import LireLivreTitle from "../../components/molecule/LireLivreTitle";
import Hr from "../../components/atom/Hr";
import SocialButtons from "../../components/organism/SocialButtons";

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 35rem;
`;
function SocialLogin() {
    return (
        <StyledDiv>
            <LireLivreTitle></LireLivreTitle>
            <Hr content="로그인/회원가입"></Hr>
            <SocialButtons></SocialButtons>
        </StyledDiv>
    );
}

export default SocialLogin;