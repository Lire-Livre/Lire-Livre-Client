import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../atom/Button";

const StyledDiv = styled.div`
    margin-top: 2rem;
`;

function SocialButtons() {
    return (
        <StyledDiv>
            <Button type="social" platform="naver"></Button>
            <Button type="social" platform="kakao"></Button>
            <Link to="/login/email">
                <Button type="social" platform="email"></Button>
            </Link>
        </StyledDiv>
    );
}

export default SocialButtons;