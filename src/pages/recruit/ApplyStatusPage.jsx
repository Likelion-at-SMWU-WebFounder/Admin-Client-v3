import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
import * as L from "../../style/LayoutStyle";
import * as S from "./ApplyStatusPage.style";
import Navbar from "../../components/common/Navbar";
import Board from "../../components/board/Board";

const ApplyStatusPage = () => {
  const [docs, setDocs] = useState([]);

  const fetchDocsResult = async () => {
    try {
      const data = await apiModule.fetchFirstDocs();
      setDocs(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchDocsResult();
  }, []);

  const previewLists = docs.map((item) => item.applicationDocumentPreviewList);
  const applicationStatus = docs.map((item) => item.applicationStatusByTrack);

  const sortedPreviewLists = previewLists.map((documents) =>
    documents.sort((a, b) => a.joinerId - b.joinerId)
  );

  const handleAddToDocs = async (checkedItems) => {
    try {
      await apiModule.addToDocs(checkedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteApply = async (checkedItems) => {
    try {
      await apiModule.deleteApply(checkedItems);
      await fetchDocsResult();
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <L.Layout>
        <Navbar />
        <S.VLine></S.VLine>
        <L.Container>
          <L.Title>지원 현황 및 지원 서류</L.Title>
          <L.About>
            신규모집 지원현황을 확인하고, 지원 서류를 관리합니다.
          </L.About>
          <L.SubTitle>지원 현황</L.SubTitle>
          <S.StateContainer>
            <S.StateBox>
              <S.StateItem>전체 지원자</S.StateItem>
              {applicationStatus.length > 0 && (
                <S.StateNum>{applicationStatus[0].allApplicants}명</S.StateNum>
              )}
            </S.StateBox>
            <S.StateBox>
              <S.StateItem>기획·디자인</S.StateItem>
              {applicationStatus.length > 0 && (
                <S.StateNum>{applicationStatus[0].pmApplicants}명</S.StateNum>
              )}
            </S.StateBox>
            <S.StateBox>
              <S.StateItem>프론트엔드</S.StateItem>
              {applicationStatus.length > 0 && (
                <S.StateNum>{applicationStatus[0].feApplicants}명</S.StateNum>
              )}
            </S.StateBox>
            <S.StateBox>
              <S.StateItem>백엔드</S.StateItem>
              {applicationStatus.length > 0 && (
                <S.StateNum>{applicationStatus[0].beApplicants}명</S.StateNum>
              )}
            </S.StateBox>
          </S.StateContainer>
          <Board
            pass={sortedPreviewLists}
            type="type1"
            onAdd={handleAddToDocs}
            onDelete={handleDeleteApply}
          />
        </L.Container>
      </L.Layout>
    </>
  );
};

export default ApplyStatusPage;
