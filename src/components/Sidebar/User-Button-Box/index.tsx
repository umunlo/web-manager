import { S } from "./index.style";
import profile from "../../../assets/img/profile/profile.png";

export function UserButtonBox() {
  return (
    <S.Container>
      <S.ProfileBotton>
        <img src={profile}></img>
        <span>유저이름</span>
      </S.ProfileBotton>
      <S.LogoutButton>
        <span>로그아웃</span>
      </S.LogoutButton>
    </S.Container>
  );
}
