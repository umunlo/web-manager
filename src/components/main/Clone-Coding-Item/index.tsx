import { S } from "./index.style";
import { useState } from "react";

import select from "../../../assets/img/item/select.png";
import notSelect from "../../../assets/img/item/notselect.png";

import useRouter from "../../../router/router";

//유저의 클론코딩 전채 선택여부 반환 [true,true, false, false, true .....]
//toggleSelected에서 바꿀때 해당하는 순서의 요소의 정보 변경(변경시 서버에 넣기)
export function CloneCodingItem() {
  const { navigateInfo } = useRouter();

  const [selected, setSelected] = useState<boolean[]>(
    new Array(40).fill(false)
  );

  const toggleSelected = (index: number) => {
    setSelected(
      (prev) => prev.map((item, i) => (i === index ? !item : item)) // 해당 index만 변경
    );
  };

  return (
    <S.CardGrid>
      {Array.from({ length: 40 }, (_, i) => (
        <S.Card key={i} onClick={() => navigateInfo()}>
          <S.StarIcon
            src={selected[i] ? select : notSelect} // 개별 상태 적용
            alt="star"
            onClick={(e) => {
              e.stopPropagation();
              toggleSelected(i);
            }} // 개별 상태 변경 함수
          />
          <S.CardTitle>제목</S.CardTitle>
          <S.CardSubtitle>설명</S.CardSubtitle>
        </S.Card>
      ))}
    </S.CardGrid>
  );
}
