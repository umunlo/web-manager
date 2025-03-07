import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 72%;
    height: 60%;
    margin-top: 8vh;
  `,

  MemuBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding-top: 40px;

    span {
      @media (max-width: 870px) {
        display: none;
      }
    }
  `,
};
