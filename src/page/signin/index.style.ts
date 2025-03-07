import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `,

  HeroImageBox: styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  HeroImage: styled.img`
    width: 24vw;
    height: 40vh;
  `,
  SigninBox: styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 7%;
  `,
  Signin_Img: styled.img`
    margin-top: 34%;
    width: 40%;
    height: 6%;
  `,
  Signin_Input_Box: styled.div`
    width: 26vw;
    height: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  `,

  Sigin_Input_Info: styled.span`
    font-size: 30px;
  `,

  Signin_Input: styled.input`
    font-size: 30px;
    border: none;
    width: 100%;
    height: 100%;
    border-bottom: 4px solid black;
    &:focus {
      outline: none;
    }
  `,

  Submit_Ar: styled.div`
    width: 26vw;
    height: 8vh;

    span {
      display: block;
      margin-top: 2vh;
      margin-left: 15vw;
    }
  `,

  Submit_button: styled.div`
    width: 26vw;
    height: 6vh;
    background-color: black;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  `,
};
