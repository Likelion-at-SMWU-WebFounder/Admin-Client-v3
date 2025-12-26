import React from "react";
import apiModule from "../../api/apiModule";
import * as S from "../../style/LayoutStyle";
import * as B from "../../components/button/Button.style";
import Navbar from "../../components/common/Navbar";

const InitApplyPage = () => {
  const onClickInitButton = async () => {
    if (
      window.confirm(
        "지원자 정보를 정말 초기화하시겠습니까?\n초기화된 정보는 재복구가 불가합니다."
      )
    ) {
      try {
        await apiModule.initApplicant();
      } catch (err) {
        console.error("err", err);
      }
      alert("지원자 정보가 정말 초기화되었습니다.");
    }
  };

  return (
    <>
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>지원자 정보 초기화</S.Title>
          <S.About>
            지원자 정보를 초기화합니다. 초기화된 정보는 재복구가 어렵습니다.
          </S.About>
          <B.Button
            color="#ff1d1d"
            fontColor="white"
            onClick={onClickInitButton}
          >
            <B.ButtonText>지원자 정보 초기화</B.ButtonText>
          </B.Button>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default InitApplyPage;
