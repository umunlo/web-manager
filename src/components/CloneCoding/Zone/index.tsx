import { S } from "./index.style";
import { CloneCodingZone } from "../Section/index";
import useRouter from "../../../router/router";

export function CloneCodingSection() {
  const { navigateAdd } = useRouter();

  return (
    <S.PageContainer>
      {/* 첫 번째 섹션 */}
      <S.SectionContainer>
        <S.SectionTitleBox>
          <S.SectionTitle>전체 클론코딩</S.SectionTitle>
          <S.SectionTitle onClick={() => navigateAdd()}>+</S.SectionTitle>
        </S.SectionTitleBox>
        <S.CloneCodingItemBox>
          <CloneCodingZone></CloneCodingZone>
        </S.CloneCodingItemBox>
      </S.SectionContainer>
    </S.PageContainer>
  );
}
