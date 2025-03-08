import { Sidebar } from "../../components/sidebar";
import { S } from "./index.style";
import { CloneCodingSection } from "../../components/CloneCoding/Zone/index";

export function Home() {
  return (
    <S.Container>
      <Sidebar></Sidebar>
      <CloneCodingSection></CloneCodingSection>
    </S.Container>
  );
}
