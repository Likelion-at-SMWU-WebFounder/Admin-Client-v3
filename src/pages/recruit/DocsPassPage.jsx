import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/common/Navbar";
import Board from "../../components/board/Board";

const DocsPassPage = () => {
  const [docs, setDocs] = useState([]);

  const fetchData = async () => {
    try {
      const data = await apiModule.fetchDocsResult();
      setDocs(data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteDocsResult = async (checkedItems) => {
    try {
      await apiModule.deleteDocsResult(checkedItems);
      await fetchData();
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>서류 합격자 보기</S.Title>
          <S.About>서류 합격 서류를 분류하여 별도로 관리합니다.</S.About>
          <S.SubTitle>서류 합격자 테이블</S.SubTitle>
          <Board pass={docs} type="type2" onDelete={deleteDocsResult} />
        </S.Container>
      </S.Layout>
    </>
  );
};

export default DocsPassPage;
