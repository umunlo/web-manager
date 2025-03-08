import { S } from "./index.style";
import { CloneCodingItemProps } from "./type";

import useRouter from "../../../router/router";

import select from "../../../assets/img/item/select.png";
import notSelect from "../../../assets/img/item/notselect.png";

import defaultImg from "../../../assets/img/clonecoding/Default.png";

export function CloneCodingItem({
  index,
  selectedArr,
  setSelectedArr,
}: CloneCodingItemProps) {
  const { navigateInfo } = useRouter();

  const toggleSelected = (index: number) => {
    setSelectedArr(
      selectedArr.map((item, i) => (i === index ? !item : item)) // 해당 index만 변경
    );
  };

  return (
    <S.Card
      onClick={() => navigateInfo()}
      style={{
        backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${defaultImg})`,
      }}
    >
      <S.StarIcon
        src={selectedArr[index] ? select : notSelect} // 개별 상태 적용
        alt="star"
        onClick={(e) => {
          e.stopPropagation();
          toggleSelected(index);
        }} // 개별 상태 변경 함수
      />
      <S.CardTitle>제목</S.CardTitle>
      <S.CardSubtitle>설명</S.CardSubtitle>
    </S.Card>
  );
}
