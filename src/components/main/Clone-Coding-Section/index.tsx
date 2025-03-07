import { S } from "./index.style";
import { CloneCodingItem } from "../Clone-Coding-Item";

//색션당 컴포넌트로 분리

export function CloneCodingSection() {
  const arr = ["app", "web"]; //전공 이름
  const name = 2; //전공 수
  const l = "ts"; //진행중인 언어

  return (
    <S.PageContainer>
      {/* 첫 번째 섹션 */}
      <S.SectionContainer>
        <S.SectionTitle>전체 클론코딩</S.SectionTitle>
        <S.BadgeWrapper>
          {Array.from(
            { length: name },
            (
              _,
              i // 전공이름
            ) => (
              <S.Badge>{arr[i]}</S.Badge>
            )
          )}
        </S.BadgeWrapper>
        <CloneCodingItem></CloneCodingItem>
      </S.SectionContainer>

      {/* 두 번째 섹션 */}
      <S.SectionContainer>
        <S.SectionTitle>언어기반 추천 클론코딩</S.SectionTitle>
        <S.BadgeWrapper>
          <S.Badge>{l}</S.Badge>
        </S.BadgeWrapper>
      </S.SectionContainer>
    </S.PageContainer>
  );
}
