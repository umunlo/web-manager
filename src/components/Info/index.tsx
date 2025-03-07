import { S } from "./index.style";
import { LargeImgArea } from "./LargeImgArea/index";
import { InfoCard } from "./InfoCard/index";
import { DetailArea } from "./DetailArea/index";

export function InfoBox() {
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
      </S.Container>
    </S.PageContainer>
  );
}
