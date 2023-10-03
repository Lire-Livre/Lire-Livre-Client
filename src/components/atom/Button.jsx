import React from "react";
import styled from "styled-components";
import socialLoginImg_naver from "../../img/SocialLoginButtonImg/SocialLoginButton_Naver.png";
import socialLoginImg_Kakao from "../../img/SocialLoginButtonImg/SocialLoginButton_Kakao.png";
import socialLoginImg_Email from "../../img/SocialLoginButtonImg/SocialLoginButton_Email.png";

const SocialButton = styled.button`
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    border: none;
    background: none;
`;

const StyledSignupIdButton = styled.button`
    margin: auto 0;
    margin-left: 1rem;
    margin-top: 0.4rem;
    height: 2.8rem;
    width: 5rem;
    border-radius: 10px;
    border: 1px solid #000;
    background: #426B22;
    color: white;
`;

const StyledImg = styled.img`
    width: 25rem;
`;

function Button(props) {
    var _type = props.type;
    var _platform = props.platform;

    if (_type === 'social') {
        if (_platform === 'naver') {
            return (
                <SocialButton><StyledImg src={socialLoginImg_naver}></StyledImg></SocialButton>
            );
        } else if (_platform === 'kakao') {
            return (
                <SocialButton><StyledImg src={socialLoginImg_Kakao}></StyledImg></SocialButton>
            );
        } else if (_platform === 'email') {
            return (
                <SocialButton><StyledImg src={socialLoginImg_Email}></StyledImg></SocialButton>
            );
        }
    } else {
        return (
            <StyledSignupIdButton>중복 확인</StyledSignupIdButton>
        );
    }
}

export default Button; 