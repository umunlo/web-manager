import { S } from "./index.style";

//컴포넌트
import { LargeImgArea } from "./LargeImgArea/index";
import { InfoCard } from "./InfoCard/index";
import { DetailArea } from "./DetailArea/index";
import { Button } from "./Button";

export function AddBox() {
  return (
    <S.PageContainer>
      <S.Container>
        <S.TopInpoBox>
          {/* 이미지 */}
          <LargeImgArea />

          {/* 오른쪽 카드 (제목, 설명, 언어 태그 등) */}
          <InfoCard />
        </S.TopInpoBox>

        {/* 하단 큰 회색 박스 (세부사항) */}
        <DetailArea />

        {/* 하단 추가 (버튼) */}
        <Button />
      </S.Container>
    </S.PageContainer>
  );
}
