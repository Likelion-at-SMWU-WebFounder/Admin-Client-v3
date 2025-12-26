import React from "react";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/common/Navbar";

const HomePage = () => {
  return (
    <>
      <S.Layout>
        <Navbar />
        <S.HomeContainer>
          <img
            src={`${process.env.PUBLIC_URL}/LogoBlack.svg`}
            width="444px"
            alt="Logo"
          />
        </S.HomeContainer>
      </S.Layout>
    </>
  );
};

export default HomePage;
