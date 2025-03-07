import { S } from "./index.style";
import LogoImg from "../../assets/img/logo/logo.png";
import { Menu } from "./menu/index";
import { UserButtonBox } from "./User-Button-Box/index";
import useRouter from "../../router/router";

export function Sidebar() {
  const { navigateHome } = useRouter();

  return (
    <S.Container>
      <S.Sideber>
        <S.Logo src={LogoImg} onClick={() => navigateHome()}></S.Logo>
        <Menu></Menu>
        <UserButtonBox></UserButtonBox>
      </S.Sideber>
    </S.Container>
  );
}
