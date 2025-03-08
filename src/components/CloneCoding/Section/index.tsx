import { S } from "./index.style";
import { useState } from "react";
import { CloneCodingItem } from "../Item/index";

//유저의 클론코딩 전채 선택여부 반환 [true,true, false, false, true .....]
//toggleSelected에서 바꿀때 해당하는 순서의 요소의 정보 변경(변경시 서버에 넣기)
export function CloneCodingZone() {
  const [selectedArr, setSelectedArr] = useState<boolean[]>(
    new Array(40).fill(false)
  );

  return (
    <S.CardGrid>
      {Array.from({ length: 40 }, (_, i: number) => (
        <CloneCodingItem
          index={i}
          selectedArr={selectedArr}
          setSelectedArr={setSelectedArr}
        ></CloneCodingItem>
      ))}
    </S.CardGrid>
  );
}
