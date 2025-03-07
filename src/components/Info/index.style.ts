import styled from "styled-components";

const PageContainer = styled.div`
  width: 100vw;
  height: 74vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 80%;
  height: 98%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8%;
`;

const TopInpoBox = styled.div`
  margin-top: 40px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14%;
`;

export const S = {
  PageContainer,
  Container,
  TopInpoBox,
};
