import { S } from "./index.style";
import bookmarkImg from "../../../assets/img/memu/bookmark.png";
import storageImg from "../../../assets/img/memu/storage.png";

export function Menu() {
  return (
    <S.Container>
      <S.MemuBox>
        <img src={bookmarkImg} />
        <span>북마크</span>
      </S.MemuBox>

      <S.MemuBox>
        <img src={storageImg} />
        <span>보관함</span>
      </S.MemuBox>
    </S.Container>
  );
}
