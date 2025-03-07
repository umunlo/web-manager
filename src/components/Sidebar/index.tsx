import { S } from "./index.style";
import LogoImg from "../../assets/img/logo/logo.png";
import { Menu } from "./menu/index";
import { UserButtonBox } from "./User-Button-Box/index";

export function Sidebar() {
  return (
    <S.Container>
      <S.Sideber>
        <S.Logo src={LogoImg}></S.Logo>
        <Menu></Menu>
        <UserButtonBox></UserButtonBox>
      </S.Sideber>
    </S.Container>
  );
}
