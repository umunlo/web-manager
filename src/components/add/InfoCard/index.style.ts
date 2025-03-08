import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  min-height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin: 0 0 8px 0;
  font-size: 0.7rem;
  border: none;
  border-radius: 10px;
`;

const TitleInput = styled.input`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`;

const DescriptionInput = styled.input`
  margin: 0 0 16px 0;
  color: #555;
`;

export const S = {
  Container,
  Button,
  TopBar,
  TitleInput,
  DescriptionInput,
};
