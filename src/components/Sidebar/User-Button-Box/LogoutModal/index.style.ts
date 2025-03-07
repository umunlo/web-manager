import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 320px;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
`;

const ConfirmButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;

const CancelButton = styled.button`
  background-color: #f44336;
  border: #f44336 ;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const S = {
  ModalOverlay,
  ModalContent,
  ButtonBox,
  ConfirmButton,
  CancelButton,
};
