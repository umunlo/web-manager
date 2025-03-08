import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 16vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 630px) {
      display: none;
    }
  `,

  Sideber: styled.div`
    position: fixed;
    width: 15vw;
    height: 84vh;
    z-index: 10;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  `,

  Logo: styled.img`
    width: 70%;
    height: 5%;
    margin-bottom: 500px;
  `,
};
