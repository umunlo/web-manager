import React from "react";
import { S } from "./index.style";
import { Sidebar } from "../../components/sidebar";
import { InfoBox } from "../../components/Info/index";

export function Info() {
  return (
    <S.Container>
      <Sidebar></Sidebar>
      <InfoBox></InfoBox>
    </S.Container>
  );
}
