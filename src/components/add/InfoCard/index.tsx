import { S } from "./index.style";
import { ChipGroup } from "./ChipGroup/index";

//이미지는 스토어에 집어넣기
export function InfoCard() {
  return (
    <S.Container>
      <S.TopBar>
        <S.TitleInput placeholder={"제목"} />
        <S.Button>이미지 업로드</S.Button>
      </S.TopBar>
      <S.DescriptionInput placeholder={"설명"}/>
      <ChipGroup />
    </S.Container>
  );
}
