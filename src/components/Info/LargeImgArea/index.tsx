import React from "react";
import { S } from "./index.style";
import testImg from "../../../assets/img/favicon/favicon.png";

export function LargeImgArea() {
  return (
    <S.ImgArea>
      <S.Img src={testImg}></S.Img>
    </S.ImgArea>
  );
}
