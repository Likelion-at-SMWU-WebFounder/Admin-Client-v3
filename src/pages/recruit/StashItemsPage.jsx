import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
import * as L from "../../style/LayoutStyle";
import Navbar from "../../components/common/Navbar";
import Board from "../../components/board/Board";

const StashItemsPage = () => {
  const [docs, setDocs] = useState([]);

  const fetchDocsResult = async () => {
    try {
      const data = await apiModule.fetchStashResult();
      setDocs(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchDocsResult();
  }, []);

  const previewLists = docs.map((item) => item.applicationDocumentPreviewList);

  const sortedPreviewLists = previewLists.map((documents) =>
    documents.sort((a, b) => a.joinerId - b.joinerId)
  );

  const handleRestoreApply = async (checkedItems) => {
    try {
      await apiModule.restoreDocs(checkedItems);
      await fetchDocsResult();
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <L.Layout>
        <Navbar />
        <L.Container>
          <L.Title>휴지통</L.Title>
          <L.About>임시 삭제된 서류를 관리합니다.</L.About>
          <Board
            pass={sortedPreviewLists}
            type="type4"
            onDelete={handleRestoreApply}
          />
        </L.Container>
      </L.Layout>
    </>
  );
};

export default StashItemsPage;
