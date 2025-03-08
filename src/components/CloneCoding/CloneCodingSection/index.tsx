import { S } from "./index.style";
import { CloneCodingColumn } from "../CloneCodingColumn";
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
          <CloneCodingColumn></CloneCodingColumn>
        </S.CloneCodingItemBox>
      </S.SectionContainer>
    </S.PageContainer>
  );
}
