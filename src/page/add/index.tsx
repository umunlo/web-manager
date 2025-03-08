import React from "react";
import { S } from "./index.style";
import { Sidebar } from "../../components/sidebar";
import { AddBox } from "../../components/add/index";

export function Add() {
  return (
    <S.Container>
      <Sidebar></Sidebar>
      <AddBox></AddBox>
    </S.Container>
  );
}
