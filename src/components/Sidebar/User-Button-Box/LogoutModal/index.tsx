import React from "react";
import { S } from "./index.style";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function LogoutModal({ isOpen, onClose, onLogout }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={() => onClose()}>
      <S.ModalContent>
        <span>로그아웃 하시겠습니까?</span>
        <S.ButtonBox>
          <S.ConfirmButton onClick={onLogout}>로그아웃</S.ConfirmButton>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
