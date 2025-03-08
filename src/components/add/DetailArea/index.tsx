import React from "react";
import { S } from "./index.style";

export function DetailArea() {
  const ex = "안녕하세요 \n안녕하세요";

  return (
    <S.DetailBox>
      세부사항
      <div>
        <S.TextArea placeholder={ex.split("\n").join("\n")} />
      </div>
    </S.DetailBox>
  );
}
