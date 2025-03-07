import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 16vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
      display: none;
    }
  `,

  Sideber: styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: center;
  `,

  Logo: styled.img`
    width: 70%;
    height: 5%;
  `,
};
