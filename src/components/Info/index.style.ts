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
  width: 90%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TopInpoBox = styled.div`
  width: 80%;
`;

export const S = {
  PageContainer,
  Container,
  TopInpoBox,
};
