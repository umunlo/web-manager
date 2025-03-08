import { S } from "./index.style";
import testImg from "../../../assets/img/favicon/favicon.png";

//여기에 들어가는 이미지는 스토어에서 받아오기

export function LargeImgArea() {
  return (
    <S.ImgArea>
      <S.Img src={testImg}></S.Img>
    </S.ImgArea>
  );
}
