import React from "react";
import { S } from "./index.style";

export function DetailArea() {
  const ex = "안녕하세요 \n 안녕하세요";

  return (
    <S.DetailBox>
      세부사항
      <div>
        {ex.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </S.DetailBox>
  );
}
