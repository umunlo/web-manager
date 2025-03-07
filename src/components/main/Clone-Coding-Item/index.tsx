import { S } from "./index.style";
import select from "../../../assets/img/item/select.png";
import notSelect from "../../../assets/img/item/notselect.png";

export function CloneCodingItem() {
  return (
    <S.CardGrid>
      {Array.from({ length: 6 }, (_, i) => (
        <S.Card key={i}>
          <S.StarIcon src={select} alt="star" />
          <S.CardTitle>제목</S.CardTitle>
          <S.CardSubtitle>설명</S.CardSubtitle>
        </S.Card>
      ))}
    </S.CardGrid>
  );
}
