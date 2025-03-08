import { S } from "./index.style";
import LogoImg from "../../assets/img/logo/logo.png";
import { UserButtonBox } from "./UserButtonBox/index";
import useRouter from "../../router/router";

export function Sidebar() {
  const { navigateHome } = useRouter();

  return (
    <S.Container>
      <S.Sideber>
        <S.Logo src={LogoImg} onClick={() => navigateHome()}></S.Logo>
        <UserButtonBox></UserButtonBox>
      </S.Sideber>
    </S.Container>
  );
}
