import React from "react";
import Header from "../header/header";
import * as S from "./styles";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
