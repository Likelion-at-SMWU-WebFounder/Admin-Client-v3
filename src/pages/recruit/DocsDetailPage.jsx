import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./DocsDetailPage.style";
import * as L from "../../style/LayoutStyle";
import apiModule from "../../api/apiModule";
import Form from "../../components/document/Form";
import Question from "../../components/document/Question";

const DocsDetailPage = () => {
  const { joinerId } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const data = await apiModule.fetchDocumentDetail(joinerId);
        setDocumentData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocumentData();
  }, [joinerId]);

  return (
    <S.Layout>
      <S.LogoContainer>
        <img
          src={`${process.env.PUBLIC_URL}/smwu_lion_logo_white.svg`}
          alt="Logo"
        />
      </S.LogoContainer>
      <L.Container>
        <Form documentData={documentData} />
        <Question documentData={documentData} />
      </L.Container>
    </S.Layout>
  );
};

export default DocsDetailPage;
