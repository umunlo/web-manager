import styled from "styled-components";

export const S = {
  Card: styled.div`
    width: 80%;
    position: relative;
    background-color: #fafafa;
    border-radius: 8px;
    padding: 1rem;
    min-height: 140px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: "cover";
    background-position: "center";
    background-repeat: "no-repeat";
  `,

  StarIcon: styled.img`
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    width: 40px;
    height: 40px;
  `,

  CardTitle: styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: white;
  `,

  CardSubtitle: styled.div`
    font-size: 1rem;
    color: whitesmoke;
  `,
};
