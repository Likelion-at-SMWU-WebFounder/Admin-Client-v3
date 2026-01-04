import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style/DocsDetailPage.style";
import apiModule from "../../api/apiModule";
import Form from "../../components/document/Form";
import Question from "../../components/document/Question";
import InterviewTime from "../../components/document/InterviewTime";

const DocsDetailPage = () => {
  const { joinerId } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const data = await apiModule.fetchDocumentDetail(joinerId);
        setDocumentData(data);

        const track = data.studentInfo.track?.toUpperCase();
        const name = data.studentInfo.name?.toUpperCase();

        document.title = `[${track}] ${name}`;
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
      <S.Container>
        <S.ContetnContainer width="300px">
          <Form documentData={documentData} />
          <InterviewTime documentData={documentData} />
        </S.ContetnContainer>
        <S.Divider />

        <S.ContetnContainer>
          <Question documentData={documentData} />
        </S.ContetnContainer>
      </S.Container>
    </S.Layout>
  );
};

export default DocsDetailPage;
