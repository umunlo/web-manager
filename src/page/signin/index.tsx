//여기에 있는 모든 컴포넌트는 분리

import { useEffect } from "react";
import { S } from "./index.style.ts";

import HeroImage from "../../assets/img/auth/Auth-Hero-Img.png";
import logo from "../../assets/img/logo/logo.png";

export const Signin = () => {
  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  return (
    <S.Container>
      <S.HeroImageBox>
        <S.HeroImage src={HeroImage}></S.HeroImage>
      </S.HeroImageBox>

      <S.SigninBox>
        <S.Signin_Img src={logo}></S.Signin_Img>
        <S.Signin_Input_Box>
          <S.Signin_Input placeholder="email"></S.Signin_Input>

          <S.Signin_Input placeholder="password"></S.Signin_Input>
        </S.Signin_Input_Box>
        <S.Submit_Ar>
          <S.Submit_button>로그인</S.Submit_button>
          <span>
            계정이 없으신가요? <u>회원가입</u>
          </span>
        </S.Submit_Ar>
      </S.SigninBox>
    </S.Container>
  );
};
