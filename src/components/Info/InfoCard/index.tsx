import React from "react";
import { S } from "./index.style";
import { ChipGroup } from "./ChipGroup/index";

export function InfoCard() {
  return (
    <S.Container>
      <S.Title>제목</S.Title>
      <S.Description>설명</S.Description>
      <ChipGroup />
    </S.Container>
  );
}
