import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Logo.style";

const Logo = () => {
  return (
    <Link to="/">
      <S.LogoContainer>
        <img
          src={`${process.env.PUBLIC_URL}/smwu_lion_logo_white.svg`}
          alt="Logo"
        />
        <img src={`${process.env.PUBLIC_URL}/AdminLogo.svg`} alt="Logo" />
      </S.LogoContainer>{" "}
    </Link>
  );
};

export default Logo;
