import React from "react";
import { S } from "./index.style";

export function ChipGroup() {
  const chips = ["언어1, 언어2, 언어3"];

  return (
    <S.ChipContainer>
      <S.ChipInput placeholder={chips.join(", ")} />
    </S.ChipContainer>
  );
}
