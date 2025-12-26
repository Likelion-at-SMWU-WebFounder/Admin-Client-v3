import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/common/Navbar";
import Board from "../../components/board/Board";

const FinalPassPage = () => {
  const [docs, setDocs] = useState([]);

  const fetchDocsResult = async () => {
    try {
      const data = await apiModule.fetchInterviewResults();
      setDocs(data);
    } catch (err) {
      console.error("err", err);
    }
  };

  useEffect(() => {
    fetchDocsResult();
  }, []);

  const deleteInterview = async (checkedItems) => {
    try {
      await apiModule.deleteInterview(checkedItems);
      await fetchDocsResult();
    } catch (err) {
      console.error("err", err);
    }
  };
  return (
    <>
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>최종 합격자 보기</S.Title>
          <S.About>최종 합격자를 조회합니다.</S.About>
          <S.SubTitle>최종 합격자 테이블</S.SubTitle>
          <Board pass={docs} type="type2" onDelete={deleteInterview} />
        </S.Container>
      </S.Layout>
    </>
  );
};

export default FinalPassPage;
