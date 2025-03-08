import React, { useState } from "react";
import { S } from "./index.style";
import profile from "../../../assets/img/profile/profile.png";
import { LogoutModal } from "./LogoutModal/index";

export function UserButtonBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    // 실제 로그아웃 로직 처리
    console.log("로그아웃 처리");
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.ProfileBotton>
          <img src={profile} alt="profile" />
          <span>유저이름</span>
        </S.ProfileBotton>

        {/* 로그아웃 버튼 클릭 시 모달 오픈 */}
        <S.LogoutButton onClick={handleOpenModal}>
          <span>로그아웃</span>
        </S.LogoutButton>
      </S.Container>

      {/* 모달 컴포넌트 (조건부 렌더링) */}
      <LogoutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogout={handleLogout}
      />
    </>
  );
}
