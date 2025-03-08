import { S } from "./index.style";

export function Button() {
  return (
    <S.buttonAr>
      <S.buttonBox>
        <S.updateButton>수정</S.updateButton>
        <S.deleteButton>삭제</S.deleteButton>
      </S.buttonBox>
    </S.buttonAr>
  );
}
