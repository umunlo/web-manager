import styled from "styled-components";

export const S = {
  Container: styled.div`
    height: 14%;
    width: 72%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
  `,

  ProfileBotton: styled.div`
    width: 100%;
    height: 40%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    font-size: 22px;
    font-weight: bold;
    border-radius: 10px;
  `,

  LogoutButton: styled.div`
    width: 100%;
    height: 30%;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `,
};
