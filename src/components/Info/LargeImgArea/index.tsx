import { S } from "./index.style";
import defaultImg from "../../../assets/img/clonecoding/Default.png";

//여기에 들어가는 이미지는 스토어에서 받아오기

export function LargeImgArea() {
  return (
    <S.ImgArea>
      <S.Img src={defaultImg}></S.Img>
    </S.ImgArea>
  );
}
