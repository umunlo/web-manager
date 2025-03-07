import { Sidebar } from "../../components/Sidebar";
import { S } from "./index.style";
import { CloneCodingSection } from "../../components/main/Clone-Coding-Section";

export function Home() {
  return (
    <S.Container>
      <Sidebar></Sidebar>
      <CloneCodingSection></CloneCodingSection>
    </S.Container>
  );
}
