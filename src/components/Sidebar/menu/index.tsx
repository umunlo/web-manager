import { S } from "./index.style";
import bookmarkImg from "../../../assets/img/memu/bookmark.png";
import storageImg from "../../../assets/img/memu/storage.png";
import useRouter from "../../../router/router.ts";

export function Menu() {
  const { navigateBookmark, navigateStorage } = useRouter();

  return (
    <S.Container>
      <S.MemuBox onClick={() => navigateBookmark()}>
        <img src={bookmarkImg} />
        <span>북마크</span>
      </S.MemuBox>

      <S.MemuBox onClick={() => navigateStorage()}>
        <img src={storageImg} />
        <span>보관함</span>
      </S.MemuBox>
    </S.Container>
  );
}
