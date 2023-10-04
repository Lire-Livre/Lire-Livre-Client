import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgButton from "../atom/ImgButton";

const StyledDiv = styled.div`
    margin-top: 2rem;
`;

function SocialButtons() {
    return (
        <StyledDiv>
            <ImgButton type="social" platform="naver"></ImgButton>
            <ImgButton type="social" platform="kakao"></ImgButton>
            <Link to="/login/email">
                <ImgButton type="social" platform="email"></ImgButton>
            </Link>
        </StyledDiv>
    );
}

export default SocialButtons;