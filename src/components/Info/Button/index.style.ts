import styled from "styled-components";

//버튼 컴포넌트가 들어가는 공간
const buttonAr = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
`;

//2개의 버튼이 들어가는 공간
const buttonBox = styled.div`
  margin-left: 60%;
  height: 100%;
  width: 34%;
  display: flex;
  justify-content: space-between;
  gap: 8%;
`;

const updateButton = styled.div`
  background-color: black;
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;

const deleteButton = styled.div`
  background-color: red;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;

export const S = {
  buttonAr,
  buttonBox,
  updateButton,
  deleteButton,
};
